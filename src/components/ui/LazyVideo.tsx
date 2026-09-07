"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Vídeo que só baixa quando deve baixar.
 *
 * Por que isto existe: `preload="none"` NÃO segura um vídeo com `autoPlay`.
 * O navegador entende que precisa tocar assim que puder e baixa o arquivo de
 * qualquer jeito. Na home isso custava 5,25 MB por visita — 4,37 MB só do
 * vídeo das vans, que fica muito abaixo da dobra e roda inclusive no celular.
 *
 * A solução é não colocar o <source> no HTML. Sem fonte, não há o que baixar.
 * A fonte entra depois, e o gatilho depende do caso:
 *
 *   - padrão: um IntersectionObserver injeta a fonte quando o vídeo se
 *     aproxima da janela (é o caso do vídeo das vans, lá embaixo);
 *   - `imediato`: a fonte entra já na montagem, sem esperar observador
 *     nenhum. É o caso do Hero, que está no topo da tela: adiar ali só
 *     atrasava o primeiro quadro sem economizar nada.
 *
 * `somenteAcimaDe` é a trava de largura: abaixo dela a fonte NUNCA entra, em
 * gatilho nenhum. É assim que o vídeo do Hero não é baixado no celular —
 * `hidden sm:block` esconde o elemento, mas esconder não impede o download.
 *
 * `revelarComPrimeiroQuadro` resolve a tela escura: entre pedir o vídeo e ter
 * o primeiro quadro decodificado, o navegador pinta o elemento de preto. Com
 * essa opção o vídeo nasce transparente e só aparece quando há quadro de
 * verdade — até lá quem se vê é a imagem que estiver atrás dele.
 */
export default function LazyVideo({
  src,
  poster,
  posterInativo,
  className,
  style,
  margem = "300px",
  imediato = false,
  somenteAcimaDe,
  revelarComPrimeiroQuadro = false,
  children,
  ...props
}: {
  src: string;
  poster: string;
  /** Pôster usado enquanto a trava de largura não liberar o vídeo. Serve
   *  para o celular não baixar uma arte que ele nunca vai mostrar. */
  posterInativo?: string;
  className?: string;
  /** Distância antes da tela em que o download começa. */
  margem?: string;
  /** Injeta a fonte já na montagem, em vez de esperar o vídeo se aproximar. */
  imediato?: boolean;
  /** Largura mínima da janela, em px, para o vídeo existir. */
  somenteAcimaDe?: number;
  /** Mantém o vídeo transparente até haver um quadro decodificado. */
  revelarComPrimeiroQuadro?: boolean;
  children?: React.ReactNode;
} & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ativo, setAtivo] = useState(false);
  const [temQuadro, setTemQuadro] = useState(false);
  // Começa `false` no servidor e no primeiro render do cliente — sem isso o
  // HTML do servidor e o da hidratação divergiriam.
  const [liberado, setLiberado] = useState(somenteAcimaDe === undefined);

  // ── Trava de largura ──
  useEffect(() => {
    if (somenteAcimaDe === undefined) return;
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mq = window.matchMedia(`(min-width: ${somenteAcimaDe}px)`);
    const aplicar = () => setLiberado(mq.matches);
    aplicar();
    mq.addEventListener("change", aplicar);
    return () => mq.removeEventListener("change", aplicar);
  }, [somenteAcimaDe]);

  // ── Gatilho da fonte ──
  useEffect(() => {
    if (!liberado || ativo) return;

    // Hero: nada de esperar. O elemento já está na primeira tela.
    if (imediato) {
      setAtivo(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Sem suporte a IntersectionObserver, carrega direto — melhor um vídeo
    // pesado que um quadro parado para sempre.
    if (typeof IntersectionObserver === "undefined") {
      setAtivo(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          setAtivo(true);
          obs.disconnect();
        }
      },
      { rootMargin: margem }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ativo, liberado, imediato, margem]);

  // Depois que a fonte entra, é preciso pedir o load: o navegador não
  // reavalia <source> inserido depois da montagem por conta própria.
  useEffect(() => {
    if (ativo && ref.current) ref.current.load();
  }, [ativo]);

  // ── Primeiro quadro ──
  // `loadeddata` é o evento certo (readyState 2 = já existe quadro na tela),
  // mas os outros três entram como rede de segurança: em navegador que
  // engula um deles, o vídeo ainda assim aparece.
  useEffect(() => {
    if (!revelarComPrimeiroQuadro || temQuadro) return;
    const el = ref.current;
    if (!el) return;

    // Só revela com quadro de verdade: readyState 2 (HAVE_CURRENT_DATA) é
    // o piso. Sem essa checagem, um evento disparado em falso — o `load()`
    // de uma troca de fonte chega a emitir `timeupdate` — deixaria o vídeo
    // opaco antes de existir imagem, que é justamente o quadro preto.
    const revelar = () => {
      if (!el.readyState || el.readyState < 2) return;
      setTemQuadro(true);
    };
    if (el.readyState >= 2) {
      setTemQuadro(true);
      return;
    }

    const eventos = ["loadeddata", "canplay", "playing", "timeupdate"] as const;
    eventos.forEach((e) => el.addEventListener(e, revelar));
    return () => eventos.forEach((e) => el.removeEventListener(e, revelar));
  }, [revelarComPrimeiroQuadro, temQuadro, ativo]);

  const posterAtual = !liberado && posterInativo ? posterInativo : poster;

  return (
    <video
      ref={ref}
      poster={posterAtual}
      className={className}
      style={
        revelarComPrimeiroQuadro
          ? { ...style, opacity: temQuadro ? 1 : 0, transition: "opacity 350ms ease-out" }
          : style
      }
      // No Hero o vídeo é o próximo passo depois da imagem: pedir `auto`
      // adianta o buffer inteiro e faz o loop virar sem engasgo.
      preload={ativo && imediato ? "auto" : "none"}
      {...props}
    >
      {ativo && <source src={src} type="video/mp4" />}
      {children}
    </video>
  );
}
