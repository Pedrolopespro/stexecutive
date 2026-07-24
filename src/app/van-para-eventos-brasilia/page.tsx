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
  title: "Van para Eventos em Brasília com Motorista | Grupos — ST Executive",
  description:
    "Van para eventos em Brasília com motorista profissional. Casamentos, eventos corporativos, shows e grupos. Orçamento rápido via WhatsApp.",
  keywords: [
    "van para eventos brasília",
    "van com motorista brasília",
    "transporte para casamento brasília",
    "transporte para eventos DF",
    "van com motorista eventos brasília",
    "aluguel van eventos brasília",
    "transporte grupos brasília",
  ],
  alternates: {
    canonical: "https://stexecutive.com.br/van-para-eventos-brasilia/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/van-para-eventos-brasilia/",
      en: "https://stexecutive.com.br/en/van-para-eventos-brasilia/",
      es: "https://stexecutive.com.br/es/van-para-eventos-brasilia/",
      "x-default": "https://stexecutive.com.br/van-para-eventos-brasilia/",
    },
  },
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const EVENT_TYPES = [
  { label: "Casamentos", desc: "Transporte de convidados e noivos com conforto e pontualidade." },
  { label: "Eventos corporativos", desc: "Equipes, clientes e participantes com logística planejada." },
  { label: "Congressos e feiras", desc: "Deslocamento coletivo para grandes eventos empresariais." },
  { label: "Shows e festas", desc: "Grupos para shows, festivais e comemorações." },
  { label: "Formaturas", desc: "Transporte especial para cerimônias e recepções." },
  { label: "Eventos religiosos", desc: "Grupos para missas, retiros e celebrações." },
];

const BENEFITS = [
  { title: "Todos chegam juntos", desc: "Sem dispersão ou atrasos individuais." },
  { title: "Menos estresse", desc: "Evita problemas com estacionamento e trânsito." },
  { title: "Mais conforto", desc: "Veículos climatizados e espaçosos." },
  { title: "Logística simplificada", desc: "Um único ponto de controle para todo o grupo." },
  { title: "Pontualidade", desc: "Motorista profissional com planejamento de rota." },
  { title: "Custo compartilhado", desc: "Mais econômico do que vários carros separados." },
];

const LOCATIONS = [
  "Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte",
  "Sudoeste", "Águas Claras", "Taguatinga", "Espaços de eventos e hotéis",
];

const COMMON_SITUATIONS = [
  "Transporte de convidados em casamentos",
  "Equipes em eventos corporativos",
  "Grupos indo para shows",
  "Deslocamento em feiras e congressos",
];

const PRICE_FACTORS = [
  "Duração do evento",
  "Distância do trajeto",
  "Quantidade de passageiros",
  "Horários — ida e volta ou múltiplos deslocamentos",
];

const PROCESS_STEPS = [
  { number: "01", title: "Contato via WhatsApp", text: "Fale com a equipe e informe os detalhes do evento." },
  { number: "02", title: "Envio das informações", text: "Data, horário, local, número de passageiros e trajeto." },
  { number: "03", title: "Planejamento", text: "A ST Executive organiza a logística completa do transporte." },
  { number: "04", title: "Orçamento", text: "Receba uma proposta personalizada para o seu evento." },
  { number: "05", title: "Execução", text: "Motorista e van no local e horário combinados." },
];

const FAQ_ITEMS = [
  {
    question: "Atendem casamentos?",
    answer: "Sim. Realizamos transporte de convidados e noivos com conforto e pontualidade.",
  },
  {
    question: "Fazem transporte ida e volta?",
    answer: "Sim. Planejamos ida, retorno e múltiplos deslocamentos conforme a necessidade do evento.",
  },
  {
    question: "Quantas pessoas cabem na van?",
    answer: "Em média até 15 passageiros, com espaço para conforto e bagagens.",
  },
  {
    question: "Atendem eventos corporativos?",
    answer: "Sim. Atendemos empresas, congressos, feiras e qualquer evento empresarial.",
  },
  {
    question: "Como contratar?",
    answer: "Via WhatsApp com atendimento rápido. Informe data, trajeto e número de passageiros.",
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function VanParaEventosPage() {
  return (
    <>
      <Header />
      <main>

        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden bg-navy-950">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/content/van wild.webp"
              alt="Van para eventos em Brasília — ST Executive"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/60 to-navy-950/95" />
          </div>

          <div className="relative z-10 container-st py-20 lg:py-28">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                ST Executive
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-surface-white max-w-3xl">
              Van para Eventos em Brasília{" "}
              <span className="italic text-white/85">com Motorista</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              Transporte para grupos em casamentos, eventos corporativos e shows.
              Atendimento em todo o Distrito Federal com pontualidade e organização.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                Solicitar orçamento no WhatsApp
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Atendimento imediato · Orçamento rápido
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════
            O QUE É — semântico para IA
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off border-b border-gray-200/50">
          <div className="container-st">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                O serviço
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-4">
                O que é van para eventos?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                A van para eventos é um serviço de transporte voltado para grupos que precisam
                se deslocar juntos para um evento específico. Garante que todos cheguem no mesmo
                horário, com conforto e sem preocupações com estacionamento ou logística.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            TIPOS DE EVENTOS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <SectionHeader
              eyebrow="Eventos atendidos"
              title="Para qual evento você precisa de transporte?"
              subtitle="Atendemos grupos em diferentes tipos de eventos em Brasília e no DF."
              align="center"
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EVENT_TYPES.map((type, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 p-5 rounded-2xl border border-gray-200 bg-surface-off hover:border-gold-400/50 hover:bg-white transition-all duration-200"
                >
                  <span className="text-[13px] font-semibold uppercase tracking-wider text-gold-500">
                    {type.label}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            BENEFÍCIOS
        ══════════════════════════════════ */}
        <section className="section-padding bg-navy-950">
          <div className="container-st">
            <SectionHeader
              eyebrow="Por que escolher van"
              title="Benefícios do transporte em grupo"
              subtitle="Mais organização para o seu evento, do início ao fim."
              align="center"
             theme="dark"
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map((b, i) => (
                <div key={i} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                  <div className="w-8 h-8 rounded-full bg-gold-400/15 flex items-center justify-center mb-3">
                    <span className="text-gold-400 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-sm font-semibold text-surface-white mb-1">{b.title}</p>
                  <p className="text-sm text-white/55">{b.desc}</p>
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
              title="Como funciona o serviço"
              subtitle="Do primeiro contato até a execução — simples e rápido."
              align="center"
            />

            <div className="mt-10 relative">
              {/* Linha conectora desktop */}
              <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-navy-950 flex items-center justify-center border-2 border-gold-400/30 shrink-0">
                      <span className="text-gold-400 font-bold text-sm">{step.number}</span>
                    </div>
                    <p className="text-sm font-semibold text-navy-950">{step.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            FROTA PARA EVENTOS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Imagem */}
              <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3]">
                <img
                  src="/images/content/van.webp"
                  alt="Van executiva para eventos em Brasília"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                  Frota
                </p>
                <h2 className="text-[24px] sm:text-[32px] font-bold text-navy-950 leading-snug mb-4">
                  Vans executivas para o seu evento
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6">
                  Veículos adequados para grupos, com conforto, ar-condicionado e espaço para
                  todos os passageiros.
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Vans executivas climatizadas",
                    "Capacidade média de até 15 passageiros",
                    "Espaço para bagagens e pertences",
                    "Motorista profissional e uniformizado",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-gold-400/15 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button variant="primary" size="md" href={WHATSAPP_URL} showWhatsAppIcon>
                  Consultar disponibilidade
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            QUANTO CUSTA
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                eyebrow="Investimento"
                title="Quanto custa van para eventos em Brasília?"
                subtitle="O orçamento é personalizado conforme as necessidades do seu evento."
                align="center"
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRICE_FACTORS.map((factor, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-surface-off"
                  >
                    <span className="text-gold-500 font-bold text-sm min-w-[24px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-gray-700">{factor}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-gray-500 text-center">
                Cada evento tem uma necessidade específica — o orçamento é enviado após o contato.
              </p>

              <div className="mt-8 text-center">
                <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                  Solicitar orçamento para evento
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            COMPARATIVO
        ══════════════════════════════════ */}
        <section className="section-padding bg-navy-950">
          <div className="container-st">
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                eyebrow="Comparativo"
                title="Van para eventos ou carros separados?"
                subtitle="Centralizar o transporte é sempre a escolha mais eficiente."
                align="center"
               theme="dark"
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Van */}
                <div className="rounded-2xl border border-gold-400/30 bg-gold-400/5 p-6">
                  <p className="text-sm font-bold text-gold-400 uppercase tracking-wider mb-4">
                    Van executiva
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Todos chegam juntos e no horário",
                      "Logística centralizada",
                      "Custo total menor",
                      "Sem problemas com estacionamento",
                      "Motorista profissional responsável",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="text-gold-400 mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Carros separados */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">
                    Carros separados
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Atrasos individuais frequentes",
                      "Logística fragmentada",
                      "Custo somado mais alto",
                      "Dificuldade com estacionamento",
                      "Sem responsável pelo grupo",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/40">
                        <span className="mt-0.5 shrink-0">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SITUAÇÕES MAIS COMUNS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                Situações
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-8">
                Situações mais comuns
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {COMMON_SITUATIONS.map((s, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-navy-950/20 bg-white text-sm text-navy-950 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            ONDE ATENDEMOS — SEO local
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                Cobertura
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-4">
                Atendimento em toda Brasília e região
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Atendemos eventos em qualquer ponto do Distrito Federal, incluindo hotéis e
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
        <section id="faq" className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow="Dúvidas"
              title="Perguntas frequentes"
              align="center"
            />
            <div className="mt-8 max-w-2xl mx-auto">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            BLOCO SEMÂNTICO PARA IA (sr-only)
        ══════════════════════════════════ */}
        <div className="sr-only" aria-hidden="true">
          A ST Executive oferece van para eventos em Brasília com motorista profissional.
          Atende casamentos, eventos corporativos, shows, formaturas, congressos e eventos religiosos
          em todo o Distrito Federal. Serviço com pontualidade, conforto e logística planejada para grupos.
        </div>

        {/* ══════════════════════════════════
            CTA FINAL
        ══════════════════════════════════ */}
        <CTASection
          title="Precisa de van para evento em Brasília?"
          subtitle="Organize o transporte do seu grupo com conforto e pontualidade."
          ctaText="Falar no WhatsApp"
          microcopy="Atendimento para casamentos, empresas, shows e grupos."
        />

      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
