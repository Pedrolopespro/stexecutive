"use client";

import React, { useEffect, useRef, useState } from "react";
import LazyVideo from "@/components/ui/LazyVideo";
import type { Locale } from "@/lib/constants";

/**
 * Vídeo das vans com botão de som e botão de compartilhar.
 *
 * SOM — o vídeo nasce mudo (é o que permite o autoplay em Chrome, Edge e
 * Safari) e em loop. O som só liga por ação do visitante. Ligar/desligar só
 * mexe em `muted`: o vídeo não reinicia, não abre player nem tela cheia. Se o
 * navegador barrou o autoplay (iPhone em Pouca Energia), o mesmo toque dá o
 * play, continuando de onde está.
 *
 * COMPARTILHAR — o link compartilhado é /video/ (ver src/app/video/page.tsx):
 * uma página leve com capa, título e descrição próprios para a prévia do
 * WhatsApp, que leva direto à posição do vídeo na Home.
 *   - celular/tablet com folha nativa (iPhone, Android): `navigator.share`,
 *     que já lista o WhatsApp, Instagram, Mensagens etc.;
 *   - computador: um menu com "WhatsApp" e "Copiar link".
 *
 * Por que o WhatsApp do menu é um <button> com window.open, e não um <a>
 * para wa.me: o GTM conta como conversão (click_whatsapp → Google Ads/GA4)
 * todo clique em LINK cujo endereço contém "wa.me". Compartilhar o vídeo não
 * é um lead — se fosse link, inflaria as conversões e confundiria o lance das
 * campanhas. Por isso: botão (o GTM só escuta links) + api.whatsapp.com.
 * O compartilhamento é registrado à parte, como "compartilhar_video".
 */
const ROTULOS: Record<
  Locale,
  {
    ligar: string;
    desligar: string;
    compartilhar: string;
    whatsapp: string;
    copiar: string;
    copiado: string;
    mais: string;
    titulo: string;
    texto: string;
  }
> = {
  pt: {
    ligar: "Ativar som do vídeo",
    desligar: "Desativar som do vídeo",
    compartilhar: "Compartilhar vídeo",
    whatsapp: "WhatsApp",
    copiar: "Copiar link",
    copiado: "Link copiado!",
    mais: "Mais opções",
    titulo: "ST Executive — Transporte Executivo em Brasília",
    texto: "Conheça a ST Executive — transporte executivo em Brasília. Assista ao vídeo:",
  },
  en: {
    ligar: "Turn video sound on",
    desligar: "Turn video sound off",
    compartilhar: "Share video",
    whatsapp: "WhatsApp",
    copiar: "Copy link",
    copiado: "Link copied!",
    mais: "More options",
    titulo: "ST Executive — Executive Transportation in Brasília",
    texto: "Meet ST Executive — executive transportation in Brasília. Watch the video:",
  },
  es: {
    ligar: "Activar sonido del video",
    desligar: "Desactivar sonido del video",
    compartilhar: "Compartir video",
    whatsapp: "WhatsApp",
    copiar: "Copiar enlace",
    copiado: "¡Enlace copiado!",
    mais: "Más opciones",
    titulo: "ST Executive — Transporte Ejecutivo en Brasília",
    texto: "Conozca ST Executive — transporte ejecutivo en Brasília. Mire el video:",
  },
};

/** Endereço compartilhado. Fixo no domínio oficial, para o link funcionar
 *  igual venha de onde vier (inclusive de uma prévia). */
const linkDoVideo = (locale: Locale) =>
  locale === "pt"
    ? "https://stexecutive.com.br/video/"
    : `https://stexecutive.com.br/video/?l=${locale}`;

function registrar(metodo: string) {
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "compartilhar_video", metodo });
  } catch {
    /* sem analytics, sem problema */
  }
}

const btnRedondo =
  "w-11 h-11 rounded-full bg-black/45 text-white backdrop-blur-sm ring-1 ring-white/25 flex items-center justify-center transition-colors hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

export default function VideoComSom({
  locale = "pt",
  children,
  ...props
}: React.ComponentProps<typeof LazyVideo> & { locale?: Locale }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [mudo, setMudo] = useState(true);
  const [menu, setMenu] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);

  const video = () => wrapper.current?.querySelector("video") ?? null;
  const r = ROTULOS[locale] ?? ROTULOS.pt;
  const url = linkDoVideo(locale);

  // Mantém o ícone fiel ao estado real do vídeo, venha a mudança de onde vier.
  useEffect(() => {
    const el = video();
    if (!el) return;
    const sync = () => setMudo(el.muted);
    el.addEventListener("volumechange", sync);
    return () => el.removeEventListener("volumechange", sync);
  }, []);

  // Chegada pelo link compartilhado (#video-institucional): o navegador já
  // rola até o vídeo sozinho, mas em algumas larguras (tablet) o conteúdo
  // acima ainda se acomoda depois disso e o vídeo para ~50px sob o cabeçalho.
  // Então realinha no `load` e mais uma vez logo depois — e para de mexer na
  // hora em que o visitante tocar ou rolar a tela por conta própria.
  useEffect(() => {
    const alvo = wrapper.current?.parentElement;
    if (!alvo?.id || window.location.hash !== `#${alvo.id}`) return;
    let mexeu = false;
    const marcar = () => (mexeu = true);
    const alinhar = () => {
      if (!mexeu) alvo.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior });
    };
    const opts = { passive: true, once: true } as const;
    window.addEventListener("wheel", marcar, opts);
    window.addEventListener("touchstart", marcar, opts);
    window.addEventListener("keydown", marcar, { once: true });
    if (document.readyState === "complete") alinhar();
    else window.addEventListener("load", alinhar, { once: true });
    const t1 = setTimeout(alinhar, 400);
    const t2 = setTimeout(alinhar, 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", alinhar);
      window.removeEventListener("wheel", marcar);
      window.removeEventListener("touchstart", marcar);
      window.removeEventListener("keydown", marcar);
    };
  }, []);

  // Menu do computador fecha com clique fora ou Esc.
  useEffect(() => {
    if (!menu) return;
    const fora = (e: PointerEvent) => {
      if (!wrapper.current?.querySelector("[data-compartilhar]")?.contains(e.target as Node)) setMenu(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    document.addEventListener("pointerdown", fora);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", fora);
      document.removeEventListener("keydown", esc);
    };
  }, [menu]);

  const alternarSom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const el = video();
    if (!el) return;
    el.muted = !el.muted;
    if (!el.muted && el.volume === 0) el.volume = 1;
    if (el.paused) el.play().catch(() => {});
    setMudo(el.muted);
  };

  const temFolhaNativa = () =>
    typeof navigator !== "undefined" &&
    typeof navigator.share === "function" &&
    typeof window !== "undefined" &&
    !!window.matchMedia &&
    window.matchMedia("(pointer: coarse)").matches;

  const nativo = async () => {
    try {
      await navigator.share({ title: r.titulo, text: r.texto, url });
      registrar("nativo");
    } catch {
      /* visitante fechou a folha — nada a fazer */
    }
  };

  const compartilhar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (temFolhaNativa()) {
      void nativo();
      return;
    }
    setMenu((m) => !m);
  };

  const whatsapp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${r.texto} ${url}`)}`,
      "_blank",
      "noopener,noreferrer"
    );
    registrar("whatsapp");
    setMenu(false);
  };

  const copiar = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(url);
      ok = true;
    } catch {
      // Navegador sem clipboard API: cópia à moda antiga.
      const t = document.createElement("textarea");
      t.value = url;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      t.remove();
    }
    if (ok) {
      registrar("copiar");
      setAviso(r.copiado);
      setTimeout(() => setAviso(null), 2200);
    } else {
      setAviso(url);
      setTimeout(() => setAviso(null), 5000);
    }
    setMenu(false);
  };

  const itemMenu =
    "w-full flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] font-medium text-navy-950 hover:bg-gray-100 text-left";

  return (
    <div ref={wrapper} className="absolute inset-0">
      <LazyVideo {...props}>{children}</LazyVideo>

      {aviso && (
        <div
          role="status"
          className="absolute bottom-[4.25rem] right-3 sm:right-4 z-10 max-w-[85%] break-all rounded-lg bg-black/75 px-3 py-1.5 text-xs font-medium text-white"
        >
          {aviso}
        </div>
      )}

      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-2">
        {/* Compartilhar */}
        <div className="relative" data-compartilhar>
          <button
            type="button"
            onClick={compartilhar}
            aria-label={r.compartilhar}
            aria-haspopup="menu"
            aria-expanded={menu}
            title={r.compartilhar}
            className={btnRedondo}
          >
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>

          {menu && (
            <div
              role="menu"
              className="absolute bottom-full right-0 mb-2 w-48 overflow-hidden rounded-xl bg-white shadow-premium ring-1 ring-black/5"
            >
              <button type="button" role="menuitem" onClick={whatsapp} className={itemMenu}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="#25D366">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91A9.88 9.88 0 0 0 12.04 2zm5.8 14.13c-.25.69-1.44 1.32-1.98 1.37-.51.05-1.01.24-3.4-.71-2.87-1.13-4.7-4.07-4.84-4.26-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.37c.26-.28.56-.35.75-.35h.54c.17 0 .41-.06.64.49.25.59.83 2.04.9 2.19.08.14.12.31.03.5-.1.19-.14.31-.28.48l-.42.49c-.14.14-.29.3-.12.58.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.29 1.42.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.64-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.11.07.66-.18 1.35z" />
                </svg>
                {r.whatsapp}
              </button>
              <button type="button" role="menuitem" onClick={copiar} className={itemMenu}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                {r.copiar}
              </button>
              {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setMenu(false);
                    void nativo();
                  }}
                  className={itemMenu}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="5" cy="12" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="19" cy="12" r="1.5" />
                  </svg>
                  {r.mais}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Som */}
        <button
          type="button"
          onClick={alternarSom}
          aria-label={mudo ? r.ligar : r.desligar}
          aria-pressed={!mudo}
          title={mudo ? r.ligar : r.desligar}
          className={btnRedondo}
        >
          {mudo ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5 6 9H2v6h4l5 4V5z" />
              <line x1="22" y1="9" x2="16" y2="15" />
              <line x1="16" y1="9" x2="22" y2="15" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5 6 9H2v6h4l5 4V5z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
