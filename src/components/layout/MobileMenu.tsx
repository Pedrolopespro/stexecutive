"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Home,
  Briefcase,
  Car,
  CircleCheck,
  User,
  Phone,
  BookOpen,
  Shield,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { buildNavLinks, buildServicePages, buildWhatsAppUrl, type Locale, type NavKey } from "@/lib/constants";
import { navPt, commonPt, type NavDict, type CommonDict } from "@/lib/i18n";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

// ─── Ícones por chave de nav (independente de idioma) ─────────────────────
const NAV_ICONS: Record<NavKey, React.ReactNode> = {
  home: <Home className="w-5 h-5" />,
  services: <Briefcase className="w-5 h-5" />,
  fleet: <Car className="w-5 h-5" />,
  how_it_works: <CircleCheck className="w-5 h-5" />,
  about: <User className="w-5 h-5" />,
  contato: <Phone className="w-5 h-5" />,
  guia_brasilia: <BookOpen className="w-5 h-5" />,
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
  dict?: NavDict;
  commonDict?: CommonDict;
}

export default function MobileMenu({
  isOpen,
  onClose,
  locale = "pt",
  dict = navPt,
  commonDict = commonPt,
}: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const navLinks = buildNavLinks(locale);
  const servicePages = buildServicePages(locale);
  const whatsappUrl = buildWhatsAppUrl(commonDict.whatsappMessage);
  const homeHref = locale === "pt" ? "/" : `/${locale}/`;

  // Bloqueia scroll do body
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset ao fechar
  useEffect(() => {
    if (!isOpen) setServicesExpanded(false);
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
          "transition-opacity duration-[var(--motion-normal)]",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={[
          "fixed top-0 right-0 z-50 h-full w-[88%] max-w-sm",
          "bg-white shadow-2xl overflow-y-auto flex flex-col",
          "transition-transform duration-[var(--motion-slow)] ease-[var(--ease-premium)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* ── Cabeçalho do painel ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href={homeHref} onClick={onClose}>
            <img
              src="/images/logo/SVG/logo black.svg"
              alt="ST Executive"
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label={dict.closeMenuAriaLabel}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Nav links ── */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-gray-100">
            {navLinks.map((link) => {
              const label = dict.labels[link.key];

              /* ── Serviços (expansível) ── */
              if (link.key === "services") {
                return (
                  <li key={link.key}>
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className={[
                        "w-full flex items-center gap-3 px-5 py-4",
                        "text-left transition-colors duration-[var(--motion-fast)]",
                        servicesExpanded ? "bg-blue-50 text-blue-700" : "text-gray-800 hover:bg-gray-50",
                      ].join(" ")}
                    >
                      <span className={servicesExpanded ? "text-blue-600" : "text-gray-400"}>
                        {NAV_ICONS.services}
                      </span>
                      <span className="flex-1 text-base font-semibold">{label}</span>
                      <ChevronDown
                        className={[
                          "w-4 h-4 transition-transform duration-200",
                          servicesExpanded ? "rotate-180 text-blue-500" : "text-gray-400",
                        ].join(" ")}
                      />
                    </button>

                    {/* Sub-serviços */}
                    <div
                      className={[
                        "overflow-hidden transition-all duration-200 bg-blue-50/50",
                        servicesExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
                      ].join(" ")}
                    >
                      <ul className="py-2 pl-14 pr-5 flex flex-col gap-0">
                        {dict.serviceLinks.map((s) => (
                          <li key={s.key}>
                            <Link
                              href={servicePages[s.key]}
                              onClick={onClose}
                              className="flex items-center gap-2.5 py-2.5 text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              /* Guia Brasília (destaque) — <a> normal de propósito: a rota é
                 servida dinamicamente por um painel PHP/banco de dados no
                 servidor. Navegação client-side do Next.js mostraria a
                 versão estática antiga. */
              if (link.key === "guia_brasilia") {
                return (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-5 py-4 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <span className="text-blue-600">{NAV_ICONS.guia_brasilia}</span>
                      <span className="flex-1 text-base font-semibold text-blue-700">
                        {label}
                      </span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white tracking-wide"
                      >
                        {dict.newBadge}
                      </span>
                    </a>
                  </li>
                );
              }

              /* ── Links normais (hash = âncora na home, rota = navegação) ── */
              if (link.href.startsWith("#")) {
                return (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-5 py-4 text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-400">{NAV_ICONS[link.key]}</span>
                      <span className="text-base font-medium">{label}</span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-5 py-4 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-400">{NAV_ICONS[link.key]}</span>
                    <span className="text-base font-medium">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Rodapé com CTA ── */}
        <div className="px-5 py-6 border-t border-gray-100 bg-white">
          <div className="mb-4">
            <LanguageSwitcher inline currentLocale={locale} />
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-base shadow-md active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            {dict.whatsappButtonLabel}
          </a>
          <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-3">
            <Shield className="w-3.5 h-3.5" />
            {dict.whatsappSubtext}
          </p>
        </div>
      </div>
    </>
  );
}
