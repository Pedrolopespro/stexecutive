"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

const LANGUAGES = [
  { code: "PT", label: "Português", flag: "🇧🇷" },
  { code: "EN", label: "English",   flag: "🇺🇸" },
  { code: "ES", label: "Español",   flag: "🇪🇸" },
  { code: "FR", label: "Français",  flag: "🇫🇷" },
  { code: "DE", label: "Deutsch",   flag: "🇩🇪" },
  { code: "JA", label: "日本語",    flag: "🇯🇵" },
  { code: "ZH", label: "中文",      flag: "🇨🇳" },
];

interface LanguageSwitcherProps {
  /** Quando true, adapta cores para fundo escuro (header transparente) */
  dark?: boolean;
  /** Quando true, exibe lista vertical em vez de dropdown (mobile menu) */
  inline?: boolean;
}

export default function LanguageSwitcher({ dark = false, inline = false }: LanguageSwitcherProps) {
  const [current, setCurrent] = useState(LANGUAGES[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
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

  const select = (lang: typeof LANGUAGES[0]) => {
    setCurrent(lang);
    setOpen(false);
  };

  /* ── Inline (mobile menu) ─────────────────────────── */
  if (inline) {
    return (
      <div className="w-full">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 px-1">
          Idioma
        </p>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setCurrent(lang)}
              className={[
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150",
                current.code === lang.code
                  ? "bg-navy-950 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200",
              ].join(" ")}
            >
              <span>{lang.flag}</span>
              <span>{lang.code}</span>
            </button>
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
        <span>{current.code}</span>
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

      {/* Dropdown panel */}
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
          <button
            key={lang.code}
            role="option"
            aria-selected={current.code === lang.code}
            onClick={() => select(lang)}
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
            <span className="text-xs opacity-50">{lang.code}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
