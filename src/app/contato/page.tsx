"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Button from "@/components/ui/Button";
import { AtSign, Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/constants";

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

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function ContatoPage() {
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
      // Formspree: crie uma conta em formspree.io e substitua o ID abaixo
      const res = await fetch("https://formspree.io/f/COLOQUE_SEU_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Nome: form.nome,
          Empresa: form.empresa || "—",
          Email: form.email,
          Telefone: form.telefone,
          "Tipo de serviço": form.tipoServico,
          "Motorista bilíngue": form.motoristaBilingue,
          "Local de embarque": form.localEmbarque || "—",
          "Local de desembarque": form.localDesembarque || "—",
          Observação: form.observacao || "—",
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
      <Header />
      <main>

        {/* ══════════════════════════════════
            HERO — pequeno
        ══════════════════════════════════ */}
        <section className="relative bg-navy-950 pt-32 pb-16 overflow-hidden">
          {/* Decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950 to-action-600/10 pointer-events-none" />
          <div className="relative z-10 container-st">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
                Fale conosco
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-surface-white mb-4">
              Entre em contato
            </h1>
            <div className="gold-line mb-5" />
            <p className="text-base text-white/60 max-w-xl">
              Informe os detalhes do seu deslocamento e nossa equipe retornará com uma proposta personalizada.
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
                  <h2 className="text-xl font-bold text-navy-950 mb-2">Solicitar orçamento</h2>
                  <p className="text-sm text-navy-950/50 mb-8">
                    Campos marcados com <span className="text-red-500 font-semibold">*</span> são obrigatórios.
                  </p>

                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-navy-950">Mensagem enviada!</h3>
                      <p className="text-sm text-navy-950/60 max-w-sm">
                        Recebemos seu pedido. Nossa equipe entrará em contato em breve.
                      </p>
                      <Button variant="primary" size="md" href={WHATSAPP_URL} showWhatsAppIcon>
                        Falar pelo WhatsApp
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">

                      {/* Linha 1: Nome + Empresa */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="nome" className={labelBase}>
                            Nome <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                            value={form.nome}
                            onChange={handleChange}
                            placeholder="Seu nome completo"
                            className={inputBase}
                          />
                        </div>
                        <div>
                          <label htmlFor="empresa" className={labelBase}>
                            Empresa
                          </label>
                          <input
                            id="empresa"
                            name="empresa"
                            type="text"
                            value={form.empresa}
                            onChange={handleChange}
                            placeholder="Nome da empresa (opcional)"
                            className={inputBase}
                          />
                        </div>
                      </div>

                      {/* Linha 2: Email + Telefone */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className={labelBase}>
                            E-mail <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            className={inputBase}
                          />
                        </div>
                        <div>
                          <label htmlFor="telefone" className={labelBase}>
                            Telefone <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            required
                            value={form.telefone}
                            onChange={handleChange}
                            placeholder="(61) 9 0000-0000"
                            className={inputBase}
                          />
                        </div>
                      </div>

                      {/* Linha 3: Tipo de serviço + Motorista bilíngue */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="tipoServico" className={labelBase}>
                            Tipo de serviço <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="tipoServico"
                            name="tipoServico"
                            required
                            value={form.tipoServico}
                            onChange={handleChange}
                            className={inputBase + " cursor-pointer appearance-none"}
                          >
                            <option value="" disabled>Selecione...</option>
                            <option value="Diária">Diária</option>
                            <option value="Transfer">Transfer</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="motoristaBilingue" className={labelBase}>
                            Motorista bilíngue <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="motoristaBilingue"
                            name="motoristaBilingue"
                            required
                            value={form.motoristaBilingue}
                            onChange={handleChange}
                            className={inputBase + " cursor-pointer appearance-none"}
                          >
                            <option value="" disabled>Selecione...</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                          </select>
                        </div>
                      </div>

                      {/* Linha 4: Embarque + Desembarque */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="localEmbarque" className={labelBase}>
                            Local de embarque
                          </label>
                          <input
                            id="localEmbarque"
                            name="localEmbarque"
                            type="text"
                            value={form.localEmbarque}
                            onChange={handleChange}
                            placeholder="Ex: Aeroporto de Brasília, Hotel X..."
                            className={inputBase}
                          />
                        </div>
                        <div>
                          <label htmlFor="localDesembarque" className={labelBase}>
                            Local de desembarque
                          </label>
                          <input
                            id="localDesembarque"
                            name="localDesembarque"
                            type="text"
                            value={form.localDesembarque}
                            onChange={handleChange}
                            placeholder="Ex: Centro de convenções, Empresa Y..."
                            className={inputBase}
                          />
                        </div>
                      </div>

                      {/* Observação */}
                      <div>
                        <label htmlFor="observacao" className={labelBase}>
                          Observações
                        </label>
                        <textarea
                          id="observacao"
                          name="observacao"
                          rows={4}
                          value={form.observacao}
                          onChange={handleChange}
                          placeholder="Data, horário, número de passageiros, necessidades especiais..."
                          className={inputBase + " resize-none"}
                        />
                      </div>

                      {/* Erro */}
                      {status === "error" && (
                        <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                          Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
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
                          {status === "sending" ? "Enviando..." : "Enviar solicitação"}
                        </Button>
                        <p className="mt-3 text-xs text-center text-navy-950/35">
                          Ao enviar, você concorda com o contato por e-mail ou WhatsApp.
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
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 bg-white rounded-2xl shadow-card p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/40 mb-1">WhatsApp</p>
                    <p className="text-base font-bold text-navy-950 group-hover:text-action-600 transition-colors">
                      {CONTACT_PHONE_DISPLAY}
                    </p>
                    <p className="text-xs text-navy-950/50 mt-0.5">Clique para conversar</p>
                  </div>
                </a>

                {/* Card Telefone */}
                <div className="flex items-start gap-4 bg-white rounded-2xl shadow-card p-6">
                  <div className="w-11 h-11 rounded-xl bg-action-600/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-action-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/40 mb-1">Telefone</p>
                    <p className="text-base font-bold text-navy-950">{CONTACT_PHONE_DISPLAY}</p>
                    <p className="text-xs text-navy-950/50 mt-0.5">Seg–Sáb, das 8h às 20h</p>
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/40 mb-1">E-mail</p>
                    <p className="text-sm font-bold text-navy-950 group-hover:text-action-600 transition-colors break-all">
                      {CONTACT_EMAIL}
                    </p>
                    <p className="text-xs text-navy-950/50 mt-0.5">Resposta em até 24h</p>
                  </div>
                </a>

                {/* Nota */}
                <div className="rounded-2xl border border-gold-400/30 bg-gold-400/5 p-5">
                  <p className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-2">Atendimento ágil</p>
                  <p className="text-sm text-navy-950/65 leading-relaxed">
                    Para respostas mais rápidas, utilize o WhatsApp informando data, trajeto e quantidade de passageiros.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
