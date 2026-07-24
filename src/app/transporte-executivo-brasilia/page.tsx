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
  title: "Transporte Executivo em Brasília | Atendimento Corporativo — ST Executive",
  description:
    "Transporte executivo em Brasília para empresas e executivos. Atendimento profissional, pontual e seguro. Solicite via WhatsApp.",
  keywords: [
    "transporte executivo brasília",
    "transporte corporativo df",
    "motorista executivo brasília",
    "SUV executiva brasília",
    "transporte para empresas brasília",
    "transporte vip brasília",
  ],
  alternates: {
    canonical: "https://stexecutive.com.br/transporte-executivo-brasilia/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/transporte-executivo-brasilia/",
      en: "https://stexecutive.com.br/en/transporte-executivo-brasilia/",
      es: "https://stexecutive.com.br/es/transporte-executivo-brasilia/",
      "x-default": "https://stexecutive.com.br/transporte-executivo-brasilia/",
    },
  },
};

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const APPLICATIONS = [
  { label: "Reuniões de negócios", desc: "Deslocamento pontual e discreto para compromissos corporativos." },
  { label: "Transporte recorrente", desc: "Planos personalizados para empresas com demanda contínua." },
  { label: "Transfer de executivos", desc: "Aeroporto, hotéis e sedes com padrão profissional." },
  { label: "Eventos empresariais", desc: "Logística para congressos, lançamentos e convenções." },
  { label: "Atendimento a clientes VIP", desc: "Recepção e transporte de clientes e convidados especiais." },
  { label: "Embaixadas e autoridades", desc: "Operações discretas com alto nível de apresentação." },
];

const DIFFERENTIALS = [
  { number: "01", title: "Motoristas uniformizados", desc: "Treinados e preparados para atendimento executivo e corporativo." },
  { number: "02", title: "Pontualidade rigorosa", desc: "Planejamento de rota e horário para cada deslocamento." },
  { number: "03", title: "Frota executiva", desc: "Vans e SUVs executivas em ótimas condições." },
  { number: "04", title: "Ideal para empresas", desc: "Planos recorrentes e atendimento corporativo personalizado." },
];

const COMPANY_BENEFITS = [
  { title: "Experiência do cliente", desc: "Transporte que representa bem a sua empresa." },
  { title: "Organização logística", desc: "Deslocamentos planejados e confirmados com antecedência." },
  { title: "Redução de imprevistos", desc: "Sem cancelamentos, atrasos ou problemas de última hora." },
  { title: "Imagem profissional", desc: "Veículo adequado e motorista apresentável para cada operação." },
];

const PRICE_FACTORS = [
  "Tipo de veículo (van ou SUV executiva)",
  "Tempo de utilização",
  "Frequência do serviço — pontual ou recorrente",
  "Complexidade da operação",
];

const PROCESS_STEPS = [
  { number: "01", title: "Contato via WhatsApp", text: "Fale com a equipe e informe sua necessidade." },
  { number: "02", title: "Levantamento", text: "Entendemos se é pontual ou recorrente e qual veículo é ideal." },
  { number: "03", title: "Proposta", text: "Orçamento personalizado enviado rapidamente." },
  { number: "04", title: "Confirmação", text: "Serviço agendado e garantido." },
  { number: "05", title: "Execução", text: "Motorista profissional no local e horário combinados." },
];

const LOCATIONS = [
  "Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte",
  "Sudoeste", "Águas Claras", "Setor Hoteleiro", "Aeroporto Internacional de Brasília",
];

const FAQ_ITEMS = [
  {
    question: "O que diferencia o transporte executivo?",
    answer: "O padrão de atendimento, a pontualidade e o perfil profissional do motorista e do veículo.",
  },
  {
    question: "Atendem empresas com demanda recorrente?",
    answer: "Sim. Oferecemos planos personalizados para empresas com necessidades contínuas de transporte.",
  },
  {
    question: "É possível contratar mensalmente?",
    answer: "Sim. Trabalhamos com contratos e planos recorrentes com condições personalizadas.",
  },
  {
    question: "Atendem transfer para aeroporto?",
    answer: "Sim. Incluímos transfer executivo para embarque e desembarque no Aeroporto de Brasília.",
  },
  {
    question: "Atendem embaixadas e autoridades?",
    answer: "Sim. Realizamos operações discretas com alto padrão de apresentação e pontualidade.",
  },
  {
    question: "Como solicitar proposta corporativa?",
    answer: "Via WhatsApp, informando tipo de serviço, frequência e quantidade de passageiros.",
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function TransporteExecutivoPage() {
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
              src="/images/content/SUV wild.webp"
              alt="Transporte executivo em Brasília — ST Executive"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/65 to-navy-950/95" />
          </div>

          <div className="relative z-10 container-st py-20 lg:py-28">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                ST Executive
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[46px] lg:text-[58px] font-extrabold leading-[1.05] tracking-tight text-surface-white max-w-3xl">
              Transporte Executivo{" "}
              <span className="italic text-white/85">em Brasília</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              Motorista profissional e atendimento corporativo para empresas, executivos e
              convidados especiais. Pontualidade, discrição e padrão premium.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                Solicitar atendimento no WhatsApp
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/35">
              Atendimento rápido · Profissionalismo garantido
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
                O que é transporte executivo?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                O transporte executivo é um serviço de mobilidade voltado para clientes que
                precisam de mais do que apenas deslocamento. Envolve pontualidade, discrição,
                conforto e um padrão profissional no atendimento — amplamente utilizado por
                empresas, executivos e eventos corporativos.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            POR QUE BRASÍLIA — conteúdo local
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white border-b border-gray-200/50">
          <div className="container-st">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                Contexto
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-5">
                Por que Brasília exige transporte executivo?
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-gray-600">
                <p>
                  Brasília concentra a sede dos três Poderes, mais de 80 embaixadas estrangeiras
                  e o maior calendário de eventos corporativos e congressos do país. É uma cidade
                  movimentada por executivos, autoridades, delegações internacionais e empresas
                  que operam em alto padrão.
                </p>
                <p>
                  Nesse ambiente, o transporte comum não atende ao nível de exigência do mercado.
                  Empresas, embaixadas e eventos de alto padrão precisam de mobilidade que combine
                  pontualidade rigorosa, discrição e representatividade — características que
                  aplicativos de transporte não conseguem garantir de forma consistente.
                </p>
                <p>
                  É exatamente esse o papel do transporte executivo em Brasília: cada deslocamento
                  deve refletir o nível de quem contrata — com motorista uniformizado, veículo
                  adequado e operação planejada do início ao fim.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { number: "80+", label: "Embaixadas atendidas na capital" },
                  { number: "3", label: "Poderes com demanda constante de mobilidade" },
                  { number: "100%", label: "DF coberto pela frota ST Executive" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-5 rounded-2xl border border-gold-400/20 bg-gold-400/5"
                  >
                    <span className="text-3xl font-extrabold text-gold-500 mb-1">{stat.number}</span>
                    <span className="text-xs text-gray-500 leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            APLICAÇÕES DO SERVIÇO
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <SectionHeader
              eyebrow="Aplicações"
              title="Principais usos do transporte executivo"
              subtitle="Soluções para cada necessidade corporativa em Brasília."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {APPLICATIONS.map((item, i) => (
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
              title="O padrão ST Executive"
              subtitle="Operação profissional do primeiro contato à execução."
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
            BENEFÍCIOS PARA EMPRESAS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3]">
                <img
                  src="/images/content/seda executivo.webp"
                  alt="Frota executiva ST Executive em Brasília"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                  Para empresas
                </p>
                <h2 className="text-[24px] sm:text-[32px] font-bold text-navy-950 leading-snug mb-4">
                  Benefícios para a sua empresa
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  Contratar transporte executivo eleva a experiência dos seus clientes e
                  parceiros, além de organizar a logística de deslocamentos corporativos.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {COMPANY_BENEFITS.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold-400/15 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-navy-950">{b.title}</p>
                        <p className="text-sm text-gray-500">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="md" href={WHATSAPP_URL} showWhatsAppIcon>
                  Solicitar proposta corporativa
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
                title="Transporte executivo ou aplicativo?"
                subtitle="Entenda quando o transporte executivo é a escolha certa."
                align="center"
                theme="dark"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gold-400/30 bg-gold-400/5 p-6">
                  <p className="text-sm font-bold text-gold-400 uppercase tracking-wider mb-4">
                    Transporte executivo
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Padrão profissional garantido",
                      "Motorista uniformizado e treinado",
                      "Previsibilidade total do serviço",
                      "Ideal para clientes corporativos",
                      "Planejamento e confirmação antecipada",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="text-gold-400 mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">
                    Aplicativos
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Padrão informal e variável",
                      "Motorista sem treinamento específico",
                      "Preço e disponibilidade instáveis",
                      "Não representa a imagem da empresa",
                      "Cancelamentos de última hora",
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
            COMO FUNCIONA
        ══════════════════════════════════ */}
        <section id="como-funciona" className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow="Processo"
              title="Como contratar o serviço"
              subtitle="Do primeiro contato à execução — planejado e confirmado."
              align="center"
            />
            <div className="relative">
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
            </div>
            <div className="mt-12 text-center">
              <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                Solicitar proposta corporativa no WhatsApp
              </Button>
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
                title="Quanto custa o transporte executivo em Brasília?"
                subtitle="Planos pontuais ou recorrentes — orçamento personalizado para cada demanda."
                align="center"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
              <p className="text-sm text-gray-500 text-center mb-8">
                Empresas podem contratar planos recorrentes com condições personalizadas.
              </p>
              <div className="text-center">
                <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                  Solicitar proposta corporativa
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            ONDE ATENDEMOS — SEO local
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                Cobertura
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-4">
                Atendimento em toda Brasília e DF
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Atendemos empresas, hotéis, aeroporto e qualquer ponto do Distrito Federal.
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
            <SectionHeader eyebrow="Dúvidas" title="Perguntas frequentes" align="center" />
            <div className="max-w-2xl mx-auto">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* sr-only semântico */}
        <div className="sr-only" aria-hidden="true">
          A ST Executive oferece transporte executivo em Brasília para empresas, executivos,
          embaixadas e convidados especiais. Atende com motoristas profissionais, SUVs e vans
          executivas, pontualidade e alto padrão de apresentação em todo o Distrito Federal.
        </div>

        {/* CTA final */}
        <CTASection
          title="Precisa de transporte executivo em Brasília?"
          subtitle="Atendimento profissional para empresas e executivos."
          ctaText="Falar no WhatsApp"
          microcopy="Planos pontuais e recorrentes para empresas, eventos e operações especiais."
        />

      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
