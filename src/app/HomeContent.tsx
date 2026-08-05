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
import SectionHeader from "@/components/ui/SectionHeader";

import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import ServiceCard from "@/components/sections/ServiceCard";

import { buildServicePages, buildWhatsAppUrl, type Locale } from "@/lib/constants";
import { navPt, footerPt, commonPt, homePt, type NavDict, type FooterDict, type CommonDict, type HomeContentDict } from "@/lib/i18n";

// Ícones das secções — independentes de idioma, mantidos aqui em vez do dicionário
const SERVICE_ICONS = [
  <Car key="0" className="w-5 h-5" />,
  <BriefcaseBusiness key="1" className="w-5 h-5" />,
  <Plane key="2" className="w-5 h-5" />,
  <PartyPopper key="3" className="w-5 h-5" />,
  <ShieldCheck key="4" className="w-5 h-5" />,
  <Bus key="5" className="w-5 h-5" />,
];

const AUDIENCE_ICONS = [
  <Building2 key="0" className="w-5 h-5" />,
  <BriefcaseBusiness key="1" className="w-5 h-5" />,
  <Mic2 key="2" className="w-5 h-5" />,
  <ShieldCheck key="3" className="w-5 h-5" />,
  <Plane key="4" className="w-5 h-5" />,
  <Hotel key="5" className="w-5 h-5" />,
];

const FEATURES_ICONS = [
  <Clock key="0" className="w-5 h-5" />,
  <ShieldCheck key="1" className="w-5 h-5" />,
  <Users key="2" className="w-5 h-5" />,
  <Car key="3" className="w-5 h-5" />,
  <MapPin key="4" className="w-5 h-5" />,
];

const TESTIMONIAL_STATS_ICONS = [
  <ShieldCheck key="0" className="w-5 h-5" />,
  <Users key="1" className="w-5 h-5" />,
  <Star key="2" className="w-5 h-5" />,
  <ShieldCheck key="3" className="w-5 h-5" />,
];

const FLEET_DIFFERENTIALS_ICONS = [
  <Users key="0" className="w-5 h-5" />,
  <ShieldCheck key="1" className="w-5 h-5" />,
  <BriefcaseBusiness key="2" className="w-5 h-5" />,
  <Clock key="3" className="w-5 h-5" />,
];

const ABOUT_DIFFERENTIALS_ICONS = [
  <ShieldCheck key="0" className="w-5 h-5" />,
  <Car key="1" className="w-5 h-5" />,
  <Clock key="2" className="w-5 h-5" />,
  <Headphones key="3" className="w-5 h-5" />,
  <ShieldCheck key="4" className="w-5 h-5" />,
];

const CLIENT_LOGOS = [
  { src: "/images/cliente/Samsung_Orig_Wordmark_BLACK_RGB.webp", alt: "Samsung" },
  { src: "/images/cliente/katty peery.webp", alt: "Katy Perry" },
  { src: "/images/cliente/guns and rose.webp", alt: "Guns N' Roses" },
  { src: "/images/cliente/gov rj.webp", alt: "Governo do Estado do Rio de Janeiro" },
  { src: "/images/cliente/ws-logo.webp", alt: "Wesley Safadão" },
  { src: "/images/cliente/emb argentina.webp", alt: "Embajada Argentina en Brasil" },
];

interface HomeContentProps {
  locale?: Locale;
  content?: HomeContentDict;
  navDict?: NavDict;
  footerDict?: FooterDict;
  commonDict?: CommonDict;
}

export default function HomeContent({
  locale = "pt",
  content = homePt,
  navDict = navPt,
  footerDict = footerPt,
  commonDict = commonPt,
}: HomeContentProps) {
  const c = content;
  const servicePages = buildServicePages(locale);
  const whatsappUrl = buildWhatsAppUrl(commonDict.whatsappMessage);
  const servicosHref = locale === "pt" ? "#servicos" : `/${locale}/#servicos`;
  const contatoHref = locale === "pt" ? "/contato/" : `/${locale}/contato/`;

  return (
    <>
      <Header locale={locale} dict={navDict} commonDict={commonDict} />
      <main>

        {/* ══════════════════════════════════
            1. HERO
        ══════════════════════════════════ */}
        <section className="relative min-h-[62vh] sm:min-h-screen flex flex-col overflow-hidden bg-navy-950">
          <div className="absolute inset-0 z-0">
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

            <div className="flex-1 flex flex-col justify-between sm:justify-center pb-7 sm:py-12 lg:py-16">

              <div className="max-w-2xl lg:max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 backdrop-blur-sm mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                    {c.hero.eyebrow}
                  </span>
                </div>

                <h1 className="text-[36px] sm:text-[50px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight text-surface-white">
                  {c.hero.titleLine1}<br />
                  {c.hero.titleLine2}{" "}
                  <span className="italic text-gold-400">{c.hero.titleEmphasis}</span>
                </h1>

                <p className="hidden sm:block mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-lg">
                  {c.hero.subtitle}
                </p>

                <div className="hidden sm:block gold-line mt-5" />

                <p className="hidden sm:block mt-4 text-sm text-white/55 max-w-md">
                  {c.hero.supportText}
                </p>

                <div className="hidden sm:flex flex-row gap-3 mt-14">
                  <Button variant="primary" size="lg" href={whatsappUrl} showWhatsAppIcon>
                    {c.hero.ctaPrimary}
                  </Button>
                  <Button variant="secondary" size="lg" href={servicosHref} icon={<ArrowRight className="w-4 h-4" />}>
                    {c.hero.ctaSecondary}
                  </Button>
                </div>

                <p className="hidden sm:block mt-3 text-xs text-white/35">
                  {c.hero.microcopy}
                </p>
              </div>

              <div className="sm:hidden">
                <div className="flex flex-row gap-3">
                  <Button variant="secondary" size="lg" href={servicosHref} className="flex-1 justify-center">
                    {c.hero.ctaSecondaryMobile}
                  </Button>
                  <Button variant="primary" size="lg" href={whatsappUrl} showWhatsAppIcon className="flex-1 justify-center">
                    {c.hero.ctaPrimaryMobile}
                  </Button>
                </div>
                <p className="mt-3 text-xs text-white/35">
                  {c.hero.microcopy}
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
                {c.featuresBar.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                    <div className="text-gold-400 shrink-0">{FEATURES_ICONS[i]}</div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-surface-white leading-tight break-words hyphens-auto">{item.title}</p>
                      <p className="text-xs text-white/50 mt-0.5 break-words hyphens-auto">{item.sub}</p>
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
              {c.clientsBar.label}
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
            3. SERVIÇOS
        ══════════════════════════════════ */}
        <section id="servicos" className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow={c.services.eyebrow}
              title={c.services.heading}
              subtitle={c.services.subtitle}
            />
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {c.services.items.map((svc, i) => (
                <ServiceCard
                  key={i}
                  icon={SERVICE_ICONS[i]}
                  title={svc.title}
                  shortText={svc.shortText}
                  description={svc.description}
                  highlights={svc.highlights}
                  ctaText={svc.ctaText}
                  internalLink={svc.contatoFallback ? contatoHref : servicePages[svc.serviceKey!]}
                  featured={svc.featured}
                  whatsappUrl={whatsappUrl}
                  moreLabel={c.services.moreLabel}
                />
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
              <div>
                <Badge variant="outline">{c.vansSection.badge}</Badge>
                <h2 className="mt-4 text-[26px] sm:text-[32px] lg:text-[38px] font-bold leading-tight tracking-tight text-navy-950">
                  {c.vansSection.heading}
                </h2>
                <div className="gold-line mt-4" />
                <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                  {c.vansSection.paragraph}
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-2.5">
                  {c.vansSection.bullets.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-navy-950">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button variant="primary" size="lg" href={whatsappUrl} showWhatsAppIcon>
                    {c.vansSection.ctaLabel}
                  </Button>
                </div>
              </div>

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
            5. FROTA
        ══════════════════════════════════ */}
        <section id="frota" className="section-padding bg-navy-950">
          <div className="container-st">
            <div className="max-w-xl mx-auto text-center mb-10">
              <Badge variant="gold">{c.fleetSection.badge}</Badge>
              <h2 className="mt-4 text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight text-surface-white">
                {c.fleetSection.heading}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/55">
                {c.fleetSection.subtitleParts.map((part, i) => {
                  const isLast = i === c.fleetSection.subtitleParts.length - 1;
                  const isBeforeLast = i === c.fleetSection.subtitleParts.length - 2;
                  return (
                    <React.Fragment key={i}>
                      {part.plain ? `${part.plain} ` : ""}
                      <span className="text-gold-400 font-semibold">{part.emphasis}</span>
                      {isLast ? "." : isBeforeLast ? " e " : ", "}
                    </React.Fragment>
                  );
                })}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {c.fleetSection.differentials.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-navy-800/60 border border-white/8 rounded-2xl px-4 py-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0">
                    {FLEET_DIFFERENTIALS_ICONS[i]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-surface-white leading-tight break-words hyphens-auto">{item.title}</p>
                    <p className="text-xs text-white/45 mt-0.5 break-words hyphens-auto">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.fleetSection.items.map((v, i) => (
                <div
                  key={i}
                  className="group rounded-2xl overflow-hidden bg-navy-800 border border-white/8 hover:border-gold-400/30 transition-all duration-300 flex flex-col"
                >
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

                  <div className="p-4 lg:p-5 flex flex-col flex-1 gap-3">
                    <h3 className="text-base font-bold text-surface-white leading-snug">{v.label}</h3>

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

                    <p className="text-sm text-white/45 leading-relaxed flex-1">{v.desc}</p>

                    <div className="flex justify-end mt-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        href={servicePages[v.serviceKey]}
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        {c.fleetSection.moreLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="secondary" size="md" href={whatsappUrl} showWhatsAppIcon>
                {c.fleetSection.ctaLabel}
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            6. DEPOIMENTOS
        ══════════════════════════════════ */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">

            <SectionHeader
              eyebrow={c.testimonialsSection.eyebrow}
              title={c.testimonialsSection.heading}
              subtitle={c.testimonialsSection.subtitle}
            />

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200/70 border border-gray-200/70 rounded-2xl overflow-hidden bg-white shadow-soft">
              {c.testimonialsSection.stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-4">
                  <div className="text-gold-500 shrink-0">
                    {TESTIMONIAL_STATS_ICONS[i]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-navy-950 leading-tight break-words hyphens-auto">{s.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5 break-words hyphens-auto">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
              {c.testimonialsSection.items.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200/60 p-6 shadow-soft flex flex-col gap-4">
                  <Quote className="w-7 h-7 text-gold-400 shrink-0" />
                  <p className="text-sm leading-relaxed text-gray-700 flex-1">{t.text}</p>
                  <div className="w-8 h-0.5 bg-gold-400 rounded-full" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy-950 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-navy-950 leading-tight break-words">{t.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5 break-words">{t.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gray-200/70 rounded-2xl px-6 py-5 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-950 leading-tight">{c.testimonialsSection.googleCta.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{c.testimonialsSection.googleCta.subtitle}</p>
                </div>
              </div>
              <a
                href="https://g.page/r/CdcJ-Z6LD7AHEBI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {c.testimonialsSection.googleCta.buttonLabel}
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
              eyebrow={c.audienceSection.eyebrow}
              title={c.audienceSection.heading}
              subtitle={
                <>
                  {c.audienceSection.subtitlePlain}{" "}
                  <strong className="text-navy-950 font-bold">{c.audienceSection.subtitleEmphasis}</strong>
                </>
              }
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.audienceSection.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200/60 shadow-soft p-6 flex flex-col gap-4 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 flex items-center justify-center text-gold-400 shrink-0">
                    {AUDIENCE_ICONS[i]}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-navy-950">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{item.text}</p>
                  </div>

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
              eyebrow={c.processSection.eyebrow}
              title={c.processSection.heading}
              subtitle={c.processSection.subtitle}
            />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {c.processSection.steps.map((step, i) => (
                <div key={i} className="relative">
                  {i < c.processSection.steps.length - 1 && (
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
            <div className="mt-10 bg-navy-950 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <BriefcaseBusiness className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-base font-bold text-surface-white leading-tight">
                    {c.processSection.ctaBar.title}
                  </p>
                  <p className="text-sm text-white/50 mt-0.5">
                    {c.processSection.ctaBar.subtitle}
                  </p>
                </div>
              </div>
              <Button variant="primary" size="md" href={whatsappUrl} showWhatsAppIcon className="shrink-0 sm:ml-4">
                {c.processSection.ctaBar.buttonLabel}
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            9. SOBRE
        ══════════════════════════════════ */}
        <section id="sobre" className="section-padding bg-surface-off">
          <div className="container-st">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

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
                <div className="absolute top-4 right-4 bg-navy-950/90 backdrop-blur-sm rounded-2xl shadow-premium p-4 border border-white/10 text-center min-w-[90px]">
                  <p className="text-4xl font-extrabold leading-none text-gold-400">+15</p>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mt-1">{c.aboutSection.yearsBadgeLine1}</p>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest">{c.aboutSection.yearsBadgeLine2}</p>
                </div>
              </div>

              <div>
                <Badge variant="gold">{c.aboutSection.badge}</Badge>
                <h2 className="mt-4 text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight text-navy-950">
                  {c.aboutSection.heading}
                </h2>
                <div className="gold-line mt-4" />
                {c.aboutSection.paragraphs.map((p, i) => (
                  <p key={i} className={`${i === 0 ? "mt-5" : "mt-3"} text-[15px] leading-relaxed text-gray-600`}>
                    {p}
                  </p>
                ))}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="primary" size="md" href={whatsappUrl} showWhatsAppIcon>
                    {c.aboutSection.ctaPrimary}
                  </Button>
                  <Button variant="outline" size="md" href={servicosHref} icon={<ArrowRight className="w-4 h-4" />}>
                    {c.aboutSection.ctaSecondary}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-3">
              {c.aboutSection.differentials.map((f, i) => (
                <div key={i} className="flex flex-col gap-2 bg-white border border-gray-200/70 rounded-2xl px-4 py-4 shadow-soft">
                  <div className="text-gold-500">{ABOUT_DIFFERENTIALS_ICONS[i]}</div>
                  <p className="text-sm font-bold text-navy-950 leading-tight">{f.title}</p>
                  <p className="text-xs text-gray-400 leading-snug">{f.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-navy-950 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center shrink-0">
                  <BriefcaseBusiness className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-base font-bold text-surface-white leading-tight">
                    {c.aboutSection.ctaBar.title}
                  </p>
                  <p className="text-sm text-white/50 mt-0.5">
                    {c.aboutSection.ctaBar.subtitle}
                  </p>
                </div>
              </div>
              <Button variant="primary" size="md" href={whatsappUrl} showWhatsAppIcon className="shrink-0">
                {c.aboutSection.ctaBar.buttonLabel}
              </Button>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════
            10. BLOCO SEMÂNTICO (SEO / IA)
        ══════════════════════════════════ */}
        <p className="sr-only">
          {c.semanticBlock}
        </p>

        {/* ══════════════════════════════════
            11. FAQ
        ══════════════════════════════════ */}
        <section id="faq" className="section-padding bg-surface-off">
          <div className="container-st">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              <div className="lg:col-span-2">
                <SectionHeader
                  eyebrow={c.faqSection.eyebrow}
                  title={c.faqSection.heading}
                  subtitle={c.faqSection.subtitle}
                  align="left"
                />
                <div className="mt-7">
                  <Button variant="primary" size="md" href={whatsappUrl} showWhatsAppIcon>
                    {c.faqSection.buttonLabel}
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-3">
                <FAQAccordion items={c.faqSection.items} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            12. CTA FINAL
        ══════════════════════════════════ */}
        <CTASection
          title={c.ctaFinal.title}
          subtitle={c.ctaFinal.subtitle}
          ctaText={c.ctaFinal.ctaText}
          microcopy={c.ctaFinal.microcopy}
          whatsappUrl={whatsappUrl}
        />
      </main>

      <Footer locale={locale} dict={footerDict} commonDict={commonDict} />
      <WhatsAppFloatingButton locale={locale} dict={commonDict} />
    </>
  );
}
