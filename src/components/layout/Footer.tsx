import React from "react";
import Link from "next/link";
import { AtSign, MapPin, Phone, MessageCircle } from "lucide-react";
import { SERVICE_PAGES, GUIA_BRASILIA_PATH, WHATSAPP_URL } from "@/lib/constants";

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
                { label: "Minivan Executiva", href: SERVICE_PAGES.minivan },
                { label: "Micro-ônibus Executivo", href: SERVICE_PAGES.microOnibus },
                { label: "Ônibus Executivo", href: SERVICE_PAGES.onibus },
                { label: "Carros Blindados", href: SERVICE_PAGES.blindados },
                { label: "City Tour Brasília", href: SERVICE_PAGES.cityTour },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-surface-white transition-colors duration-[var(--motion-fast)]"
                  >
                    {item.label}
                  </Link>
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
                { label: "Guia Brasília", href: GUIA_BRASILIA_PATH },
              ].map((item) =>
                // Hash (âncora) e /guia-brasilia/ (servido dinamicamente por
                // painel PHP/banco de dados) usam <a> normal de propósito,
                // forçando navegação real em vez do client-side do Next.js.
                item.href.startsWith("#") || item.href.startsWith("/guia-brasilia") ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 hover:text-surface-white transition-colors duration-[var(--motion-fast)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-surface-white transition-colors duration-[var(--motion-fast)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
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
              <li className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
                <a
                  href="https://instagram.com/stexecutive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-surface-white transition-colors"
                >
                  @stexecutive
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/content/selo-cadastur.png"
              alt="Selo Cadastur — Cadastro nº 13.718.289/0001-20, Ministério do Turismo"
              className="h-14 w-auto rounded-md shrink-0"
              loading="lazy"
              width={101}
              height={140}
            />
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} ST Executive. Todos os direitos
              reservados.
            </p>
          </div>
          <p className="text-xs text-white/40">
            Mais de 15 anos de transporte executivo em Brasília.
          </p>
        </div>
      </div>
    </footer>
  );
}
