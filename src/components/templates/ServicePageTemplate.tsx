import React from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

import { buildWhatsAppUrl, type Locale } from "@/lib/constants";
import { navPt, footerPt, commonPt, type NavDict, type FooterDict, type CommonDict, type ServicePageContent } from "@/lib/i18n";

interface ServicePageTemplateProps {
  content: ServicePageContent;
  locale?: Locale;
  navDict?: NavDict;
  footerDict?: FooterDict;
  commonDict?: CommonDict;
}

export default function ServicePageTemplate({
  content,
  locale = "pt",
  navDict = navPt,
  footerDict = footerPt,
  commonDict = commonPt,
}: ServicePageTemplateProps) {
  const whatsappUrl = buildWhatsAppUrl(commonDict.whatsappMessage);
  const c = content;

  return (
    <>
      <Header locale={locale} dict={navDict} commonDict={commonDict} />
      <main>

        {/* HERO */}
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden bg-navy-950">
          <div className="absolute inset-0 z-0">
            <img
              src={c.hero.image}
              alt={c.hero.imageAlt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/60 to-navy-950/95" />
          </div>

          <div className="relative z-10 container-st py-20 lg:py-28">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                {commonDict.eyebrowBrand}
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[46px] lg:text-[58px] font-extrabold leading-[1.05] tracking-tight text-surface-white max-w-3xl">
              {c.hero.titleLine1}{" "}
              <span className="italic text-white/85">{c.hero.titleEmphasis}</span>
              {c.hero.titleLine2 ? <>{" "}{c.hero.titleLine2}</> : null}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl">
              {c.hero.subtitle}
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href={whatsappUrl} showWhatsAppIcon>
                {c.hero.ctaLabel}
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/35">
              {c.hero.microcopy}
            </p>
          </div>
        </section>

        {/* O QUE É */}
        <section className="section-padding bg-surface-off border-b border-gray-200/50">
          <div className="container-st">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                {c.whatIs.eyebrow}
              </p>
              <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-4">
                {c.whatIs.heading}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                {c.whatIs.paragraph}
              </p>
            </div>
          </div>
        </section>

        {/* FROTA + SPECS */}
        <section className="section-padding bg-surface-white">
          <div className="container-st">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3]">
                <img
                  src={c.fleet.image}
                  alt={c.fleet.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                  {c.fleet.eyebrow}
                </p>
                <h2 className="text-[24px] sm:text-[32px] font-bold text-navy-950 leading-snug mb-4">
                  {c.fleet.heading}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-6">
                  {c.fleet.paragraph}
                </p>

                {c.fleet.specs && (
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {c.fleet.specs.map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-surface-off border border-gray-200">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{item.spec}</p>
                        <p className="text-sm font-semibold text-navy-950">{item.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {c.fleet.checklist && (
                  <ul className="flex flex-col gap-3 mb-8">
                    {c.fleet.checklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-gold-400/15 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {c.fleet.tags && (
                  <div className="mb-8">
                    {c.fleet.tagsLabel && (
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{c.fleet.tagsLabel}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {c.fleet.tags.map((f, i) => (
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
                )}

                <Button variant="primary" size="md" href={whatsappUrl} showWhatsAppIcon>
                  {c.fleet.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow={c.useCases.eyebrow}
              title={c.useCases.heading}
              subtitle={c.useCases.subtitle}
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.useCases.items.map((item, i) => (
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

        {/* EVENT TYPES (opcional) */}
        {c.eventTypes && (
          <section className="section-padding bg-surface-white">
            <div className="container-st">
              <SectionHeader
                eyebrow={c.eventTypes.eyebrow}
                title={c.eventTypes.heading}
                subtitle={c.eventTypes.subtitle}
                align="center"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {c.eventTypes.items.map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-gray-200 bg-white">
                    <p className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-2">{item.label}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COMPANY BENEFITS (opcional) */}
        {c.companyBenefits && (
          <section className="section-padding bg-surface-off">
            <div className="container-st">
              <SectionHeader
                eyebrow={c.companyBenefits.eyebrow}
                title={c.companyBenefits.heading}
                align="center"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {c.companyBenefits.items.map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-gray-200 bg-white">
                    <p className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-2">{item.label}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COMPARISON TABLE (opcional) */}
        {c.comparisonTable && (
          <section className="section-padding bg-surface-white">
            <div className="container-st">
              <SectionHeader eyebrow={c.comparisonTable.eyebrow} title={c.comparisonTable.heading} align="center" />
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {c.comparisonTable.headers.map((h, i) => (
                        <th key={i} className="text-left p-3 border-b border-gray-200 font-semibold text-navy-950">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.comparisonTable.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="p-3 border-b border-gray-100 text-gray-600">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* COMMON SITUATIONS (opcional) */}
        {c.commonSituations && (
          <section className="section-padding bg-surface-off">
            <div className="container-st">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">{c.commonSituations.eyebrow}</p>
                <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-8">{c.commonSituations.heading}</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {c.commonSituations.items.map((s, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border border-navy-950/20 bg-white text-sm text-navy-950 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* COMPARISON CARDS (opcional) */}
        {c.comparisonCards && (
          <section className={`section-padding ${c.comparisonCards.theme === "dark" ? "bg-navy-950" : "bg-surface-white"}`}>
            <div className="container-st">
              <div className="max-w-3xl mx-auto">
                <SectionHeader
                  eyebrow={c.comparisonCards.eyebrow}
                  title={c.comparisonCards.heading}
                  subtitle={c.comparisonCards.subtitle}
                  align="center"
                  theme={c.comparisonCards.theme === "dark" ? "dark" : "light"}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={c.comparisonCards.theme === "dark" ? "rounded-2xl border border-gold-400/30 bg-gold-400/5 p-6" : "rounded-2xl border border-gold-400/30 bg-gold-400/5 p-6"}>
                    <p className={`text-sm font-bold uppercase tracking-wider mb-4 ${c.comparisonCards.theme === "dark" ? "text-gold-400" : "text-gold-500"}`}>
                      {c.comparisonCards.left.label}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {c.comparisonCards.left.items.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${c.comparisonCards!.theme === "dark" ? "text-white/80" : "text-navy-950"}`}>
                          <span className="text-gold-400 mt-0.5 shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={c.comparisonCards.theme === "dark" ? "rounded-2xl border border-white/10 bg-white/5 p-6" : "rounded-2xl border border-gray-200 bg-surface-off p-6"}>
                    <p className={`text-sm font-bold uppercase tracking-wider mb-4 ${c.comparisonCards.theme === "dark" ? "text-white/40" : "text-gray-400"}`}>
                      {c.comparisonCards.right.label}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {c.comparisonCards.right.items.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${c.comparisonCards!.theme === "dark" ? "text-white/40" : "text-gray-400"}`}>
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
        )}

        {/* CONTEXT SECTION — estatísticas + parágrafos (opcional) */}
        {c.contextSection && (
          <section className="section-padding bg-surface-white border-b border-gray-200/50">
            <div className="container-st">
              <div className="max-w-3xl mx-auto">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">{c.contextSection.eyebrow}</p>
                <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-5">{c.contextSection.heading}</h2>
                <div className="flex flex-col gap-4 text-base leading-relaxed text-gray-600">
                  {c.contextSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {c.contextSection.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-5 rounded-2xl border border-gold-400/20 bg-gold-400/5">
                      <span className="text-3xl font-extrabold text-gold-500 mb-1">{stat.number}</span>
                      <span className="text-xs text-gray-500 leading-snug">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PRICE (opcional) */}
        {c.price && (
          <section className="section-padding bg-surface-white">
            <div className="container-st">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">{c.price.eyebrow}</p>
                <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-4">{c.price.heading}</h2>
                {c.price.subtitle && <p className="text-base leading-relaxed text-gray-600 mb-8">{c.price.subtitle}</p>}
                {c.price.factors && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {c.price.factors.map((factor, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-surface-off">
                        <span className="text-gold-500 font-bold text-sm min-w-[24px]">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-sm text-gray-700">{factor}</span>
                      </div>
                    ))}
                  </div>
                )}
                {c.price.note && <p className="text-sm text-gray-500 mb-6">{c.price.note}</p>}
                {c.price.ctaLabel && (
                  <Button variant="primary" size="lg" href={whatsappUrl} showWhatsAppIcon>
                    {c.price.ctaLabel}
                  </Button>
                )}
              </div>
            </div>
          </section>
        )}

        {/* DIFERENCIAIS */}
        <section className="section-padding bg-navy-950">
          <div className="container-st">
            <SectionHeader
              eyebrow={c.differentials.eyebrow}
              title={c.differentials.heading}
              subtitle={c.differentials.subtitle}
              align="center"
              theme="dark"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.differentials.items.map((d, i) => (
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

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="section-padding bg-surface-white">
          <div className="container-st">
            <SectionHeader
              eyebrow={c.process.eyebrow}
              title={c.process.heading}
              subtitle={c.process.subtitle}
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
              {c.process.steps.map((step, i) => (
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
              <Button variant="primary" size="lg" href={whatsappUrl} showWhatsAppIcon>
                {c.process.ctaLabel}
              </Button>
            </div>
          </div>
        </section>

        {/* GALERIA (opcional) */}
        {c.gallery && (
          <section className="section-padding bg-surface-off">
            <div className="container-st">
              <SectionHeader eyebrow={c.gallery.eyebrow} title={c.gallery.heading} align="center" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {c.gallery.images.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] shadow-soft">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COBERTURA (opcional) */}
        {c.coverage && (
          <section className="section-padding bg-surface-white">
            <div className="container-st">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
                  {c.coverage.eyebrow}
                </p>
                <h2 className="text-[22px] sm:text-[28px] font-bold text-navy-950 leading-snug mb-4">
                  {c.coverage.heading}
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  {c.coverage.paragraph}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {c.coverage.locations.map((loc, i) => (
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
        )}

        {/* FAQ */}
        <section id="faq" className="section-padding bg-surface-off">
          <div className="container-st">
            <SectionHeader
              eyebrow={c.faq.eyebrow}
              title={c.faq.heading}
              align="center"
            />
            <div className="max-w-2xl mx-auto">
              <FAQAccordion items={c.faq.items.map((f) => ({ question: f.question, answer: f.answer }))} />
            </div>
          </div>
        </section>

        {/* BLOCO SEMÂNTICO (sr-only) */}
        <div className="sr-only" aria-hidden="true">
          {c.semanticBlock}
        </div>

        {/* CTA FINAL */}
        <CTASection
          title={c.cta.title}
          subtitle={c.cta.subtitle}
          ctaText={c.cta.ctaText}
          microcopy={c.cta.microcopy}
          whatsappUrl={whatsappUrl}
        />

      </main>

      <Footer locale={locale} dict={footerDict} commonDict={commonDict} />
      <WhatsAppFloatingButton locale={locale} dict={commonDict} />
    </>
  );
}
