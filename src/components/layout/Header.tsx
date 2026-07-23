"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

// ─── Páginas de serviço ────────────────────────────────────────────────────
const SERVICE_LINKS = [
  {
    label: "Van Executiva",
    desc: "Grupos, equipes e transfer aeroporto.",
    href: "/aluguel-de-van-brasilia/",
  },
  {
    label: "Minivan Executiva",
    desc: "Pequenos grupos e deslocamentos VIP.",
    href: "/minivan-executiva-brasilia/",
  },
  {
    label: "Sedan/SUV Executivo",
    desc: "Executivos e convidados especiais.",
    href: "/transporte-executivo-brasilia/",
  },
  {
    label: "Carros Blindados",
    desc: "Segurança e discrição para autoridades.",
    href: "/carros-blindados-brasilia/",
  },
  {
    label: "Transfer Aeroporto",
    desc: "Embarques e desembarques pontuais.",
    href: "/transfer-aeroporto-brasilia/",
  },
  {
    label: "Van para Eventos",
    desc: "Casamentos, shows e eventos corporativos.",
    href: "/van-para-eventos-brasilia/",
  },
  {
    label: "Micro-ônibus Executivo",
    desc: "Grupos médios e excursões corporativas.",
    href: "/micro-onibus-executivo-brasilia/",
  },
  {
    label: "Ônibus Executivo",
    desc: "Grandes grupos e eventos de grande porte.",
    href: "/onibus-executivo-brasilia/",
  },
  {
    label: "City Tour Brasília",
    desc: "Passeio pelos monumentos da capital.",
    href: "/city-tour-brasilia/",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinkClass = [
    "px-3 py-2 rounded-lg text-sm font-medium",
    "transition-colors duration-[var(--motion-fast)]",
    isScrolled
      ? "text-gray-600 hover:text-navy-950 hover:bg-gray-100"
      : "text-white/80 hover:text-surface-white hover:bg-white/10",
  ].join(" ");

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
          isScrolled
            ? "bg-surface-white/95 backdrop-blur-md shadow-soft border-b border-gray-200/50"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="container-st">
          <nav className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src={isScrolled ? "/images/logo/SVG/logo black.svg" : "/images/logo/SVG/logo white.svg"}
                alt="ST Executive — Transporte Executivo em Brasília"
                width={130}
                height={36}
                className="h-8 lg:h-9 w-auto transition-all duration-[var(--motion-normal)]"
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                // Item "Serviços" vira dropdown
                if (link.label === "Serviços") {
                  return (
                    <li key={link.href} ref={servicesRef} className="relative">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        onMouseEnter={() => setServicesOpen(true)}
                        className={[
                          navLinkClass,
                          "flex items-center gap-1 cursor-pointer",
                        ].join(" ")}
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                      >
                        Serviços
                        <svg
                          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-150 ${servicesOpen ? "rotate-180" : ""}`}
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
                        onMouseLeave={() => setServicesOpen(false)}
                        className={[
                          "absolute left-0 top-full pt-2 w-[540px] z-50",
                          "transition-all duration-150 origin-top-left",
                          servicesOpen
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none",
                        ].join(" ")}
                      >
                        <div className="bg-surface-white rounded-2xl shadow-premium border border-gray-100 overflow-hidden p-2">
                          <div className="grid grid-cols-2 gap-0.5">
                            {SERVICE_LINKS.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                onClick={() => setServicesOpen(false)}
                                className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-100 group"
                              >
                                <span className="text-sm font-semibold text-navy-950 group-hover:text-gold-600 transition-colors">
                                  {s.label}
                                </span>
                                <span className="text-xs text-gray-500">{s.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                // "Guia Brasília" — destaque editorial
                if (link.label === "Guia Brasília") {
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={[
                          "px-3 py-2 rounded-lg text-sm font-semibold",
                          "transition-colors duration-[var(--motion-fast)]",
                          isScrolled
                            ? "text-gold-500 hover:text-navy-950 hover:bg-gray-100 border border-gold-500/30"
                            : "text-gold-300 hover:text-surface-white hover:bg-white/10 border border-gold-300/30",
                        ].join(" ")}
                      >
                        Guia Brasília
                      </Link>
                    </li>
                  );
                }

                // Links normais (hash = âncora na home, rota = navegação)
                if (link.href.startsWith("#")) {
                  return (
                    <li key={link.href}>
                      <a href={link.href} className={navLinkClass}>
                        {link.label}
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link href={link.href} className={navLinkClass}>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA + idioma */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="primary" size="sm" href={WHATSAPP_URL} showWhatsAppIcon>
                Solicitar orçamento
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={[
                "lg:hidden p-2 rounded-lg",
                "transition-colors duration-[var(--motion-fast)]",
                isScrolled
                  ? "text-navy-950 hover:bg-gray-100"
                  : "text-surface-white hover:bg-white/10",
              ].join(" ")}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
