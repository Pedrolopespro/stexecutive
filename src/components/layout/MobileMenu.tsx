"use client";

import React, { useState, useEffect } from "react";
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
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

// ─── Ícones por link ───────────────────────────────────────────────────────
const NAV_ICONS: Record<string, React.ReactNode> = {
  "Início":        <Home        className="w-5 h-5" />,
  "Serviços":      <Briefcase   className="w-5 h-5" />,
  "Frota":         <Car         className="w-5 h-5" />,
  "Como funciona": <CircleCheck className="w-5 h-5" />,
  "Sobre":         <User        className="w-5 h-5" />,
  "Contato":       <Phone       className="w-5 h-5" />,
  "Guia Brasília": <BookOpen    className="w-5 h-5" />,
};

// ─── Sub-serviços ──────────────────────────────────────────────────────────
const SERVICE_LINKS = [
  { label: "Van Executiva",          href: "/aluguel-de-van-brasilia" },
  { label: "Minivan Executiva",      href: "/minivan-executiva-brasilia" },
  { label: "Sedan/SUV Executivo",    href: "/transporte-executivo-brasilia" },
  { label: "Carros Blindados",       href: "/carros-blindados-brasilia" },
  { label: "Transfer Aeroporto",     href: "/transfer-aeroporto-brasilia" },
  { label: "Van para Eventos",       href: "/van-para-eventos-brasilia" },
  { label: "Micro-ônibus Executivo", href: "/micro-onibus-executivo-brasilia" },
  { label: "Ônibus Executivo",       href: "/onibus-executivo-brasilia" },
  { label: "City Tour Brasília",     href: "/city-tour-brasilia" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

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
          <a href="/" onClick={onClose}>
            <img
              src="/images/logo/SVG/logo black.svg"
              alt="ST Executive"
              className="h-8 w-auto"
            />
          </a>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Nav links ── */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-gray-100">
            {NAV_LINKS.map((link) => {

              /* ── Serviços (expansível) ── */
              if (link.label === "Serviços") {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className={[
                        "w-full flex items-center gap-3 px-5 py-4",
                        "text-left transition-colors duration-[var(--motion-fast)]",
                        servicesExpanded ? "bg-blue-50 text-blue-700" : "text-gray-800 hover:bg-gray-50",
                      ].join(" ")}
                    >
                      <span className={servicesExpanded ? "text-blue-600" : "text-gray-400"}>
                        {NAV_ICONS["Serviços"]}
                      </span>
                      <span className="flex-1 text-base font-semibold">Serviços</span>
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
                        {SERVICE_LINKS.map((s) => (
                          <li key={s.href}>
                            <a
                              href={s.href}
                              onClick={onClose}
                              className="flex items-center gap-2.5 py-2.5 text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                              {s.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              /* ── Guia Brasília (destaque) ── */
              if (link.label === "Guia Brasília") {
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-5 py-4 bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <span className="text-blue-600">{NAV_ICONS["Guia Brasília"]}</span>
                      <span className="flex-1 text-base font-semibold text-blue-700">
                        Guia Brasília
                      </span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white tracking-wide"
                      >
                        NOVO
                      </span>
                    </a>
                  </li>
                );
              }

              /* ── Links normais ── */
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-5 py-4 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-400">{NAV_ICONS[link.label]}</span>
                    <span className="text-base font-medium">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Rodapé com CTA ── */}
        <div className="px-5 py-6 border-t border-gray-100 bg-white">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-base shadow-md active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            Falar no WhatsApp
          </a>
          <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-3">
            <Shield className="w-3.5 h-3.5" />
            Transporte executivo em Brasília
          </p>
        </div>
      </div>
    </>
  );
}
