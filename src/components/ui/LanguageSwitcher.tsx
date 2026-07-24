"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { LOCALES, localePrefix, type Locale } from "@/lib/constants";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

// Segmento inicial de cada rota já traduzida para EN/ES. Atualizar conforme
// novas páginas forem traduzidas — o que não estiver aqui cai na home do
// idioma alvo em vez de gerar um link para uma página ainda inexistente.
// Guia Brasília é servido pelo PHP (adm/guia-brasilia/index.php e
// artigo.php), que já trata ?lang=en|es — um artigo sem tradução ainda
// cai num 404 normal do PHP, não num link quebrado do switcher.
const KNOWN_SEGMENTS = new Set([
  "",
  "aluguel-de-van-brasilia",
  "transporte-executivo-brasilia",
  "transfer-aeroporto-brasilia",
  "van-para-eventos-brasilia",
  "minivan-executiva-brasilia",
  "micro-onibus-executivo-brasilia",
  "onibus-executivo-brasilia",
  "carros-blindados-brasilia",
  "city-tour-brasilia",
  "contato",
  "guia-brasilia",
]);

function mapPathToLocale(currentPath: string, targetLocale: Locale): string {
  let rest = currentPath || "/";
  for (const l of LOCALES) {
    const p = localePrefix(l);
    if (p && (rest === p || rest.startsWith(`${p}/`))) {
      rest = rest.slice(p.length) || "/";
      break;
    }
  }
  const segment = rest.split("/").filter(Boolean)[0] ?? "";
  const targetPrefix = localePrefix(targetLocale);

  if (!KNOWN_SEGMENTS.has(segment)) {
    return `${targetPrefix}/`;
  }
  return rest === "/" ? `${targetPrefix}/` : `${targetPrefix}${rest}`;
}

interface LanguageSwitcherProps {
  dark?: boolean;
  inline?: boolean;
  currentLocale?: Locale;
}

export default function LanguageSwitcher({ dark = false, inline = false, currentLocale = "pt" }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === currentLocale) ?? LANGUAGES[0];

  useEffect(() => {
    if (inline) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [inline]);

  /* ── Inline (mobile menu) ─────────────────────────── */
  if (inline) {
    return (
      <div className="w-full">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 px-1">
          Idioma / Language
        </p>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((lang) => (
            <a
              key={lang.code}
              href={mapPathToLocale(pathname, lang.code)}
              className={[
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150",
                current.code === lang.code
                  ? "bg-navy-950 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200",
              ].join(" ")}
            >
              <span>{lang.flag}</span>
              <span>{lang.code.toUpperCase()}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  /* ── Dropdown (desktop header) ────────────────────── */
  const buttonBase = [
    "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium",
    "transition-colors duration-[var(--motion-fast)] select-none",
    dark
      ? "text-white/80 hover:text-white hover:bg-white/10"
      : "text-gray-600 hover:text-navy-950 hover:bg-gray-100",
  ].join(" ");

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={buttonBase}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="w-4 h-4 shrink-0" />
        <span>{current.flag}</span>
        <span>{current.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      <div
        className={[
          "absolute right-0 top-full mt-2 w-44 z-50",
          "bg-surface-white rounded-xl shadow-premium border border-gray-100",
          "overflow-hidden origin-top-right",
          "transition-all duration-150",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none",
        ].join(" ")}
        role="listbox"
      >
        {LANGUAGES.map((lang) => (
          <a
            key={lang.code}
            role="option"
            aria-selected={current.code === lang.code}
            href={mapPathToLocale(pathname, lang.code)}
            onClick={() => setOpen(false)}
            className={[
              "w-full flex items-center gap-3 px-4 py-2.5 text-sm",
              "transition-colors duration-100",
              current.code === lang.code
                ? "bg-navy-950 text-white font-medium"
                : "text-gray-700 hover:bg-gray-50",
            ].join(" ")}
          >
            <span className="text-base leading-none">{lang.flag}</span>
            <span className="flex-1 text-left">{lang.label}</span>
            <span className="text-xs opacity-50">{lang.code.toUpperCase()}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
