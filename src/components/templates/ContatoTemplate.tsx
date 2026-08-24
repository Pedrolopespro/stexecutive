"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { AtSign, Phone, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, buildWhatsAppUrl, type Locale } from "@/lib/constants";
import QuoteForm from "@/components/sections/QuoteForm";
import { contatoPt, homePt, homeEn, homeEs, navPt, footerPt, commonPt, type NavDict, type FooterDict, type CommonDict, type ContatoContentDict } from "@/lib/i18n";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  tipoServico: string;
  motoristaBilingue: string;
  localEmbarque: string;
  localDesembarque: string;
  observacao: string;
}

// ─────────────────────────────────────────────
// HELPERS — input styles
// ─────────────────────────────────────────────

const inputBase =
  "w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-950/35 " +
  "focus:outline-none focus:ring-2 focus:ring-action-600/30 focus:border-action-600 " +
  "transition-colors duration-150";

const labelBase = "block text-sm font-semibold text-navy-950/80 mb-1.5";

interface ContatoTemplateProps {
  locale?: Locale;
  content?: ContatoContentDict;
  navDict?: NavDict;
  footerDict?: FooterDict;
  commonDict?: CommonDict;
}

// ─────────────────────────────────────────────
// TEMPLATE
// ─────────────────────────────────────────────

export default function ContatoTemplate({
  locale = "pt",
  content = contatoPt,
  navDict = navPt,
  footerDict = footerPt,
  commonDict = commonPt,
}: ContatoTemplateProps) {
  const c = content;
  // O formulario e o mesmo da home; so o dicionario muda por idioma.
  const quoteDict = (locale === "en" ? homeEn : locale === "es" ? homeEs : homePt).quoteForm;
  const whatsappUrl = buildWhatsAppUrl(commonDict.whatsappMessage);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState<FormData>({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    tipoServico: "",
    motoristaBilingue: "",
    localEmbarque: "",
    localDesembarque: "",
    observacao: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          empresa: form.empresa || "—",
          email: form.email,
          telefone: form.telefone,
          tipoServico: form.tipoServico,
          motoristaBilingue: form.motoristaBilingue,
          localEmbarque: form.localEmbarque || "—",
          localDesembarque: form.localDesembarque || "—",
          observacao: form.observacao || "—",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          nome: "", empresa: "", email: "", telefone: "",
          tipoServico: "", motoristaBilingue: "",
          localEmbarque: "", localDesembarque: "", observacao: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Header locale={locale} dict={navDict} commonDict={commonDict} />
      <main>

        {/* ══════════════════════════════════
            HERO — pequeno
        ══════════════════════════════════ */}
        <section className="relative bg-navy-950 pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950 to-action-600/10 pointer-events-none" />
          <div className="relative z-10 container-st">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                {c.hero.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-surface-white mb-4">
              {c.hero.title}
            </h1>
            <div className="gold-line mb-5" />
            <p className="text-base text-white/60 max-w-xl">
              {c.hero.subtitle}
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════
            CONTEÚDO PRINCIPAL
        ══════════════════════════════════ */}
        <section className="bg-surface-50 py-16 lg:py-24">
          <div className="container-st">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">

              {/* ── FORMULÁRIO ── */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-card p-8 lg:p-10">
                  <h2 className="text-xl font-bold text-navy-950 mb-2">{c.form.heading}</h2>
                  <p className="text-sm text-navy-950/50 mb-8">
                    {c.form.requiredNote.split("{req}")[0]}
                    <span className="text-red-500 font-semibold">{c.form.requiredWord}</span>
                    {c.form.requiredNote.split("{req}")[1]}
                  </p>

                  {/* O formulario da home passou a valer aqui tambem, a pedido do dono:
                      um so formulario no site inteiro, com os mesmos cinco campos. Ele
                      abre o WhatsApp preenchido em vez de enviar e-mail — por isso nao
                      existe mais estado de sucesso: a pagina navega para o WhatsApp.
                      O gatilho de conversao do GTM continua valendo, porque e submit
                      de <form> de verdade, que e o que o conteiner mede. */}
                  <QuoteForm dict={quoteDict} embutido />
                </div>
              </div>

              {/* ── INFORMAÇÕES DE CONTATO ── */}
              <div className="flex flex-col gap-6">

                {/* Card WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 bg-white rounded-2xl shadow-card p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/40 mb-1">{c.sidebar.whatsappLabel}</p>
                    <p className="text-base font-bold text-navy-950 group-hover:text-action-600 transition-colors">
                      {CONTACT_PHONE_DISPLAY}
                    </p>
                    <p className="text-xs text-navy-950/50 mt-0.5">{c.sidebar.whatsappSubtext}</p>
                  </div>
                </a>

                {/* Card Telefone */}
                <div className="flex items-start gap-4 bg-white rounded-2xl shadow-card p-6">
                  <div className="w-11 h-11 rounded-xl bg-action-600/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-action-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/70 mb-1">{c.sidebar.phoneLabel}</p>
                    <a
                        href={`tel:${CONTACT_PHONE_TEL}`}
                        className="text-base font-bold text-navy-950 hover:text-action-600 transition-colors"
                      >
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                    <p className="text-xs text-navy-950/70 mt-0.5">{c.sidebar.phoneSubtext}</p>
                  </div>
                </div>

                {/* Card E-mail */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-start gap-4 bg-white rounded-2xl shadow-card p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center shrink-0 group-hover:bg-gold-400/20 transition-colors">
                    <AtSign className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/40 mb-1">{c.sidebar.emailLabel}</p>
                    <p className="text-sm font-bold text-navy-950 group-hover:text-action-600 transition-colors break-all">
                      {CONTACT_EMAIL}
                    </p>
                    <p className="text-xs text-navy-950/50 mt-0.5">{c.sidebar.emailSubtext}</p>
                  </div>
                </a>

                {/* Nota */}
                <div className="rounded-2xl border border-gold-400/30 bg-gold-400/5 p-5">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-2">{c.sidebar.noteLabel}</p>
                  <p className="text-sm text-navy-950/65 leading-relaxed">
                    {c.sidebar.noteText}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer locale={locale} dict={footerDict} commonDict={commonDict} />
      {/* Sem botão flutuante aqui: esta página já é o canal de contato (tem
          formulário e CTAs de WhatsApp próprios) e, no mobile, o flutuante
          se sobrepunha ao botão "Enviar solicitação". */}
    </>
  );
}
