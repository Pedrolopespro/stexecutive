import React from "react";
import { AtSign, MapPin, Phone, MessageCircle } from "lucide-react";
import { SERVICE_PAGES, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-st section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-lg font-bold text-surface-white tracking-tight">
              ST Executive
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xs">
              Transporte executivo em Brasília para empresas, eventos, grupos e
              transfer aeroporto.
            </p>
            <div className="gold-line mt-4" />
          </div>

          {/* Col 2 — Serviços */}
          <div>
            <h3 className="text-sm font-semibold text-surface-white uppercase tracking-wider mb-4">
              Serviços
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Aluguel de Van em Brasília", href: SERVICE_PAGES.vans },
                { label: "Transporte Executivo", href: SERVICE_PAGES.executivo },
                { label: "Transfer Aeroporto", href: SERVICE_PAGES.transfer },
                { label: "Van para Eventos", href: SERVICE_PAGES.eventos },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-surface-white transition-colors duration-[var(--motion-fast)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-surface-white uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Frota", href: "#frota" },
                { label: "Como funciona", href: "#como-funciona" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-surface-white transition-colors duration-[var(--motion-fast)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-sm font-semibold text-surface-white uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MessageCircle className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  className="hover:text-surface-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>(61) 9 8409-7971</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <AtSign className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href="mailto:stexecutivebsb@hotmail.com"
                  className="hover:text-surface-white transition-colors"
                >
                  stexecutivebsb@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>Brasília — DF</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} ST Executive. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-white/40">
            Transporte executivo em Brasília desde 2011.
          </p>
        </div>
      </div>
    </footer>
  );
}
