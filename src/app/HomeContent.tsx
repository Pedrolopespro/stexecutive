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
    internalLink: "/aluguel-de-van-brasilia/",
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
    internalLink: "/transporte-executivo-brasilia/",
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
    internalLink: "/transfer-aeroporto-brasilia/",
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
    internalLink: "/van-para-eventos-brasilia/",
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
    internalLink: "/transporte-executivo-brasilia/",
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
    internalLink: "/contato/",
    featured: false,
  },
];

const FLEET = [
  {
    src: "/images/content/van.webp",
    imgPos: "object-center",
    label: "Van Executiva em Brasília",
    capacity: "15 a 20 passageiros",
    model: "Mercedes-Benz Sprinter",
    desc: "Van executiva com motorista para grupos, transfer aeroporto, eventos corporativos e operações em Brasília.",
    href: "/aluguel-de-van-brasilia/",
  },
  {
    src: "/images/content/mini van.webp",
    imgPos: "object-center",
    label: "Mini Van Executiva",
    capacity: "7 a 8 passageiros",
    model: "Mercedes-Benz Vito ou similar",
    desc: "Mini van executiva ideal para pequenos grupos, recepção de convidados e deslocamentos corporativos em Brasília.",
    href: "/contato/",
  },
  {
    src: "/images/content/seda executivo.webp",
    imgPos: "object-center",
    label: "Sedan Executivo",
    capacity: "3 a 4 passageiros",
    model: "Toyota Corolla ou similar",
    desc: "Sedan executivo para reuniões, recepções de clientes, agendas corporativas e deslocamentos individuais em Brasília.",
    href: "/transporte-executivo-brasilia/",
  },
  {
    src: "/images/content/commander.webp",
    imgPos: "object-center",
    label: "SUV Executiva",
    capacity: "4 a 6 passageiros",
    model: "Jeep Commander ou similar",
    desc: "SUV executiva com espaço, conforto e discrição para executivos, convidados especiais e embaixadas em Brasília.",
    href: "/transporte-executivo-brasilia/",
  },
  {
    src: "/images/content/micro onibus.webp",
    imgPos: "object-center",
    label: "Micro-ônibus Executivo",
    capacity: "20 a 30 passageiros",
    model: "Capacidade varia conforme configuração",
    desc: "Micro-ônibus executivo para grupos médios, eventos corporativos, excursões e operações planejadas em Brasília.",
    href: "/van-para-eventos-brasilia/",
  },
  {
    src: "/images/content/onibus.webp",
    imgPos: "[object-position:50%_60%]",
    label: "Ônibus Executivo",
    capacity: "42 a 56 passageiros",
    model: "Ônibus padrão ou Double Decker",
    desc: "Ônibus executivo para grandes grupos, shows, congressos e operações de alto volume de passageiros em Brasília.",
    href: "/van-para-eventos-brasilia/",
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
  { src: "/images/cliente/Samsung_Orig_Wordmark_BLACK_RGB.webp", alt: "Samsung" },
  { src: "/images/cliente/katty peery.webp", alt: "Katy Perry" },
  { src: "/images/cliente/guns and rose.webp", alt: "Guns N' Roses" },
  { src: "/images/cliente/gov rj.webp", alt: "Governo do Estado do Rio de Janeiro" },
  { src: "/images/cliente/ws-logo.webp", alt: "Wesley Safadão" },
  { src: "/images/cliente/emb argentina.webp", alt: "Embajada Argentina en Brasil" },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function HomeContent() {
  return (
    <>
      <Header />
      <main>

        {/* ══════════════════════════════════
            1. HERO
        ══════════════════════════════════ */}
        <section className="relative min-h-[62vh] sm:min-h-screen flex flex-col overflow-hidden bg-navy-950">
          <div className="absolute inset-0 z-0">
            {/* Vídeo de fundo — poster = imagem mobile como fallback */}
            <video
              className="w-full h-full object-cover object-bottom sm:object-center"
              poster="/images/content/hero site mobile.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source src="/images/content/veide hero.mp4" type="video/mp4" />
              {/* Fallback estático se o browser não suportar vídeo */}
              <img
                src="/images/content/hero site.webp"
                alt="ST Executive — Transporte executivo em Brasília"
                className="w-full h-full object-cover object-center"
                fetchPriority="high"
                width={1920}
                height={1080}
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/88 via-navy-950/65 to-navy-950/80" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col container-st">
            <div className="h-20 lg:h-24 shrink-0" />

            {/* Mobile: justify-between → badge+título no topo, botões na base */}
            {/* Desktop: justify-center → bloco único centrado */}
            <div className="flex-1 flex flex-col justify-between sm:justify-center pb-7 sm:py-12 lg:py-16">

              {/* ── Grupo TOPO: badge + título ── */}
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

                {/* Subheadline — oculto no mobile */}
                <p className="hidden sm:block mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-lg">
                  Atendimento para empresas, eventos, aeroportos, hotéis, embaixadas e turismo executivo.
                </p>

                <div className="hidden sm:block gold-line mt-5" />

                {/* Apoio — oculto no mobile */}
                <p className="hidden sm:block mt-4 text-sm text-white/55 max-w-md">
                  Vans executivas, carros premium e motoristas profissionais com atendimento 24h, pontualidade, conforto e segurança.
                </p>

                {/* Desktop CTAs — ocultos no mobile */}
                <div className="hidden sm:flex flex-row gap-3 mt-14">
                  <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
                    Solicitar orçamento
                  </Button>
                  <Button variant="secondary" size="lg" href="#servicos" icon={<ArrowRight className="w-4 h-4" />}>
                    Conhecer serviços
                  </Button>
                </div>

                <p className="hidden sm:block mt-3 text-xs text-white/35">
                  Informe data, horário, trajeto e quantidade de passageiros.
                </p>
              </div>

              {/* ── Grupo BASE: botões mobile ── */}
              <div className="sm:hidden">
                <div className="flex flex-row gap-3">
                  <Button variant="secondary" size="lg" href="#servicos" className="flex-1 justify-center">
                    Serviços
                  </Button>
                  <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon className="flex-1 justify-center">
                    Orçamento
                  </Button>
                </div>
                <p className="mt-3 text-xs text-white/35">
                  Informe data, horário, trajeto e quantidade de passageiros.
                </p>
              </div>

            </div>
          </div>

        </section>

        {/* ── Barra de features ── */}
        <div className="relative z-20 -mt-[6vh] sm:mt-0">
          <div className="bg-navy-950 border-t border-white/10">
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
                    loading="lazy"
                    width={160}
                    height={28}
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
                  poster="/images/content/van.webp"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  preload="none"
                >
                  <source src="/images/content/video st vans.mp4" type="video/mp4" />
                  <img
                    src="/images/content/van.webp"
                    alt="Van executiva ST Executive"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={750}
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
                  <div className="bg-navy-900 overflow-hidden shrink-0 h-80">
                    <img
                      src={v.src}
                      alt={`${v.label} — transporte executivo em Brasília`}
                      className={`w-full h-full object-cover ${v.imgPos} group-hover:scale-105 transition-transform duration-500`}
                      loading="lazy"
                      width={600}
                      height={320}
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
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Mais de 15 anos", sub: "de experiência" },
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

            {/* ── CTA — Avaliação Google ── */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gray-200/70 rounded-2xl px-6 py-5 shadow-soft">
              <div className="flex items-center gap-4">
                {/* Estrelas Google */}
                <div className="flex items-center gap-1 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-950 leading-tight">Sua experiência importa</p>
                  <p className="text-xs text-gray-400 mt-0.5">Avalie a ST Executive no Google e ajude outros clientes a nos encontrar.</p>
                </div>
              </div>
              <a
                href="https://g.page/r/CdcJ-Z6LD7AHEBI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200"
              >
                {/* Google "G" icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Deixar avaliação
              </a>
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
                    src="/images/content/stquemsomos.webp"
                    alt="ST Executive — Transporte executivo em Brasília desde 2011"
                    className="w-full h-72 sm:h-96 object-cover object-center"
                    loading="lazy"
                    width={800}
                    height={384}
                  />
                </div>
                {/* Badge sobreposto */}
                <div className="absolute top-4 right-4 bg-navy-950/90 backdrop-blur-sm rounded-2xl shadow-premium p-4 border border-white/10 text-center min-w-[90px]">
                  <p className="text-4xl font-extrabold leading-none text-gold-400">+15</p>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mt-1">Anos no</p>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">Mercado</p>
                </div>
              </div>

              {/* Texto */}
              <div>
                <Badge variant="gold">Sobre a empresa</Badge>
                <h2 className="mt-4 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-navy-950">
                  +15 Anos no Mercado
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
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Experiência e Confiança", sub: "Mais de 15 anos de atuação em transporte executivo." },
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
