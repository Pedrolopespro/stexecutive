"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "Van Executiva",     href: "/aluguel-de-van-brasilia" },
  { label: "Sedan/SUV Executivo",     href: "/transporte-executivo-brasilia" },
  { label: "Transfer Aeroporto", href: "/transfer-aeroporto-brasilia" },
  { label: "Van para Eventos",  href: "/van-para-eventos-brasilia" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Lock body scroll when open
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
          "fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm",
          "bg-surface-white shadow-premium overflow-y-auto",
          "transition-transform duration-[var(--motion-slow)] ease-[var(--ease-premium)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex flex-col min-h-full pt-20 px-6 pb-8">

          {/* Nav links */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {

                // Item "Serviços" com sub-links expansíveis
                if (link.label === "Serviços") {
                  return (
                    <li key={link.href}>
                      {/* Trigger */}
                      <button
                        onClick={() => setServicesExpanded(!servicesExpanded)}
                        className={[
                          "w-full flex items-center justify-between px-4 py-3 rounded-xl",
                          "text-base font-medium text-navy-950",
                          "transition-colors duration-[var(--motion-fast)]",
                          servicesExpanded ? "bg-gray-100" : "hover:bg-gray-100",
                        ].join(" ")}
                      >
                        <span>Serviços</span>
                        <svg
                          className={`w-4 h-4 text-gray-400 transition-transform duration-150 ${servicesExpanded ? "rotate-180" : ""}`}
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

                      {/* Sub-links */}
                      <div
                        className={[
                          "overflow-hidden transition-all duration-200",
                          servicesExpanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
                        ].join(" ")}
                      >
                        <ul className="flex flex-col gap-0.5 pl-4 pt-1 pb-2">
                          {SERVICE_LINKS.map((s) => (
                            <li key={s.href}>
                              <a
                                href={s.href}
                                onClick={onClose}
                                className={[
                                  "flex items-center gap-2 px-4 py-2.5 rounded-xl",
                                  "text-sm font-medium text-gray-700",
                                  "transition-colors duration-[var(--motion-fast)]",
                                  "hover:bg-gray-100 hover:text-navy-950",
                                ].join(" ")}
                              >
                                <span className="w-1 h-1 rounded-full bg-gold-400 shrink-0" />
                                {s.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                // Links normais
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className={[
                        "block px-4 py-3 rounded-xl",
                        "text-base font-medium text-navy-950",
                        "transition-colors duration-[var(--motion-fast)]",
                        "hover:bg-gray-100 active:bg-gray-200",
                      ].join(" ")}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Idioma */}
          <div className="mt-6 pb-5 border-b border-gray-100">
          </div>

          {/* CTA */}
          <div className="pt-5">
            <Button
              variant="whatsapp"
              size="lg"
              href={WHATSAPP_URL}
              showWhatsAppIcon
              fullWidth
            >
              Solicitar orçamento no WhatsApp
            </Button>
            <p className="text-xs text-gray-400 text-center mt-3">
              Atendimento rápido para empresas, eventos e grupos.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
