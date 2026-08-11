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
  title: "Transfer Aeroporto Brasília | Van com Motorista Pontual — ST Executive",
  description:
    "Transfer para aeroporto em Brasília com motorista. Pontual, seguro e ideal para grupos. Solicite seu orçamento via WhatsApp.",
  keywords: [
    "transfer aeroporto brasília",
    "traslado aeroporto brasília",
    "van para aeroporto brasília",
    "transfer aeroporto df",
    "transporte aeroporto brasília",
    "van aeroporto brasília motorista",
  ],
  alternates: {
    canonical: "https://stexecutive.com.br/transfer-aeroporto-brasilia/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/transfer-aeroporto-brasilia/",
      en: "https://stexecutive.com.br/en/transfer-aeroporto-brasilia/",
      es: "https://stexecutive.com.br/es/transfer-aeroporto-brasilia/",
      "x-default": "https://stexecutive.com.br/transfer-aeroporto-brasilia/",
    },
  },
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const WHEN_TO_USE = [
  { label: "Embarques com horário marcado", desc: "Planejamento antecipado para garantir pontualidade no voo." },
  { label: "Chegadas no aeroporto", desc: "Busca no desembarque com ajuste em caso de atraso de voo." },
  { label: "Transporte de grupos", desc: "Van executiva para grupos com bagagens, confortável e organizado." },
  { label: "Viagens corporativas", desc: "Padrão profissional para executivos e equipes." },
  { label: "Recepção de clientes", desc: "Transporte de convidados e clientes VIP com discrição." },
];

const DIFFERENTIALS = [
  { number: "01", title: "Pontualidade garantida", desc: "Planejamento de rota e horário para cada embarque ou desembarque." },
  { number: "02", title: "Monitoramento de voo", desc: "Acompanhamos o status do voo e ajustamos o horário em caso de atraso." },
  { number: "03", title: "Motorista profissional", desc: "Habilitado, uniformizado e preparado para atendimento executivo." },
  { number: "04", title: "Conforto para viagens", desc: "Espaço para bagagens e passageiros com ar-condicionado." },
];

const PRICE_FACTORS = [
  "Distância até o aeroporto",
  "Número de passageiros",
  "Tipo de veículo",
  "Horário do serviço",
];

const PROCESS_STEPS = [
  { number: "01", title: "Fale no WhatsApp", text: "Informe data, horário do voo e endereço de origem ou destino." },
  { number: "02", title: "Receba o orçamento", text: "Proposta personalizada enviada rapidamente." },
  { number: "03", title: "Agende o serviço", text: "Confirmação garantida — sem cancelamentos de última hora." },
  { number: "04", title: "Transfer realizado", text: "Motorista no local combinado, no horário certo." },
];

const LOCATIONS = [
  "Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte",
  "Sudoeste", "Águas Claras", "Taguatinga", "Hotéis e empresas da região",
];

const FOR_WHO = [
  { label: "Executivos", desc: "Deslocamento pontual e discreto para compromissos." },
  { label: "Turistas", desc: "Chegada e saída sem preocupação com transporte." },
  { label: "Famílias", desc: "Conforto e espaço para bagagens em família." },
  { label: "Grupos", desc: "Van executiva para grupos com organização." },
  { label: "Empresas", desc: "Recepção e transfer de clientes e equipes." },
];

const FAQ_ITEMS = [
  {
    question: "O transfer para aeroporto é pontual?",
    answer: "Sim. O serviço é planejado com antecedência para garantir chegada no horário do voo.",
  },
  {
    question: "Vocês monitoram o voo?",
    answer: "Sim. Acompanhamos o status do voo para ajustar o horário em caso de atraso.",
  },
  {
    question: "Atendem desembarque?",
    answer: "Sim. Buscamos no aeroporto e levamos até o seu destino final.",
  },
  {
    question: "Quantas pessoas cabem na van?",
    answer: "Em média até 15 passageiros, com espaço adequado para bagagens.",
  },
  {
    question: "Como contratar?",
    answer: "Pelo WhatsApp, informando data, horário do voo e endereço de origem ou destino.",
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function TransferAeroportoPage() {
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
              src="/images/content/aeroporto wild.webp"
              alt="Transfer aeroporto Brasília com motorista — ST Executive"
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
              Transfer para Aeroporto{" "}
              <span className="italic text-white/85">em Brasília</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              Van com motorista profissional para embarques e desembarques no Aeroporto
              Internacional de Brasília. Pontual, seguro e organizado.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 flex flex-col items-start sm:flex-row gap-3">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon className="cta-servico-hero">
                Solicitar orçamento
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Confirmação rápida · Atendimento imediato
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
                O que é transfer para aeroporto?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                O transfer para aeroporto é um serviço de transporte agendado que leva passageiros
                de um ponto até o aeroporto — ou do aeroporto até seu destino final. Diferente de
                aplicativos, o transfer é planejado com antecedência, garantindo pontualidade e
                evitando atrasos em voos.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            QUANDO CONTRATAR
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <SectionHeader
              eyebrow="Quando contratar"
              title="Para quais situações é indicado?"
              subtitle="O transfer é a melhor escolha quando pontualidade e conforto não são opcionais."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHEN_TO_USE.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-gray-200 bg-surface-off hover:border-gold-400/50 hover:bg-white transition-all duration-200"
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
              subtitle="Transfer planejado, motorista profissional e monitoramento de voo."
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
            COMPARATIVO
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                eyebrow="Comparativo"
                title="Transfer ou aplicativo: qual é melhor?"
                subtitle="Entenda quando o transfer é a escolha certa."
                align="center"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Transfer */}
                <div className="rounded-2xl border border-gold-400/30 bg-gold-400/5 p-6">
                  <p className="text-sm font-bold text-gold-500 uppercase tracking-wider mb-4">
                    Transfer ST Executive
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Agendamento confirmado com antecedência",
                      "Sem risco de cancelamento",
                      "Monitoramento do voo incluso",
                      "Motorista profissional e pontual",
                      "Ideal para grupos com bagagens",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-navy-950">
                        <span className="text-gold-500 mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* App */}
                <div className="rounded-2xl border border-gray-200 bg-surface-off p-6">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Aplicativos
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Disponibilidade variável",
                      "Cancelamentos de última hora",
                      "Sem monitoramento de voo",
                      "Preço imprevisível",
                      "Espaço limitado para bagagens",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
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
            COMO FUNCIONA
        ══════════════════════════════════ */}
        <section id="como-funciona" className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow="Processo"
              title="Como funciona o transfer"
              subtitle="Do agendamento até o destino — simples e sem surpresas."
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
                Solicitar valor do transfer
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            FROTA + PARA QUEM É
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3]">
                <img
                  src="/images/content/PASSAGEIRO 02.webp"
                  alt="Van executiva para transfer aeroporto Brasília"
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
                  Veículo adequado para cada transfer
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  Vans executivas com espaço para bagagens, ar-condicionado e motorista profissional
                  — para passageiros individuais ou grupos.
                </p>
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                    Para quem é indicado
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FOR_WHO.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full border border-navy-950/20 bg-surface-off text-sm text-navy-950 font-medium"
                        title={f.desc}
                      >
                        {f.label}
                      </span>
                    ))}
                  </div>
                </div>
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
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                eyebrow="Investimento"
                title="Quanto custa o transfer aeroporto em Brasília?"
                subtitle="O orçamento é personalizado. Solicite via WhatsApp em minutos."
                align="center"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {PRICE_FACTORS.map((factor, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white"
                  >
                    <span className="text-gold-500 font-bold text-sm min-w-[24px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-gray-700">{factor}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon className="cta-servico">
                  Solicitar valor do transfer no WhatsApp
                </Button>
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
                Transfer saindo de toda Brasília
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Buscamos em qualquer ponto do Distrito Federal e levamos diretamente ao
                Aeroporto Internacional de Brasília.
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
            <SectionHeader eyebrow="Dúvidas" title="Perguntas frequentes" align="center" />
            <div className="max-w-2xl mx-auto">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* sr-only semântico */}
        <div className="sr-only" aria-hidden="true">
          A ST Executive oferece transfer para aeroporto em Brasília com van executiva e motorista
          profissional. Atende embarques, desembarques, grupos, executivos e empresas. Serviço pontual
          com monitoramento de voo, saindo de qualquer ponto do Distrito Federal.
        </div>

        {/* CTA final */}
        <CTASection
          title="Precisa de transfer para o aeroporto em Brasília?"
          subtitle="Agende agora e garanta seu horário com segurança."
          ctaText="Chamar no WhatsApp"
          microcopy="Confirmação rápida · Atendimento para grupos e empresas."
        />

      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
