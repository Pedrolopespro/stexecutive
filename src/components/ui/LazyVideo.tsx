"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Vídeo que só baixa quando chega perto da tela.
 *
 * Por que isto existe: `preload="none"` NÃO segura um vídeo com `autoPlay`.
 * O navegador entende que precisa tocar assim que puder e baixa o arquivo de
 * qualquer jeito. Na home isso custava 5,25 MB por visita — 4,37 MB só do
 * vídeo das vans, que fica muito abaixo da dobra e roda inclusive no celular.
 *
 * A solução é não colocar o <source> no HTML. Sem fonte, não há o que baixar.
 * Um IntersectionObserver injeta a fonte quando o vídeo se aproxima da janela,
 * e só então o autoplay acontece — exatamente como antes, mas para quem
 * realmente chegou até ali.
 *
 * Enquanto isso o `poster` aparece normalmente, então não existe buraco visual.
 */
export default function LazyVideo({
  src,
  poster,
  className,
  margem = "300px",
  children,
  ...props
}: {
  src: string;
  poster: string;
  className?: string;
  /** Distância antes da tela em que o download começa. */
  margem?: string;
  children?: React.ReactNode;
} & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || ativo) return;

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
  }, [ativo, margem]);

  // Depois que a fonte entra, é preciso pedir o load: o navegador não
  // reavalia <source> inserido depois da montagem por conta própria.
  useEffect(() => {
    if (ativo && ref.current) ref.current.load();
  }, [ativo]);

  return (
    <video ref={ref} poster={poster} className={className} preload="none" {...props}>
      {ativo && <source src={src} type="video/mp4" />}
      {children}
    </video>
  );
}
