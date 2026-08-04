"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster: string;
  type?: string;
  className?: string;
  controls?: boolean;
  children?: React.ReactNode;
  /**
   * "idle"    — só baixa depois que a página terminou de carregar. Use em
   *             vídeo acima da dobra: o poster vira o LCP e o vídeo deixa de
   *             disputar banda com ele.
   * "visible" — só baixa quando chega perto da viewport. Use em vídeo no meio
   *             da página, que a maioria das visitas nem chega a ver.
   */
  strategy?: "idle" | "visible";
}

/**
 * <video> que só busca o arquivo quando vale a pena.
 *
 * O atributo preload="none" sozinho não resolve: o navegador o ignora quando
 * há autoplay, e baixa o vídeo inteiro no carregamento. Aqui o <source> só é
 * inserido no DOM no momento certo — antes disso não existe nada para baixar.
 */
export default function LazyVideo({
  src,
  poster,
  type = "video/mp4",
  className,
  controls,
  children,
  strategy = "visible",
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    if (strategy === "idle") {
      let idleId: number | undefined;
      let timeoutId: number | undefined;

      const schedule = () => {
        const ric = (window as unknown as {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        }).requestIdleCallback;

        if (ric) idleId = ric(() => setShouldLoad(true), { timeout: 3000 });
        else timeoutId = window.setTimeout(() => setShouldLoad(true), 1500);
      };

      if (document.readyState === "complete") {
        schedule();
      } else {
        window.addEventListener("load", schedule, { once: true });
      }

      return () => {
        window.removeEventListener("load", schedule);
        const cic = (window as unknown as {
          cancelIdleCallback?: (id: number) => void;
        }).cancelIdleCallback;
        if (idleId !== undefined && cic) cic(idleId);
        if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      };
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad, strategy]);

  // Depois que o <source> entra no DOM é preciso pedir o load() explicitamente:
  // o elemento já foi montado sem fonte nenhuma.
  useEffect(() => {
    if (shouldLoad && ref.current) ref.current.load();
  }, [shouldLoad]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      controls={controls}
      preload="none"
      // Rede de segurança: se por algum motivo o observador não disparar,
      // qualquer interação com o player já busca o arquivo. Sem isso, apertar
      // play num <video> ainda sem <source> não faria nada.
      onPointerEnter={() => setShouldLoad(true)}
      onClick={() => setShouldLoad(true)}
    >
      {shouldLoad && <source src={src} type={type} />}
      {children}
    </video>
  );
}
