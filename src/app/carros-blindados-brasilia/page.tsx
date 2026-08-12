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
import { ogDaPagina } from "@/lib/seo";

// ─────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Carros Blindados em Brasília com Motorista | ST Executive",
  description:
    "Carro blindado em Brasília com motorista para executivos, autoridades, diplomatas e eventos. Segurança, discrição e atendimento premium.",
  keywords: [
    "carro blindado brasília",
    "carro blindado com motorista brasília",
    "aluguel carro blindado brasília",
    "sedan blindado brasília",
    "transporte blindado brasília",
    "segurança executiva brasília",
  ],
  openGraph: ogDaPagina("Carros Blindados em Brasília com Motorista | ST Executive"),
  alternates: {
    canonical: "https://stexecutive.com.br/carros-blindados-brasilia/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/carros-blindados-brasilia/",
      en: "https://stexecutive.com.br/en/carros-blindados-brasilia/",
      es: "https://stexecutive.com.br/es/carros-blindados-brasilia/",
      "x-default": "https://stexecutive.com.br/carros-blindados-brasilia/",
    },
  },
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const USE_CASES = [
  {
    label: "Executivos e diretores",
    desc: "Transporte seguro e discreto para líderes empresariais em reuniões e compromissos.",
  },
  {
    label: "Autoridades e diplomatas",
    desc: "Deslocamento com segurança reforçada para autoridades governamentais e diplomáticas.",
  },
  {
    label: "Transfer aeroporto VIP",
    desc: "Traslado blindado para chegadas e partidas no Aeroporto de Brasília.",
  },
  {
    label: "Eventos de alto nível",
    desc: "Transporte seguro para convidados especiais em eventos corporativos e oficiais.",
  },
  {
    label: "Visitas técnicas e missões",
    desc: "Deslocamento protegido para delegações e missões em Brasília.",
  },
  {
    label: "Proteção personalizada",
    desc: "Serviço sob medida para necessidades específicas de segurança e discrição.",
  },
];

const DIFFERENTIALS = [
  { number: "01", title: "Motorista especializado", desc: "Treinado em direção defensiva e protocolos de segurança executiva." },
  { number: "02", title: "Discrição total", desc: "Veículos e operação sem identificação visível, preservando a privacidade." },
  { number: "03", title: "Blindagem certificada", desc: "Veículos com blindagem homologada para maior proteção." },
  { number: "04", title: "Atendimento dedicado", desc: "Orçamento personalizado e operação planejada para cada missão." },
];

const FLEET_SPECS = [
  { spec: "Categoria", value: "Sedan executivo blindado" },
  { spec: "Blindagem", value: "Certificada" },
  { spec: "Motorista", value: "Especializado incluso" },
  { spec: "Discrição", value: "Operação discreta" },
  { spec: "Cobertura", value: "Todo o Distrito Federal" },
  { spec: "Agendamento", value: "Via WhatsApp" },
];

const PROCESS_STEPS = [
  { number: "01", title: "Fale no WhatsApp", text: "Informe a data, o trajeto e o perfil do passageiro." },
  { number: "02", title: "Receba o orçamento", text: "Proposta personalizada e confidencial para a sua operação." },
  { number: "03", title: "Confirme o serviço", text: "A operação é planejada com rigor e antecedência." },
  { number: "04", title: "Veículo no local", text: "Motorista especializado e veículo blindado prontos no horário." },
];

const LOCATIONS = [
  "Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte",
  "Sudoeste", "Noroeste", "Águas Claras", "Setor Hoteleiro",
  "Esplanada dos Ministérios", "Aeroporto de Brasília", "Todo o DF",
];

const FAQ_ITEMS = [
  {
    question: "O serviço de carro blindado inclui motorista?",
    answer: "Sim. O serviço inclui motorista especializado em direção defensiva e protocolos de segurança executiva.",
  },
  {
    question: "Os veículos blindados têm identificação visível?",
    answer: "Não. A operação é realizada com discrição total, sem identificação externa que possa comprometer a privacidade do passageiro.",
  },
  {
    question: "Atendem autoridades e diplomatas em Brasília?",
    answer: "Sim. Atendemos autoridades, diplomatas, executivos e qualquer perfil que exija transporte com segurança e discrição.",
  },
  {
    question: "Fazem transfer blindado para o Aeroporto de Brasília?",
    answer: "Sim. O serviço pode ser agendado para chegadas e partidas com planejamento de rota e horário.",
  },
  {
    question: "O serviço é confidencial?",
    answer: "Sim. Todas as informações do serviço são tratadas com total confidencialidade.",
  },
  {
    question: "Como solicitar orçamento?",
    answer: "Pelo WhatsApp, informando a data, o trajeto e o perfil do serviço necessário.",
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function CarrosBlinadadosBrasiliaPage() {
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
              src="/images/content/corolla wild.webp"
              alt="Carro blindado em Brasília com motorista especializado — ST Executive"
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
              Carros Blindados em{" "}
              <span className="italic text-white/85">Brasília</span>{" "}
              com Motorista
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              Transporte blindado para executivos, autoridades e eventos de alto nível.
              Motorista especializado, discrição e segurança em todo o Distrito Federal.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 flex flex-col items-start sm:flex-row gap-3">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon className="cta-servico-hero">
                Solicitar orçamento
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Orçamento confidencial · Operação discreta e planejada
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
                O que é transporte em carro blindado com motorista?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                O transporte em carro blindado com motorista é um serviço de segurança executiva
                para passageiros que precisam de proteção, discrição e confiabilidade nos seus
                deslocamentos. A ST Executive oferece esse serviço em Brasília e no Distrito Federal
                para executivos, autoridades, diplomatas e eventos de alto nível.
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
                  src="/images/content/sedan blindada .webp"
                  alt="Sedan blindado ST Executive Brasília"
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
                  Sedan blindado com operação completa
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6">
                  Veículos com blindagem certificada, motorista especializado e operação planejada
                  para cada missão com total confidencialidade.
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
              title="Para quem é o transporte blindado?"
              subtitle="Segurança e discrição para diferentes perfis em Brasília."
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
              subtitle="Segurança, discrição e profissionalismo em cada deslocamento."
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
              title="Como contratar o transporte blindado"
              subtitle="Discreto e eficiente — do contato à execução."
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
                Transporte blindado em toda Brasília e DF
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Atendemos em qualquer ponto do Distrito Federal, incluindo Esplanada, hotéis
                cinco estrelas, aeroporto e espaços de eventos de alto nível.
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

        <div className="sr-only" aria-hidden="true">
          A ST Executive oferece transporte em carros blindados em Brasília com motorista especializado.
          Atende executivos, autoridades, diplomatas e eventos de alto nível em todo o Distrito Federal.
          Serviço com discrição total, blindagem certificada e operação planejada.
        </div>

        <CTASection
          title="Precisa de carro blindado em Brasília?"
          subtitle="Fale com a ST Executive e receba uma proposta confidencial."
          ctaText="Solicitar orçamento pelo WhatsApp"
          microcopy="Atendimento discreto para executivos, autoridades e eventos de alto nível."
        />

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
