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
  title: "City Tour em Brasília com Motorista Guia | ST Executive",
  description:
    "City tour em Brasília com motorista e veículo executivo. Conheça os principais pontos turísticos e monumentos da capital com conforto e pontualidade. Solicite orçamento via WhatsApp.",
  keywords: [
    "city tour brasília",
    "passeio turístico brasília",
    "tour brasília com motorista",
    "pontos turísticos brasília transporte",
    "passeio brasília executivo",
    "city tour df",
  ],
  alternates: {
    canonical: "https://stexecutive.com.br/city-tour-brasilia/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/city-tour-brasilia/",
      en: "https://stexecutive.com.br/en/city-tour-brasilia/",
      es: "https://stexecutive.com.br/es/city-tour-brasilia/",
      "x-default": "https://stexecutive.com.br/city-tour-brasilia/",
    },
  },
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const ATTRACTIONS = [
  {
    label: "Congresso Nacional",
    desc: "Um dos símbolos da arquitetura modernista de Oscar Niemeyer no coração da capital.",
  },
  {
    label: "Catedral Metropolitana",
    desc: "Obra icónica de Niemeyer com vitrais impressionantes e arquitetura única no mundo.",
  },
  {
    label: "Palácio do Planalto",
    desc: "Sede do governo federal, com rampa em mármore e guarda presidencial.",
  },
  {
    label: "Esplanada dos Ministérios",
    desc: "O eixo monumental que concentra os edifícios dos ministérios e o Museu Nacional.",
  },
  {
    label: "Pontão do Lago Sul",
    desc: "Beira do Lago Paranoá com restaurantes, marinas e vista para o Brasília Palace Hotel.",
  },
  {
    label: "Torre de TV Digital",
    desc: "Mirante com vista panorâmica de 360° sobre toda a cidade planeada.",
  },
];

const DIFFERENTIALS = [
  { number: "01", title: "Motorista experiente", desc: "Conhece os principais pontos turísticos e rotas de Brasília." },
  { number: "02", title: "Veículo executivo", desc: "Conforto e climatização para aproveitar o passeio." },
  { number: "03", title: "Roteiro flexível", desc: "Adaptamos o percurso ao tempo disponível e às preferências do grupo." },
  { number: "04", title: "Atendimento rápido", desc: "Orçamento personalizado via WhatsApp em poucos minutos." },
];

const FLEET_SPECS = [
  { spec: "Veículo", value: "Van ou sedan executivo" },
  { spec: "Climatização", value: "Ar-condicionado" },
  { spec: "Motorista", value: "Profissional incluso" },
  { spec: "Roteiro", value: "Personalizado" },
  { spec: "Cobertura", value: "Todo o Distrito Federal" },
  { spec: "Agendamento", value: "Via WhatsApp" },
];

const PROCESS_STEPS = [
  { number: "01", title: "Fale no WhatsApp", text: "Informe a data, o número de pessoas e os pontos de interesse." },
  { number: "02", title: "Receba o orçamento", text: "Proposta personalizada com roteiro e duração estimada." },
  { number: "03", title: "Confirme o serviço", text: "O passeio é organizado com antecedência." },
  { number: "04", title: "Passeio com conforto", text: "Motorista e veículo prontos para mostrar o melhor de Brasília." },
];

const TOUR_THEMES = [
  { label: "Tour político e cívico", desc: "Esplanada, Congresso, Planalto, STF e símbolos do poder republicano." },
  { label: "Tour arquitetónico", desc: "As obras de Niemeyer e Lúcio Costa que tornaram Brasília Patrimônio da Humanidade." },
  { label: "Tour cultural e religioso", desc: "Catedral, Santuário Dom Bosco, Mesquita, Templo da Boa Vontade e espaços culturais." },
  { label: "Tour panorâmico", desc: "Os mirantes, parques e beiras do Lago Paranoá com as melhores vistas da cidade." },
];

const FAQ_ITEMS = [
  {
    question: "O city tour inclui motorista?",
    answer: "Sim. Todos os serviços da ST Executive são realizados com motorista profissional incluso.",
  },
  {
    question: "Posso personalizar o roteiro do city tour?",
    answer: "Sim. O roteiro pode ser adaptado ao tempo disponível, aos interesses do grupo e a pontos específicos que queira visitar.",
  },
  {
    question: "O serviço serve para turistas hospedados em hotéis?",
    answer: "Sim. Buscamos os passageiros no hotel e entregamos de volta ao final do passeio, com toda a comodidade.",
  },
  {
    question: "Fazem city tour para grupos corporativos e delegações?",
    answer: "Sim. Atendemos delegações, grupos de executivos, visitantes internacionais e qualquer grupo que queira conhecer Brasília.",
  },
  {
    question: "Quanto tempo dura o city tour?",
    answer: "Depende do roteiro escolhido. Em média, os passeios duram entre 3 e 6 horas. Informamos a estimativa no orçamento.",
  },
  {
    question: "Como solicitar orçamento?",
    answer: "Pelo WhatsApp, informando a data, o número de pessoas e os pontos de interesse.",
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function CityTourBrasiliaPage() {
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
              src="/images/content/commander.webp"
              alt="City tour em Brasília com motorista executivo — Ponte JK ao fundo — ST Executive"
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
              City Tour em{" "}
              <span className="italic text-white/85">Brasília</span>{" "}
              com Motorista
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              Conheça a capital com conforto e pontualidade. Veículo executivo, motorista
              experiente e roteiro personalizado para turistas, delegações e visitantes no DF.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                Solicitar orçamento no WhatsApp
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Orçamento rápido · Roteiro personalizado
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
                O que é city tour executivo em Brasília?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                O city tour executivo é um passeio turístico por Brasília em veículo confortável
                com motorista profissional. A ST Executive oferece esse serviço para turistas,
                delegações, visitantes e executivos que querem conhecer os monumentos, a arquitectura
                modernista e os espaços culturais da capital do Brasil com comodidade e pontualidade.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            PRINCIPAIS ATRAÇÕES
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <SectionHeader
              eyebrow="Roteiro"
              title="Principais atrações de Brasília"
              subtitle="Os monumentos e pontos icónicos que podem fazer parte do seu tour."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ATTRACTIONS.map((item, i) => (
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
            TEMAS DE TOUR
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow="Opções"
              title="Tours temáticos disponíveis"
              subtitle="Cada visita pode ser personalizada conforme o interesse do grupo."
              align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {TOUR_THEMES.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-gold-400/50 hover:shadow-soft transition-all duration-200"
                >
                  <p className="text-sm font-semibold text-navy-950 mb-2">{item.label}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              ))}
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
                  src="/images/content/comanders.webp"
                  alt="Veículos executivos ST Executive para city tour em Brasília, com a Ponte JK ao fundo"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                  O veículo
                </p>
                <h2 className="text-[24px] sm:text-[32px] font-bold text-navy-950 leading-snug mb-4">
                  Conforto executivo para o seu tour
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6">
                  Van ou sedan executivo conforme o tamanho do grupo, sempre com motorista
                  profissional e climatização para o máximo conforto durante o passeio.
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
            DIFERENCIAIS
        ══════════════════════════════════ */}
        <section className="section-padding bg-navy-950">
          <div className="container-st">
            <SectionHeader
              eyebrow="Diferenciais"
              title="Por que fazer o city tour com a ST Executive?"
              subtitle="Mais do que transporte — uma experiência bem organizada."
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
              title="Como contratar o city tour"
              subtitle="Simples e rápido — do contato ao passeio."
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
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            FAQ
        ══════════════════════════════════ */}
        <section id="faq" className="section-padding bg-surface-off">
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

        <div className="sr-only" aria-hidden="true">
          A ST Executive oferece city tour em Brasília com motorista profissional e veículo executivo.
          Roteiros personalizados pelos principais monumentos, arquitectura modernista e pontos turísticos
          da capital. Atende turistas, delegações, visitantes e grupos corporativos em todo o Distrito Federal.
        </div>

        <CTASection
          title="Quer conhecer Brasília com conforto?"
          subtitle="Fale com a ST Executive e monte o seu roteiro personalizado."
          ctaText="Solicitar orçamento pelo WhatsApp"
          microcopy="Para turistas, delegações, grupos e visitantes corporativos."
        />

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
