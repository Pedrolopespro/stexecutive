"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Button from "@/components/ui/Button";
import { AtSign, Phone, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, buildWhatsAppUrl, type Locale } from "@/lib/constants";
import { contatoPt, navPt, footerPt, commonPt, type NavDict, type FooterDict, type CommonDict, type ContatoContentDict } from "@/lib/i18n";

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

interface ContatoPageProps {
  locale?: Locale;
  content?: ContatoContentDict;
  navDict?: NavDict;
  footerDict?: FooterDict;
  commonDict?: CommonDict;
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function ContatoPage({
  locale = "pt",
  content = contatoPt,
  navDict = navPt,
  footerDict = footerPt,
  commonDict = commonPt,
}: ContatoPageProps) {
  const c = content;
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

                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-navy-950">{c.form.successTitle}</h3>
                      <p className="text-sm text-navy-950/60 max-w-sm">
                        {c.form.successMessage}
                      </p>
                      <Button variant="primary" size="md" href={whatsappUrl} showWhatsAppIcon>
                        {c.form.successWhatsappLabel}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">

                      {/* Linha 1: Nome + Empresa */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="nome" className={labelBase}>
                            {c.form.labels.nome} <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                            value={form.nome}
                            onChange={handleChange}
                            placeholder={c.form.placeholders.nome}
                            className={inputBase}
                          />
                        </div>
                        <div>
                          <label htmlFor="empresa" className={labelBase}>
                            {c.form.labels.empresa}
                          </label>
                          <input
                            id="empresa"
                            name="empresa"
                            type="text"
                            value={form.empresa}
                            onChange={handleChange}
                            placeholder={c.form.placeholders.empresa}
                            className={inputBase}
                          />
                        </div>
                      </div>

                      {/* Linha 2: Email + Telefone */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className={labelBase}>
                            {c.form.labels.email} <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder={c.form.placeholders.email}
                            className={inputBase}
                          />
                        </div>
                        <div>
                          <label htmlFor="telefone" className={labelBase}>
                            {c.form.labels.telefone} <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            required
                            value={form.telefone}
                            onChange={handleChange}
                            placeholder={c.form.placeholders.telefone}
                            className={inputBase}
                          />
                        </div>
                      </div>

                      {/* Linha 3: Tipo de serviço + Motorista bilíngue */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="tipoServico" className={labelBase}>
                            {c.form.labels.tipoServico} <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="tipoServico"
                            name="tipoServico"
                            required
                            value={form.tipoServico}
                            onChange={handleChange}
                            className={inputBase + " cursor-pointer appearance-none"}
                          >
                            <option value="" disabled>{c.form.selectPlaceholder}</option>
                            {c.form.tipoServicoOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="motoristaBilingue" className={labelBase}>
                            {c.form.labels.motoristaBilingue} <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="motoristaBilingue"
                            name="motoristaBilingue"
                            required
                            value={form.motoristaBilingue}
                            onChange={handleChange}
                            className={inputBase + " cursor-pointer appearance-none"}
                          >
                            <option value="" disabled>{c.form.selectPlaceholder}</option>
                            {c.form.simNaoOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Linha 4: Embarque + Desembarque */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="localEmbarque" className={labelBase}>
                            {c.form.labels.localEmbarque}
                          </label>
                          <input
                            id="localEmbarque"
                            name="localEmbarque"
                            type="text"
                            value={form.localEmbarque}
                            onChange={handleChange}
                            placeholder={c.form.placeholders.localEmbarque}
                            className={inputBase}
                          />
                        </div>
                        <div>
                          <label htmlFor="localDesembarque" className={labelBase}>
                            {c.form.labels.localDesembarque}
                          </label>
                          <input
                            id="localDesembarque"
                            name="localDesembarque"
                            type="text"
                            value={form.localDesembarque}
                            onChange={handleChange}
                            placeholder={c.form.placeholders.localDesembarque}
                            className={inputBase}
                          />
                        </div>
                      </div>

                      {/* Observação */}
                      <div>
                        <label htmlFor="observacao" className={labelBase}>
                          {c.form.labels.observacao}
                        </label>
                        <textarea
                          id="observacao"
                          name="observacao"
                          rows={4}
                          value={form.observacao}
                          onChange={handleChange}
                          placeholder={c.form.placeholders.observacao}
                          className={inputBase + " resize-none"}
                        />
                      </div>

                      {/* Erro */}
                      {status === "error" && (
                        <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                          {c.form.errorMessage}
                        </p>
                      )}

                      {/* Submit */}
                      <div className="pt-2">
                        <Button
                          variant="primary"
                          size="lg"
                          fullWidth
                          type="submit"
                          disabled={status === "sending"}
                        >
                          {status === "sending" ? c.form.submitSendingLabel : c.form.submitLabel}
                        </Button>
                        <p className="mt-3 text-xs text-center text-navy-950/35">
                          {c.form.consentText}
                        </p>
                      </div>

                    </form>
                  )}
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/40 mb-1">{c.sidebar.phoneLabel}</p>
                    <p className="text-base font-bold text-navy-950">{CONTACT_PHONE_DISPLAY}</p>
                    <p className="text-xs text-navy-950/50 mt-0.5">{c.sidebar.phoneSubtext}</p>
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
      <WhatsAppFloatingButton locale={locale} dict={commonDict} />
    </>
  );
}
