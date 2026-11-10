"use client";

import React, { useEffect, useRef, useState } from "react";
import LazyVideo from "@/components/ui/LazyVideo";
import type { Locale } from "@/lib/constants";

/**
 * Vídeo das vans com botão de som.
 *
 * O vídeo nasce mudo (é o que permite o autoplay em Chrome, Edge e Safari) e
 * em loop. O som só liga por ação do visitante: um toque/clique no botão do
 * canto inferior direito. Ligar ou desligar só mexe em `muted` — o vídeo não
 * reinicia, não abre player nem tela cheia.
 *
 * Se o navegador tiver barrado o autoplay (ex.: iPhone em modo Pouca Energia),
 * o mesmo toque que liga o som também dá o play — o vídeo continua de onde
 * está, sem voltar ao início.
 *
 * Os rótulos ficam aqui, e não no dicionário de textos, porque não aparecem na
 * tela: servem só ao leitor de tela (aria-label) e à dica do mouse (title).
 */
const ROTULOS: Record<Locale, { ligar: string; desligar: string }> = {
  pt: { ligar: "Ativar som do vídeo", desligar: "Desativar som do vídeo" },
  en: { ligar: "Turn video sound on", desligar: "Turn video sound off" },
  es: { ligar: "Activar sonido del video", desligar: "Desactivar sonido del video" },
};

export default function VideoComSom({
  locale = "pt",
  children,
  ...props
}: React.ComponentProps<typeof LazyVideo> & { locale?: Locale }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [mudo, setMudo] = useState(true);

  const video = () => wrapper.current?.querySelector("video") ?? null;

  // Mantém o ícone fiel ao estado real do vídeo, venha a mudança de onde vier.
  useEffect(() => {
    const el = video();
    if (!el) return;
    const sync = () => setMudo(el.muted);
    el.addEventListener("volumechange", sync);
    return () => el.removeEventListener("volumechange", sync);
  }, []);

  const alternar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const el = video();
    if (!el) return;
    el.muted = !el.muted;
    if (!el.muted && el.volume === 0) el.volume = 1;
    if (el.paused) el.play().catch(() => {});
    setMudo(el.muted);
  };

  const r = ROTULOS[locale] ?? ROTULOS.pt;

  return (
    <div ref={wrapper} className="absolute inset-0">
      <LazyVideo {...props}>{children}</LazyVideo>
      <button
        type="button"
        onClick={alternar}
        aria-label={mudo ? r.ligar : r.desligar}
        aria-pressed={!mudo}
        title={mudo ? r.ligar : r.desligar}
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 w-11 h-11 rounded-full bg-black/45 text-white backdrop-blur-sm ring-1 ring-white/25 flex items-center justify-center transition-colors hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {mudo ? (
          // Alto-falante desligado
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <line x1="22" y1="9" x2="16" y2="15" />
            <line x1="16" y1="9" x2="22" y2="15" />
          </svg>
        ) : (
          // Alto-falante ligado
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>
    </div>
  );
}
