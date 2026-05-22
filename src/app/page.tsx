"use client";

import React from "react";
import {
  ArrowRight,
  Car,
  Clock,
  Headphones,
  MapPin,
  Plane,
  BriefcaseBusiness,
  PartyPopper,
  Bus,
  Building2,
  Hotel,
  Mic2,
  ShieldCheck,
  Quote,
  Star,
  Users,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";
import SectionHeader from "@/components/ui/SectionHeader";

import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import ServiceCard from "@/components/sections/ServiceCard";

import { WHATSAPP_URL } from "@/lib/constants";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const SERVICES = [
  {
    icon: <Car className="w-5 h-5" />,
    title: "Van Executiva",
    shortText: "Transporte para grupos, equipes, convidados e eventos.",
    description:
      "Vans com motorista profissional para eventos, transfer aeroporto, empresas e deslocamentos planejados.",
    highlights: ["Grupos e equipes", "Eventos e congressos", "Transfer aeroporto"],
    ctaText: "Solicitar van executiva",
    internalLink: "/aluguel-de-van-brasilia",
    featured: true,
  },
  {
    icon: <BriefcaseBusiness className="w-5 h-5" />,
    title: "SUV Executiva",
    shortText: "Conforto e discrição para executivos e convidados especiais.",
    description:
      "SUVs executivas para reuniões, recepção de clientes, agendas corporativas e deslocamentos individuais.",
    highlights: ["Executivos e convidados", "Reuniões e agendas", "Atendimento individual"],
    ctaText: "Consultar SUV executiva",
    internalLink: "/transporte-executivo-brasilia",
    featured: false,
  },
  {
    icon: <Plane className="w-5 h-5" />,
    title: "Transfer Aeroporto",
    shortText: "Traslado pontual para embarques e desembarques.",
    description:
      "Serviço agendado para o Aeroporto de Brasília, com motorista profissional e planejamento de horário.",
    highlights: ["Embarques e desembarques", "Horário agendado", "Espaço para bagagens"],
    ctaText: "Solicitar transfer",
    internalLink: "/transfer-aeroporto-brasilia",
    featured: false,
  },
  {
    icon: <PartyPopper className="w-5 h-5" />,
    title: "Eventos",
    shortText: "Logística de transporte para eventos corporativos, shows e grupos.",
    description:
      "Organização de ida, retorno e múltiplos deslocamentos para convidados, equipes, staff e participantes.",
    highlights: ["Eventos corporativos", "Shows e produções", "Ida e volta planejadas"],
    ctaText: "Orçar transporte para evento",
    internalLink: "/van-para-eventos-brasilia",
    featured: false,
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Embaixadas e Autoridades",
    shortText: "Atendimento discreto para operações sensíveis.",
    description:
      "Transporte executivo com foco em discrição, pontualidade e apresentação profissional.",
    highlights: ["Discrição e sigilo", "Pontualidade garantida", "Motorista preparado"],
    ctaText: "Falar com a equipe",
    internalLink: "/transporte-executivo-brasilia",
    featured: false,
  },
  {
    icon: <Bus className="w-5 h-5" />,
    title: "Ônibus e Micro-ônibus",
    shortText: "Soluções sob consulta para grupos maiores.",
    description:
      "Opções para operações com maior volume de passageiros, conforme disponibilidade e necessidade.",
    highlights: ["Grupos maiores", "Eventos e excursões", "Solução sob consulta"],
    ctaText: "Solicitar proposta",
    internalLink: "/contato",
    featured: false,
  },
];

const FLEET = [
  {
    src: "/images/content/van.png",
    label: "Van Executiva em Brasília",
    capacity: "15 a 20 passageiros",
    model: "Mercedes-Benz Sprinter",
    desc: "Van executiva com motorista para grupos, transfer aeroporto, eventos corporativos e operações em Brasília.",
    href: "/aluguel-de-van-brasilia",
  },
  {
    src: "/images/content/mini van.png",
    label: "Mini Van Executiva",
    capacity: "7 a 8 passageiros",
    model: "Mercedes-Benz Vito ou similar",
    desc: "Mini van executiva ideal para pequenos grupos, recepção de convidados e deslocamentos corporativos em Brasília.",
    href: "/contato",
  },
  {
    src: "/images/content/seda executivo.png",
    label: "Sedan Executivo",
    capacity: "3 a 4 passageiros",
    model: "Toyota Corolla ou similar",
    desc: "Sedan executivo para reuniões, recepções de clientes, agendas corporativas e deslocamentos individuais em Brasília.",
    href: "/transporte-executivo-brasilia",
  },
  {
    src: "/images/content/commander.png",
    label: "SUV Executiva",
    capacity: "4 a 6 passageiros",
    model: "Jeep Commander ou similar",
    desc: "SUV executiva com espaço, conforto e discrição para executivos, convidados especiais e embaixadas em Brasília.",
    href: "/transporte-executivo-brasilia",
  },
  {
    src: "/images/content/micro onibus.png",
    label: "Micro-ônibus Executivo",
    capacity: "20 a 30 passageiros",
    model: "Capacidade varia conforme configuração",
    desc: "Micro-ônibus executivo para grupos médios, eventos corporativos, excursões e operações planejadas em Brasília.",
    href: "/van-para-eventos-brasilia",
  },
  {
    src: "/images/content/onibus.png",
    label: "Ônibus Executivo",
    capacity: "42 a 56 passageiros",
    model: "Ônibus padrão ou Double Decker",
    desc: "Ônibus executivo para grandes grupos, shows, congressos e operações de alto volume de passageiros em Brasília.",
    href: "/van-para-eventos-brasilia",
  },
];

const TESTIMONIALS = [
  {
    text: "Precisávamos transportar convidados com pontualidade e organização. A operação foi tranquila do início ao fim.",
    name: "Gestor de Eventos",
    company: "Empresa de Eventos Corporativos",
  },
  {
    text: "Atendimento profissional, veículo confortável e motorista preparado. Foi exatamente o padrão que nossa empresa precisava.",
    name: "Empresa Corporativa",
    company: "Setor de Tecnologia",
  },
  {
    text: "A ST Executive nos ajudou a organizar o transporte do grupo sem atrasos e sem imprevistos.",
    name: "Produtora de Eventos",
    company: "Produção de Shows e Concertos",
  },
];

const AUDIENCE = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Empresas",
    text: "Transporte para equipes, clientes e agendas corporativas com conforto e discrição.",
    bullets: ["Reuniões e visitas", "Transporte de funcionários", "Contratos corporativos"],
  },
  {
    icon: <BriefcaseBusiness className="w-5 h-5" />,
    title: "Eventos corporativos",
    text: "Soluções para congressos, feiras, convenções e eventos empresariais de todos os portes.",
    bullets: ["Congressos e feiras", "Convidados e palestrantes", "Logística de transporte"],
  },
  {
    icon: <Mic2 className="w-5 h-5" />,
    title: "Shows e produções",
    text: "Transporte para artistas, equipes, staff e convidados com total segurança e sigilo.",
    bullets: ["Artistas e bandas", "Staff e produção", "Infraestrutura completa"],
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Embaixadas",
    text: "Atendimento discreto e profissional para autoridades e representantes internacionais.",
    bullets: ["Autoridades e diplomatas", "Segurança e privacidade", "Motoristas especializados"],
  },
  {
    icon: <Plane className="w-5 h-5" />,
    title: "Aeroporto",
    text: "Transfer para embarques e desembarques com pontualidade e acompanhamento de voo.",
    bullets: ["Transfer in/out", "Acompanhamento de voo", "Meet & Greet"],
  },
  {
    icon: <Hotel className="w-5 h-5" />,
    title: "Hotéis e grupos",
    text: "Recepção e deslocamento de hóspedes, turistas e grupos com conforto e agilidade.",
    bullets: ["Hospedagens e turismo", "City tour e passeios", "Grupos e excursões"],
  },
];

const PROCESS_STEPS = [
  { number: "01", title: "Envie sua demanda", text: "Informe data, trajeto e quantidade de passageiros." },
  { number: "02", title: "Receba a proposta", text: "A equipe indica o veículo ideal." },
  { number: "03", title: "Confirme o serviço", text: "A operação é organizada com antecedência." },
  { number: "04", title: "Transporte realizado", text: "Motorista e veículo no horário combinado." },
];

const FAQ_ITEMS = [
  {
    question: "A ST Executive oferece van executiva em Brasília?",
    answer: "Sim. A empresa oferece vans executivas com motorista para empresas, eventos, grupos e transfer aeroporto.",
  },
  {
    question: "O serviço inclui motorista?",
    answer: "Sim. Todos os serviços são realizados com motorista profissional.",
  },
  {
    question: "Atende eventos corporativos?",
    answer: "Sim. A ST Executive atende eventos corporativos, shows, congressos, produções e grupos.",
  },
  {
    question: "Faz transfer para o Aeroporto de Brasília?",
    answer: "Sim. O serviço pode ser agendado para embarques e desembarques.",
  },
  {
    question: "Atende embaixadas e convidados especiais?",
    answer: "Sim. A empresa realiza atendimentos discretos e personalizados.",
  },
  {
    question: "Como solicitar orçamento?",
    answer: "Pelo WhatsApp, informando data, trajeto, horário e quantidade de passageiros.",
  },
];

const CLIENT_LOGOS = [
  { src: "/images/cliente/Samsung_Orig_Wordmark_BLACK_RGB.png", alt: "Samsung" },
  { src: "/images/cliente/katty peery.png", alt: "Katy Perry" },
  { src: "/images/cliente/guns and rose.png", alt: "Guns N' Roses" },
  { src: "/images/cliente/gov rj.png", alt: "Governo do Estado do Rio de Janeiro" },
  { src: "/images/cliente/ws-logo.png", alt: "Wesley Safadão" },
  { src: "/images/cliente/emb argentina.png", alt: "Embajada Argentina en Brasil" },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* ══════════════════════════════════
            1. HERO
        ══════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-navy-950">
          <div className="absolute inset-0 z-0">
            {/* Vídeo de fundo — poster = imagem mobile como fallback */}
            <video
              className="w-full h-full object-cover object-center"
              poster="/images/content/hero site mobile.png"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/images/content/veide hero.mp4" type="video/mp4" />
              {/* Fallback estático se o browser não suportar vídeo */}
              <img
                src="/images/content/hero site.png"
                alt="ST Executive — Transporte executivo em Brasília"
                className="w-full h-full object-cover object-center"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/88 via-navy-950/65 to-navy-950/80" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col container-st">
            <div className="h-20 lg:h-24 shrink-0" />
            <div className="flex-1 flex flex-col justify-center py-12 lg:py-16">
              <div className="max-w-2xl lg:max-w-3xl">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 backdrop-blur-sm mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                    ST Executive
                  </span>
                </div>

                {/* H1 */}
                <h1 className="text-[36px] sm:text-[50px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight text-surface-white">
                  Transporte Executivo<br />
                  Premium em{" "}
                  <span className="italic text-gold-400">Brasília</span>
                </h1>

                {/* Subheadline */}
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-lg">
                  Atendimento para empresas, eventos, aeroportos, hotéis, embaixadas e turismo executivo.
                </p>

                <div className="gold-line mt-5" />

                {/* Apoio */}
                <p className="mt-4 text-sm text-white/55 max-w-md">
                  Vans executivas, carros premium e motoristas profissionais com atendimento 24h, pontualidade, conforto e segurança.
                </p>

                {/* CTAs */}
                {/* Mobile: lado a lado, texto curto */}
                <div className="mt-14 flex flex-row sm:hidden gap-3">
                  <Button variant="secondary" size="lg" href="#servicos" className="flex-1 justify-center">
                    Serviços
                  </Button>
                  <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon className="flex-1 justify-center">
                    Orçamento
                  </Button>
                </div>
                {/* Desktop: coluna, texto completo */}
                <div className="hidden sm:flex flex-row gap-3 mt-14">
                  <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                    Solicitar orçamento
                  </Button>
                  <Button variant="secondary" size="lg" href="#servicos" icon={<ArrowRight className="w-4 h-4" />}>
                    Conhecer serviços
                  </Button>
                </div>

                <p className="mt-3 text-xs text-white/35">
                  Informe data, horário, trajeto e quantidade de passageiros.
                </p>
              </div>
            </div>
          </div>

          {/* ── Barra de features (glass) ── */}
          <div className="relative z-10 w-full">
            <div className="bg-white/5 backdrop-blur-md border-t border-white/10">
              <div className="container-st py-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-white/10">
                  {[
                    { icon: <Clock className="w-5 h-5" />, title: "Atendimento 24h", sub: "Todos os dias da semana" },
                    { icon: <ShieldCheck className="w-5 h-5" />, title: "Segurança e Pontualidade", sub: "Compromisso com seu tempo" },
                    { icon: <Users className="w-5 h-5" />, title: "Motoristas Profissionais", sub: "Experientes e certificados" },
                    { icon: <Car className="w-5 h-5" />, title: "Frota Premium", sub: "Vans e carros executivos" },
                    { icon: <MapPin className="w-5 h-5" />, title: "Atuação em Brasília", sub: "E região do DF" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                      <div className="text-gold-400 shrink-0">{item.icon}</div>
                      <div>
                        <p className="text-sm font-semibold text-surface-white leading-tight">{item.title}</p>
                        <p className="text-xs text-white/50 mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            2. LOGOS DE CLIENTES
        ══════════════════════════════════ */}
        <section className="bg-navy-900 border-t border-white/8 py-8">
          <div className="container-st">
            <p className="text-center text-xs font-medium tracking-widest uppercase text-white/30 mb-6">
              Quem já confiou na ST Executive
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {CLIENT_LOGOS.map((logo, i) => (
                <div key={i} className="h-6 lg:h-7 flex items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain opacity-40 brightness-200 grayscale hover:opacity-65 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            3. SERVIÇOS — logo após o Hero
        ══════════════════════════════════ */}
        <section id="servicos" className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow="Serviços"
              title="Soluções para cada operação"
              subtitle="Escolha o serviço ideal para sua empresa, evento ou deslocamento."
            />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {SERVICES.map((svc, i) => (
                <ServiceCard key={i} {...svc} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            4. VANS EXECUTIVAS + VÍDEO
        ══════════════════════════════════ */}
        <section className="section-padding">
          <div className="container-st">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Texto */}
              <div>
                <Badge variant="outline">Somos especialistas</Badge>
                <h2 className="mt-4 text-[26px] sm:text-[32px] lg:text-[38px] font-bold leading-tight tracking-tight text-navy-950">
                  Vans executivas para grupos em Brasília
                </h2>
                <div className="gold-line mt-4" />
                <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                  A solução ideal para empresas, eventos e transfer aeroporto que precisam
                  transportar pessoas com conforto, segurança e pontualidade.
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-2.5">
                  {["Grupos e equipes", "Eventos e congressos", "Transfer aeroporto", "Motorista profissional", "Veículos climatizados", "Roteiro planejado"].map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-navy-950">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                    Solicitar orçamento de van
                  </Button>
                </div>
              </div>

              {/* Vídeo */}
              <div className="relative rounded-2xl overflow-hidden shadow-premium bg-navy-950" style={{ aspectRatio: "4/5" }}>
                <video
                  className="w-full h-full object-cover"
                  poster="/images/content/van.png"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                >
                  <source src="/images/content/st excutive video.mp4" type="video/mp4" />
                  <img
                    src="/images/content/van.png"
                    alt="Van executiva ST Executive"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            5. FROTA — logo abaixo das vans
        ══════════════════════════════════ */}
        <section id="frota" className="section-padding bg-navy-950">
          <div className="container-st">
            <div className="max-w-xl mx-auto text-center mb-10">
              <Badge variant="gold">Frota executiva</Badge>
              <h2 className="mt-4 text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight text-surface-white">
                Frota executiva para diferentes demandas
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/55">
                Veículos adequados para{" "}
                <span className="text-gold-400 font-semibold">grupos</span>,{" "}
                <span className="text-gold-400 font-semibold">executivos</span>,{" "}
                <span className="text-gold-400 font-semibold">eventos</span> e{" "}
                <span className="text-gold-400 font-semibold">operações corporativas</span>.
              </p>
            </div>

            {/* ── Diferenciais da frota ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {[
                { icon: <Users className="w-5 h-5" />, title: "Veículos revisados", sub: "e higienizados" },
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Seguro total", sub: "para passageiros" },
                { icon: <BriefcaseBusiness className="w-5 h-5" />, title: "Conforto e espaço", sub: "para cada necessidade" },
                { icon: <Clock className="w-5 h-5" />, title: "Pontualidade", sub: "em todos os trajetos" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-navy-800/60 border border-white/8 rounded-2xl px-4 py-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-surface-white leading-tight">{item.title}</p>
                    <p className="text-xs text-white/45 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FLEET.map((v, i) => (
                <div
                  key={i}
                  className="group rounded-2xl overflow-hidden bg-navy-800 border border-white/8 hover:border-gold-400/30 transition-all duration-300 flex flex-col"
                >
                  {/* Imagem */}
                  <div className="bg-navy-900 overflow-hidden shrink-0">
                    <img
                      src={v.src}
                      alt={`${v.label} — transporte executivo em Brasília`}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-4 lg:p-5 flex flex-col flex-1 gap-3">
                    <h3 className="text-base font-bold text-surface-white leading-snug">{v.label}</h3>

                    {/* Capacidade + Modelo */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Users className="w-4 h-4 text-gold-400 shrink-0" />
                        <span>{v.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Car className="w-4 h-4 text-gold-400 shrink-0" />
                        <span>{v.model}</span>
                      </div>
                    </div>

                    {/* Descrição SEO */}
                    <p className="text-sm text-white/45 leading-relaxed flex-1">{v.desc}</p>

                    {/* Botão Saiba mais */}
                    <div className="flex justify-end mt-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        href={v.href}
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Saiba mais
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="secondary" size="md" href={WHATSAPP_URL} showWhatsAppIcon>
                Consultar frota disponível
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            6. DEPOIMENTOS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">

            {/* Cabeçalho */}
            <SectionHeader
              eyebrow="Depoimentos"
              title="Confiança em operações reais"
              subtitle="A ST Executive atende empresas, eventos, artistas, instituições e convidados especiais em Brasília."
            />

            {/* ── Stats ── */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200/70 border border-gray-200/70 rounded-2xl overflow-hidden bg-white shadow-soft">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Mais de 10 anos", sub: "de experiência" },
                { icon: <Users className="w-5 h-5" />, title: "Centenas de clientes", sub: "atendidos" },
                { icon: <Star className="w-5 h-5" />, title: "Avaliação 5 estrelas", sub: "no Google" },
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Compromisso com", sub: "segurança e excelência" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-4">
                  <div className="text-gold-500 shrink-0">{s.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-navy-950 leading-tight">{s.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Cards de depoimentos ── */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200/60 p-6 shadow-soft flex flex-col gap-4">
                  {/* Aspas */}
                  <Quote className="w-7 h-7 text-gold-400 shrink-0" />

                  {/* Texto */}
                  <p className="text-sm leading-relaxed text-gray-700 flex-1">{t.text}</p>

                  {/* Divisor dourado */}
                  <div className="w-8 h-0.5 bg-gold-400 rounded-full" />

                  {/* Autor */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy-950 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-950 leading-tight">{t.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{t.company}</p>
                    </div>
                  </div>

                  {/* Estrelas */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Barra de features inferior ── */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200/70 border border-gray-200/70 rounded-2xl overflow-hidden bg-white shadow-soft">
              {[
                { icon: <Clock className="w-5 h-5" />, title: "Pontualidade Garantida", sub: "Compromisso com horários" },
                { icon: <Car className="w-5 h-5" />, title: "Veículos Confortáveis", sub: "Frota nova e higienizada" },
                { icon: <Users className="w-5 h-5" />, title: "Motoristas Experientes", sub: "Treinados e uniformizados" },
                { icon: <Headphones className="w-5 h-5" />, title: "Atendimento Personalizado", sub: "Soluções sob medida" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-4">
                  <div className="text-gold-500 shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-navy-950 leading-tight">{f.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════
            7. PARA QUEM ATENDEMOS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow="Para quem atendemos"
              title="Atendimento para empresas, eventos e convidados especiais"
              subtitle={
                <>
                  Soluções de transporte executivo com pontualidade, conforto e segurança
                  para atender diferentes necessidades em{" "}
                  <strong className="text-navy-950 font-bold">Brasília e região.</strong>
                </>
              }
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AUDIENCE.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200/60 shadow-soft p-6 flex flex-col gap-4 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                >
                  {/* Ícone */}
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 flex items-center justify-center text-gold-400 shrink-0">
                    {item.icon}
                  </div>

                  {/* Título + descrição */}
                  <div>
                    <h3 className="text-base font-bold text-navy-950">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{item.text}</p>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            8. COMO FUNCIONA
        ══════════════════════════════════ */}
        <section id="como-funciona" className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow="Processo"
              title="Como contratar"
              subtitle="Quatro passos. Rápido e sem complicações."
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="relative">
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-gray-200 -translate-x-4 z-0" />
                  )}
                  <div className="relative z-10">
                    <span className="text-[40px] font-extrabold text-navy-950/8 leading-none select-none">
                      {step.number}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-navy-950">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* CTA bar */}
            <div className="mt-10 bg-navy-950 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <BriefcaseBusiness className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-base font-bold text-surface-white leading-tight">
                    Precisa de um transporte executivo para sua empresa ou evento?
                  </p>
                  <p className="text-sm text-white/50 mt-0.5">
                    Fale com nossa equipe e receba uma proposta personalizada.
                  </p>
                </div>
              </div>
              <Button variant="primary" size="md" href={WHATSAPP_URL} showWhatsAppIcon className="shrink-0 sm:ml-4">
                Solicitar orçamento
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            9. SOBRE
        ══════════════════════════════════ */}
        <section id="sobre" className="section-padding bg-surface-off">
          <div className="container-st">

            {/* ── Grid foto + texto ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Foto com badge "Desde 2011" */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="/images/content/stquemsomos.jpeg"
                    alt="ST Executive — Transporte executivo em Brasília desde 2011"
                    className="w-full h-72 sm:h-96 object-cover object-center"
                  />
                </div>
                {/* Badge sobreposto */}
                <div className="absolute top-4 right-4 bg-navy-950/90 backdrop-blur-sm rounded-2xl shadow-premium p-4 border border-white/10 text-center min-w-[90px]">
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Desde</p>
                  <p className="text-4xl font-extrabold leading-none text-gold-400 mt-0.5">2011</p>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mt-1">Em Brasília</p>
                </div>
              </div>

              {/* Texto */}
              <div>
                <Badge variant="gold">Sobre a empresa</Badge>
                <h2 className="mt-4 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-navy-950">
                  Desde 2011 em Brasília
                </h2>
                <div className="gold-line mt-4" />
                <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
                  A ST Executive oferece transporte executivo em Brasília para empresas, aeroportos, eventos, casamentos, viagens e grupos, com atendimento personalizado e foco em excelência.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                  Contamos com frota moderna, incluindo carros executivos, Mercedes Vito, vans, micro-ônibus e ônibus, além de motoristas experientes para garantir conforto, segurança, discrição e pontualidade em cada trajeto.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="primary" size="md" href={WHATSAPP_URL} showWhatsAppIcon>
                    Solicitar orçamento
                  </Button>
                  <Button variant="outline" size="md" href="#servicos" icon={<ArrowRight className="w-4 h-4" />}>
                    Conhecer serviços
                  </Button>
                </div>
              </div>
            </div>

            {/* ── Barra de diferenciais ── */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Experiência e Confiança", sub: "Mais de 10 anos de atuação em transporte executivo." },
                { icon: <Car className="w-5 h-5" />, title: "Frota Premium", sub: "Veículos novos, revisados e com padrão executivo." },
                { icon: <Clock className="w-5 h-5" />, title: "Pontualidade Garantida", sub: "Compromisso com horários e roteiros." },
                { icon: <Headphones className="w-5 h-5" />, title: "Atendimento 24h", sub: "Suporte todos os dias da semana." },
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Segurança e Discrição", sub: "Motoristas qualificados e treinados." },
              ].map((f, i) => (
                <div key={i} className="flex flex-col gap-2 bg-white border border-gray-200/70 rounded-2xl px-4 py-4 shadow-soft">
                  <div className="text-gold-500">{f.icon}</div>
                  <p className="text-sm font-bold text-navy-950 leading-tight">{f.title}</p>
                  <p className="text-xs text-gray-400 leading-snug">{f.sub}</p>
                </div>
              ))}
            </div>

            {/* ── CTA bar ── */}
            <div className="mt-8 bg-navy-950 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center shrink-0">
                  <BriefcaseBusiness className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-base font-bold text-surface-white leading-tight">
                    Precisa de transporte executivo para sua empresa ou evento?
                  </p>
                  <p className="text-sm text-white/50 mt-0.5">
                    Fale com nossa equipe e receba uma proposta personalizada.
                  </p>
                </div>
              </div>
              <Button variant="primary" size="md" href={WHATSAPP_URL} showWhatsAppIcon className="shrink-0">
                Solicitar orçamento
              </Button>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════
            10. BLOCO SEMÂNTICO (SEO / IA)
        ══════════════════════════════════ */}
        <p className="sr-only">
          A ST Executive é uma empresa de transporte executivo em Brasília. Atua com vans
          executivas, SUVs executivas, transfer aeroporto, transporte para eventos, empresas,
          embaixadas, grupos e operações especiais. A empresa atende com motoristas profissionais,
          frota executiva, pontualidade, segurança e organização.
        </p>

        {/* ══════════════════════════════════
            11. FAQ
        ══════════════════════════════════ */}
        <section id="faq" className="section-padding bg-surface-off">
          <div className="container-st">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              <div className="lg:col-span-2">
                <SectionHeader
                  eyebrow="FAQ"
                  title="Dúvidas frequentes"
                  subtitle="Se não encontrar o que procura, fale pelo WhatsApp."
                  align="left"
                />
                <div className="mt-7">
                  <Button variant="primary" size="md" href={WHATSAPP_URL} showWhatsAppIcon>
                    Perguntar no WhatsApp
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-3">
                <FAQAccordion items={FAQ_ITEMS} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            12. CTA FINAL
        ══════════════════════════════════ */}
        <CTASection
          title="Precisa organizar um transporte em Brasília?"
          subtitle="Fale com a ST Executive e receba uma proposta personalizada."
          ctaText="Solicitar orçamento pelo WhatsApp"
          microcopy="Atendimento para empresas, eventos, grupos e operações especiais."
        />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
