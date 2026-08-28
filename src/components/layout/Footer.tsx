import React from "react";
import Link from "next/link";
import { AtSign, MapPin, Phone, MessageCircle } from "lucide-react";
import { buildServicePages, guiaBrasiliaPath, buildWhatsAppUrl, type Locale, CONTACT_PHONE_TEL } from "@/lib/constants";
import { footerPt, commonPt, type FooterDict, type CommonDict } from "@/lib/i18n";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/constants";

interface FooterProps {
  locale?: Locale;
  dict?: FooterDict;
  commonDict?: CommonDict;
}

export default function Footer({ locale = "pt", dict = footerPt, commonDict = commonPt }: FooterProps) {
  const servicePages = buildServicePages(locale);
  const guiaPath = guiaBrasiliaPath(locale);
  const whatsappUrl = buildWhatsAppUrl(commonDict.whatsappMessage);

  return (
    // pb da safe area: no iPhone o rodapé não fica atrás da barra do Safari
    <footer className="bg-navy-950 text-white/80 pb-[env(safe-area-inset-bottom)]">
      <div className="container-st section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-lg font-bold text-surface-white tracking-tight">
              ST Executive
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xs">
              {dict.brandDescription}
            </p>
            <div className="gold-line mt-4" />
          </div>

          {/* Col 2 — Serviços */}
          <div>
            <h3 className="text-sm font-semibold text-surface-white uppercase tracking-wider mb-4">
              {dict.sectionHeaders.services}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {dict.serviceLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={servicePages[item.key]}
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
              {dict.sectionHeaders.company}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {dict.companyLinks.map((item) => {
                const href = item.key === "guia_brasilia" ? guiaPath : item.href;
                // Hash (âncora) e guia-brasilia (servido dinamicamente por
                // painel PHP/banco de dados) usam <a> normal de propósito,
                // forçando navegação real em vez do client-side do Next.js.
                return href.startsWith("#") || item.key === "guia_brasilia" ? (
                  <li key={item.key}>
                    <a
                      href={href}
                      className="text-sm text-white/60 hover:text-surface-white transition-colors duration-[var(--motion-fast)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.key}>
                    <Link
                      href={href}
                      className="text-sm text-white/60 hover:text-surface-white transition-colors duration-[var(--motion-fast)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-sm font-semibold text-surface-white uppercase tracking-wider mb-4">
              {dict.sectionHeaders.contact}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MessageCircle className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={whatsappUrl}
                  className="hover:text-surface-white transition-colors"
                >
                  {dict.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/75">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                {/* Era um <span> solto: no celular o numero nao discava. */}
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="hover:text-surface-white transition-colors"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <AtSign className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-surface-white transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>{dict.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
                <a
                  href="https://www.instagram.com/stexecutive"
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
              src="/images/content/selo-cadastur.webp"
              alt={dict.cadastur.imageAlt}
              className="h-20 w-auto rounded-md shrink-0"
              loading="lazy"
              width={101}
              height={140}
            />
            {/* O numero sai de dentro do alt e vira texto na tela. E o
                contraponto direto a secao de regularizacao do concorrente, e
                nao custa dado novo: ja estava publicado, so ilegivel. */}
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white/75 break-words">
                {dict.cadastur.label}
              </p>
              <p className="text-xs text-white/40 mt-1 break-words">
                &copy; {new Date().getFullYear()} {dict.copyright}
              </p>
            </div>
          </div>
          <p className="text-xs text-white/40">
            {dict.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
