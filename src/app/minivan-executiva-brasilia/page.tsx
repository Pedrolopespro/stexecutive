import type { Metadata } from "next";
import React from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

import { WHATSAPP_URL } from "@/lib/constants";

// ─────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Minivan Executiva em Brasília com Motorista | ST Executive",
  description:
    "Minivan executiva em Brasília com motorista profissional. Ideal para pequenos grupos, transfers, reuniões e eventos corporativos. Solicite orçamento via WhatsApp.",
  keywords: [
    "minivan executiva brasília",
    "minivan com motorista brasília",
    "minivan executiva df",
    "aluguel minivan brasília",
    "minivan para grupos brasília",
    "minivan executiva com motorista",
  ],
  alternates: {
    canonical: "https://stexecutive.com.br/minivan-executiva-brasilia/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/minivan-executiva-brasilia/",
      en: "https://stexecutive.com.br/en/minivan-executiva-brasilia/",
      es: "https://stexecutive.com.br/es/minivan-executiva-brasilia/",
      "x-default": "https://stexecutive.com.br/minivan-executiva-brasilia/",
    },
  },
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const USE_CASES = [
  {
    label: "Pequenos grupos corporativos",
    desc: "Transporte de equipes reduzidas com conforto e discrição.",
  },
  {
    label: "Transfer aeroporto",
    desc: "Traslado pontual para grupos de até 7 passageiros no Aeroporto de Brasília.",
  },
  {
    label: "Reuniões e eventos",
    desc: "Deslocamento de executivos e convidados com pontualidade garantida.",
  },
  {
    label: "Receptivos e visitas técnicas",
    desc: "Transporte de delegações, visitantes e parceiros comerciais.",
  },
  {
    label: "Casamentos e formaturas",
    desc: "Minivan executiva para família e convidados especiais.",
  },
  {
    label: "Operações especiais",
    desc: "Deslocamentos sob demanda para necessidades específicas.",
  },
];

const DIFFERENTIALS = [
  { number: "01", title: "Motorista profissional", desc: "Habilitado, uniformizado e treinado para atendimento executivo." },
  { number: "02", title: "Pontualidade garantida", desc: "Planejamento de rota e horário para cada deslocamento." },
  { number: "03", title: "Veículos climatizados", desc: "Minivans executivas em bom estado, limpas e confortáveis." },
  { number: "04", title: "Atendimento rápido", desc: "Orçamento personalizado via WhatsApp em poucos minutos." },
];

const FLEET_SPECS = [
  { spec: "Capacidade", value: "Até 7 passageiros" },
  { spec: "Climatização", value: "Ar-condicionado" },
  { spec: "Motorista", value: "Profissional incluso" },
  { spec: "Bagageiro", value: "Espaço para bagagens" },
  { spec: "Cobertura", value: "Todo o Distrito Federal" },
  { spec: "Agendamento", value: "Via WhatsApp" },
];

const PROCESS_STEPS = [
  { number: "01", title: "Fale no WhatsApp", text: "Informe a data, o trajeto e a quantidade de passageiros." },
  { number: "02", title: "Receba o orçamento", text: "Proposta personalizada para o seu deslocamento." },
  { number: "03", title: "Confirme o serviço", text: "A operação é organizada com antecedência." },
  { number: "04", title: "Minivan no local", text: "Motorista e veículo prontos no horário combinado." },
];

const LOCATIONS = [
  "Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte",
  "Sudoeste", "Noroeste", "Águas Claras", "Taguatinga",
  "Guará", "Aeroporto de Brasília", "Hotéis e espaços de eventos",
];

const FAQ_ITEMS = [
  {
    question: "A minivan executiva inclui motorista?",
    answer: "Sim. Todos os serviços da ST Executive são realizados com motorista profissional incluso.",
  },
  {
    question: "Quantas pessoas cabem na minivan executiva?",
    answer: "Em média até 7 passageiros, com espaço confortável para bagagens.",
  },
  {
    question: "Atendem empresas e eventos corporativos?",
    answer: "Sim. Atendemos empresas, congressos, eventos, equipes e deslocamentos corporativos.",
  },
  {
    question: "Fazem transfer para o Aeroporto de Brasília?",
    answer: "Sim. O serviço pode ser agendado para embarques e desembarques com planejamento de horário.",
  },
  {
    question: "Qual a diferença entre minivan e van executiva?",
    answer: "A minivan é ideal para grupos menores, de até 7 pessoas, com mais conforto individual. A van executiva atende grupos maiores, de até 15 passageiros.",
  },
  {
    question: "Como solicitar orçamento?",
    answer: "Pelo WhatsApp, informando data, horário, trajeto e quantidade de passageiros.",
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function MinivanExecutivaBrasiliaPage() {
  return (
    <>
      <Header />
      <main>

        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden bg-navy-950">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/content/mini van wild .webp"
              alt="Minivan executiva em Brasília com motorista — ST Executive"
              className="w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/60 to-navy-950/95" />
          </div>

          <div className="relative z-10 container-st py-20 lg:py-28">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                ST Executive
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[46px] lg:text-[58px] font-extrabold leading-[1.05] tracking-tight text-surface-white max-w-3xl">
              Minivan Executiva em{" "}
              <span className="italic text-white/85">Brasília</span>{" "}
              com Motorista
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              Minivan executiva para pequenos grupos, transfers, eventos e deslocamentos corporativos.
              Motorista profissional, conforto e atendimento em todo o Distrito Federal.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 flex flex-col items-start sm:flex-row gap-3">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon className="cta-servico">
                Solicitar orçamento no WhatsApp
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Orçamento rápido · Atendimento para grupos e empresas
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════
            O QUE É
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off border-b border-gray-200/50">
          <div className="container-st">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                O serviço
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-4">
                O que é minivan executiva com motorista?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                A minivan executiva com motorista é um serviço de transporte para grupos menores
                que precisam de conforto, privacidade e pontualidade. A ST Executive oferece esse
                serviço em Brasília e no Distrito Federal para empresas, eventos e operações
                especiais com até 7 passageiros.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            FROTA + SPECS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3]">
                <img
                  src="/images/content/mini van.webp"
                  alt="Minivan executiva ST Executive — interior e exterior"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                  Frota
                </p>
                <h2 className="text-[24px] sm:text-[32px] font-bold text-navy-950 leading-snug mb-4">
                  Minivan executiva com tudo incluído
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6">
                  Veículos confortáveis para grupos menores, com motorista profissional e
                  apresentação adequada para o ambiente corporativo.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {FLEET_SPECS.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-surface-off border border-gray-200">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{item.spec}</p>
                      <p className="text-sm font-semibold text-navy-950">{item.value}</p>
                    </div>
                  ))}
                </div>

                <Button variant="primary" size="md" href={WHATSAPP_URL} showWhatsAppIcon>
                  Consultar disponibilidade
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            PARA QUEM É
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow="Atendimento"
              title="Para quem é a minivan executiva?"
              subtitle="Soluções para diferentes necessidades de deslocamento em Brasília."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-gray-200 bg-white hover:border-gold-400/50 hover:shadow-soft transition-all duration-200"
                >
                  <p className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            DIFERENCIAIS
        ══════════════════════════════════ */}
        <section className="section-padding bg-navy-950">
          <div className="container-st">
            <SectionHeader
              eyebrow="Diferenciais"
              title="Por que escolher a ST Executive?"
              subtitle="Mais do que transporte — operação planejada e profissional."
              align="center"
              theme="dark"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {DIFFERENTIALS.map((d, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="w-10 h-10 rounded-full bg-gold-400/15 flex items-center justify-center mb-4">
                    <span className="text-gold-400 font-bold text-sm">{d.number}</span>
                  </div>
                  <p className="text-sm font-semibold text-surface-white mb-1.5">{d.title}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            COMO FUNCIONA
        ══════════════════════════════════ */}
        <section id="como-funciona" className="section-padding bg-surface-white">
          <div className="container-st">
            <SectionHeader
              eyebrow="Processo"
              title="Como contratar a minivan executiva"
              subtitle="Simples e rápido — do contato à execução."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-navy-950 flex items-center justify-center border-2 border-gold-400/30 shrink-0">
                    <span className="text-gold-400 font-bold text-sm">{step.number}</span>
                  </div>
                  <p className="text-sm font-semibold text-navy-950">{step.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon className="cta-servico">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            ONDE ATENDEMOS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                Cobertura
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-4">
                Minivan executiva em toda Brasília e DF
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Atendemos em qualquer ponto do Distrito Federal, incluindo hotéis, aeroporto e
                espaços de eventos.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {LOCATIONS.map((loc, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-navy-950 text-white text-sm font-medium"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            FAQ
        ══════════════════════════════════ */}
        <section id="faq" className="section-padding bg-surface-white">
          <div className="container-st">
            <SectionHeader
              eyebrow="Dúvidas"
              title="Perguntas frequentes"
              align="center"
            />
            <div className="max-w-2xl mx-auto">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            BLOCO SEMÂNTICO (sr-only)
        ══════════════════════════════════ */}
        <div className="sr-only" aria-hidden="true">
          A ST Executive oferece minivan executiva em Brasília com motorista profissional.
          Atende empresas, eventos corporativos, transfer aeroporto, grupos menores e operações
          especiais em todo o Distrito Federal. Serviço com pontualidade, conforto e minivans climatizadas.
        </div>

        {/* ══════════════════════════════════
            CTA FINAL
        ══════════════════════════════════ */}
        <CTASection
          title="Precisa de minivan executiva em Brasília?"
          subtitle="Fale com a ST Executive e receba uma proposta para o seu grupo."
          ctaText="Solicitar orçamento pelo WhatsApp"
          microcopy="Atendimento para empresas, eventos e pequenos grupos."
        />

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
