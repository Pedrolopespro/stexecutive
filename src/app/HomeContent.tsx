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
import LazyVideo from "@/components/ui/LazyVideo";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

import QuoteForm from "@/components/sections/QuoteForm";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import ServiceCard from "@/components/sections/ServiceCard";

import { buildServicePages, buildWhatsAppUrl, GOOGLE_REVIEWS, type Locale } from "@/lib/constants";
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

  // A nota e a contagem vem de um unico lugar (GOOGLE_REVIEWS em constants.ts)
  // e os dicionarios so trazem a frase com marcadores. Isso evita o numero
  // ficar escrito a mao em tres idiomas e desencontrado do schema — o Google
  // exige que o aggregateRating seja igual ao numero visivel na pagina.
  // Portugues e espanhol usam virgula decimal; ingles usa ponto. Escrever
  // "5,0" para um leitor de ingles parece erro de digitacao.
  const notaNoIdioma = locale === "en" ? GOOGLE_REVIEWS.nota.replace(",", ".") : GOOGLE_REVIEWS.nota;
  const comNumeros = (texto: string) =>
    texto.replace("{nota}", notaNoIdioma).replace("{qtd}", String(GOOGLE_REVIEWS.quantidade));
  const servicePages = buildServicePages(locale);
  const whatsappUrl = buildWhatsAppUrl(commonDict.whatsappMessage);
  const servicosHref = locale === "pt" ? "#servicos" : `/${locale}/#servicos`;
  const contatoHref = locale === "pt" ? "/contato/" : `/${locale}/contato/`;

  // Banner mobile: arte única que já traz logo, título, benefícios e botões.
  // Cada idioma tem sua própria arte, porque os textos são traduzidos dentro
  // da imagem. As áreas de toque (bannerHits, abaixo) são medidas pixel a
  // pixel em cada arquivo — sem isso os botões desenhados na arte não
  // respondem ao clique.
  const bannerMobile = true;

  const bannerSrc = {
    pt: "/images/content/banner-mobile-home.webp",
    en: "/images/content/banner-mobile-home-en.webp",
    es: "/images/content/banner-mobile-home-es.webp",
  }[locale];

  const bannerAlt = {
    pt: "ST Executive — Transporte executivo premium em Brasília. Conforto, segurança e pontualidade em cada trajeto.",
    en: "ST Executive — Premium executive transportation in Brasília. Comfort, safety and punctuality on every trip.",
    es: "ST Executive — Transporte ejecutivo premium en Brasília. Comodidad, seguridad y puntualidad en cada trayecto.",
  }[locale];

  // Remedido em 2026-08-20, sobre as artes novas (foto noturna da Ponte JK).
  // Nas artes anteriores os botões acompanhavam o comprimento do texto, e por
  // isso cada idioma tinha coordenadas próprias. Nas novas eles têm largura
  // fixa, então os três valores ficaram praticamente iguais — mantive o mapa
  // por idioma mesmo assim, para não perder o encaixe se uma arte for
  // trocada isoladamente no futuro.
  const bannerHits = {
    pt: { servicos: { left: "5.22%", width: "44.56%" }, orcamento: { left: "52.11%", width: "43.11%" } },
    en: { servicos: { left: "5.22%", width: "44.56%" }, orcamento: { left: "52.11%", width: "43.11%" } },
    es: { servicos: { left: "5.22%", width: "44.56%" }, orcamento: { left: "52.11%", width: "43.11%" } },
  }[locale];

  return (
    <>
      <Header locale={locale} dict={navDict} commonDict={commonDict} />
      <main>

        {/* ══════════════════════════════════
            1. HERO
        ══════════════════════════════════ */}
        {/* ── Banner mobile (PT/EN/ES) ──
            A arte já traz logo, título, benefícios e os dois botões. Por isso
            o Hero e a barra de benefícios são escondidos por CSS no celular —
            escondidos, não removidos: o H1 e os links continuam no HTML, que é
            o que o Google lê (a indexação é mobile-first). */}
        {bannerMobile && (
          <section className="banner-mobile flex items-center justify-center sm:hidden">
            <div className="banner-mobile__frame">
              <img
                src={bannerSrc}
                alt={bannerAlt}
                className="block w-full h-full"
                width={900}
                height={1600}
                fetchPriority="high"
              />
              {/* Áreas de toque transparentes sobre os botões desenhados na
                  arte. Posição base (top/height) vem do CSS, igual nas 3
                  artes; left/width são por idioma (bannerHits acima), porque
                  o texto de cada botão tem um comprimento diferente. */}
              <a
                href={servicosHref}
                className="banner-mobile__hit"
                style={bannerHits.servicos}
                aria-label={c.hero.ctaSecondaryMobile}
              />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="banner-mobile__hit"
                style={bannerHits.orcamento}
                aria-label={c.hero.ctaPrimaryMobile}
              />
            </div>
          </section>
        )}

        {/* No mobile o Hero e a barra de benefícios dividem uma tela inteira:
            o wrapper define a altura e o Hero cresce para ocupar o que sobra.
            A partir de sm volta ao fluxo normal (desktop inalterado). */}
        <div className={bannerMobile ? "first-fold hidden sm:block" : "first-fold flex flex-col sm:block"}>
        <section className="relative flex-1 sm:flex-none sm:min-h-screen flex flex-col overflow-hidden bg-navy-950">
          <div className="absolute inset-0 z-0">
            {/* No celular, imagem fixa em WebP (104 KB) no lugar do vídeo de
                2,1 MB: carrega antes, não consome dados nem bateria. O vídeo
                segue no desktop — com preload="none" e display:none ele nem
                chega a ser baixado no mobile. */}
            <img
              src="/images/content/hero site mobile.webp"
              alt="Frota executiva da ST Executive em Brasília"
              className="sm:hidden w-full h-full object-cover object-bottom"
              fetchPriority="high"
              width={1080}
              height={1920}
            />
            {/* O poster era "hero site mobile.webp" — a arte RETRATO do celular,
                esticada num hero paisagem. Trocado pela versão paisagem, que
                é a que corresponde ao enquadramento. */}
            <LazyVideo
              src="/images/content/veide hero.mp4"
              poster="/images/content/hero site.webp"
              className="hidden sm:block w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
            >
              <img
                src="/images/content/hero site.webp"
                alt="ST Executive — Transporte executivo em Brasília"
                className="w-full h-full object-cover object-center"
                width={1920}
                height={1080}
              />
            </LazyVideo>
            {/* O véu escuro sobre o vídeo. A faixa do meio era 65% e é justamente
                onde o texto assenta — com ela o apoio media 3,5:1 e o rótulo
                2,7:1, abaixo do mínimo legível de 4,5:1. A 80% o texto passa de
                dia e à noite, e a foto continua visível: o vídeo é claro no
                topo (céu) e escuro embaixo, então quem perde brilho é o meio,
                onde de todo modo há texto por cima. */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/88 via-navy-950/80 to-navy-950/85" />
          </div>

          <div className="relative z-10 flex-1 flex flex-col container-st">
            <div className="h-20 lg:h-24 shrink-0" />

            <div className="hero-inner flex-1 flex flex-col justify-between sm:justify-center pb-10 sm:py-12 lg:py-16">

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

                <p className="hidden sm:block mt-5 text-base sm:text-lg leading-relaxed text-white/90 max-w-lg">
                  {c.hero.subtitle}
                </p>

                <div className="hidden sm:block gold-line mt-5" />

                {/* Era text-white/55 — cinza claro sobre foto, ilegível com sol na
                    tela. 80% mantém a hierarquia (continua mais discreto que o
                    subtítulo) e passa no contraste. */}
                <p className="hidden sm:block mt-4 text-sm text-white/80 max-w-md">
                  {c.hero.supportText}
                </p>

                {/* A microcópia "Informe data, horário, trajeto e quantidade de
                    passageiros" saía aqui, abaixo dos botões. Foi retirada da tela
                    a pedido do dono. As chaves `microcopy` continuam nos três
                    dicionários de propósito: elas são obrigatórias em
                    src/lib/i18n/types.ts e apagá-las quebraria o build sem
                    necessidade — e mexer nas traduções está fora do escopo. */}
                <div className="hidden sm:flex flex-row gap-3 mt-14">
                  <Button variant="primary" size="lg" href={whatsappUrl} showWhatsAppIcon>
                    {c.hero.ctaPrimary}
                  </Button>
                  <Button variant="secondary" size="lg" href={servicosHref} icon={<ArrowRight className="w-4 h-4" />}>
                    {c.hero.ctaSecondary}
                  </Button>
                </div>
              </div>

              <div className="sm:hidden">
                <div className="flex flex-row gap-3">
                  <Button
                    variant="heroOutline"
                    size="lg"
                    href={servicosHref}
                    icon={<BriefcaseBusiness className="w-5 h-5 text-gold-400" />}
                    className="flex-1 justify-center"
                  >
                    {c.hero.ctaSecondaryMobile}
                  </Button>
                  <Button variant="primary" size="lg" href={whatsappUrl} showWhatsAppIcon className="flex-1 justify-center">
                    {c.hero.ctaPrimaryMobile}
                  </Button>
                </div>
                {/* O microcopy fica só no desktop (bloco acima): no celular
                    ele competia com os benefícios pela primeira dobra. */}
              </div>

            </div>
          </div>

        </section>

        {/* ── Barra de features ──
            Sem margem negativa: ela cobria o texto "Informe data, horário…". */}
        <div className="relative z-20 shrink-0">
          <div className="bg-navy-950 border-t border-white/10">
            <div className="container-st py-4 features-bar-inner">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-white/10 features-bar-grid">
                {/* No mobile cada item vira um card (mesmo padrão dos
                    diferenciais da Frota); no desktop volta a ser coluna
                    simples separada por divisória, como antes. */}
                {c.featuresBar.map((item, i) => (
                  <div
                    key={i}
                    /* ring em vez de border: border-0 no lg apagaria também a
                       divisória vertical (divide-x) das colunas do desktop. */
                    className="flex items-center gap-3 rounded-2xl ring-1 ring-white/10 bg-navy-800/60 px-4 py-3.5 lg:rounded-none lg:ring-0 lg:bg-transparent lg:px-6 lg:py-0 first:lg:pl-0 last:lg:pr-0"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 lg:w-auto lg:h-auto lg:rounded-none lg:bg-transparent">
                      {FEATURES_ICONS[i]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-surface-white leading-tight break-words hyphens-none">{item.title}</p>
                      <p className="text-xs text-white/50 mt-0.5 break-words hyphens-none">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* ══════════════════════════════════
            1B. ORÇAMENTO RÁPIDO
            Entra logo depois da primeira tela: é o primeiro bloco que o
            visitante encontra ao rolar, em vez de ter de sair da página
            para pedir preço.
        ══════════════════════════════════ */}
        <QuoteForm dict={c.quoteForm} locale={locale} />

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
                <LazyVideo
                  src="/images/content/video st vans.mp4"
                  poster="/images/content/van.webp"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                >
                  <img
                    src="/images/content/van.webp"
                    alt="Van executiva ST Executive"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                </LazyVideo>
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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-10">
              {c.fleetSection.differentials.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-navy-800/60 border border-white/8 rounded-2xl px-4 py-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0">
                    {FLEET_DIFFERENTIALS_ICONS[i]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-surface-white leading-tight break-words hyphens-none">{item.title}</p>
                    <p className="text-xs text-white/45 mt-0.5 break-words hyphens-none">{item.sub}</p>
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

                    {/* Era text-white/45 — 2,5:1 sobre o navy do card, ilegível.
                        70% mantém a hierarquia e passa no contraste. */}
                    <p className="text-sm text-white/70 leading-relaxed flex-1">{v.desc}</p>

                    {/* Antes o card só oferecia "Saiba mais", que leva para outra
                        página em vez de para o orçamento. O botão de pedido vem
                        primeiro e já abre o WhatsApp dizendo qual veículo é —
                        assim o pedido chega qualificado, sem a ida e volta de
                        perguntar "qual veículo?". Continua sendo um <a href>
                        para wa.me, que é o que o GTM mede hoje. */}
                    {/* Empilhados e em largura total: lado a lado os dois não
                        cabem na largura do card e quebravam desalinhados. Assim
                        também rendem alvos de toque cheios no celular. */}
                    <div className="flex flex-col gap-2 mt-2">
                      <Button
                        variant="primary"
                        size="sm"
                        href={buildWhatsAppUrl(
                          c.fleetSection.requestMessageTemplate
                            .replace("{veiculo}", v.label)
                            .replace("{capacidade}", v.capacity)
                        )}
                        showWhatsAppIcon
                        className="w-full justify-center"
                      >
                        {c.fleetSection.requestLabel}
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        href={servicePages[v.serviceKey]}
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="w-full justify-center"
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

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/70 border border-gray-200/70 rounded-2xl overflow-hidden bg-white shadow-soft">
              {c.testimonialsSection.stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-4">
                  <div className="text-gold-500 shrink-0">
                    {TESTIMONIAL_STATS_ICONS[i]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-navy-950 leading-tight break-words hyphens-none">{comNumeros(s.title)}</p>
                    <p className="text-xs text-navy-950/70 mt-0.5 break-words hyphens-none">{comNumeros(s.sub)}</p>
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
                  <p className="text-xs text-navy-950/70 mt-0.5">{c.testimonialsSection.googleCta.subtitle}</p>
                  {/* Ate agora o unico link do Google levava a ESCREVER avaliacao.
                      Quem quer conferir a reputacao antes de contratar nao tinha
                      para onde ir. */}
                  <a
                    href={GOOGLE_REVIEWS.urlLeitura}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-xs font-semibold text-action-600 underline underline-offset-2 hover:text-action-500"
                  >
                    {comNumeros(c.testimonialsSection.googleCta.readLabel)}
                  </a>
                </div>
              </div>
              <a
                href={GOOGLE_REVIEWS.urlEscrita}
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

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-3">
              {c.aboutSection.differentials.map((f, i) => (
                <div key={i} className="flex items-center lg:items-start gap-3 lg:gap-2 lg:flex-col bg-white border border-gray-200/70 rounded-2xl px-4 py-4 shadow-soft">
                  <div className="text-gold-500 shrink-0">{ABOUT_DIFFERENTIALS_ICONS[i]}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-navy-950 leading-tight break-words hyphens-none">{f.title}</p>
                    <p className="text-xs text-gray-400 leading-snug mt-0.5 break-words hyphens-none">{f.sub}</p>
                  </div>
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
