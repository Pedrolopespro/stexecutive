"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { buildWhatsAppUrl, type Locale } from "@/lib/constants";
import type { HomeContentDict } from "@/lib/i18n";

/**
 * Formulário curto de orçamento, logo abaixo da primeira tela.
 *
 * Decisões que importam e o porquê:
 *
 * 1. É um <form> de verdade, com submit de verdade. O contêiner do GTM mede
 *    conversão pelo gatilho nativo de submit; se isto virasse um onClick de
 *    <button type="button">, o evento deixaria de existir e a conversão
 *    morreria em silêncio, sem erro nenhum no console.
 *
 * 2. `id` e `name` próprios, diferentes do formulário da página de contato.
 *    O gatilho de hoje pega qualquer formulário da página — sem nome próprio
 *    os dois pedidos cairiam no mesmo número e ninguém saberia qual é qual.
 *
 * 3. A navegação para o WhatsApp é SÍNCRONA, na primeira instrução do
 *    handler. No iOS, abrir wa.me depois de um await é tratado como popup e
 *    bloqueado — o cliente clicaria em enviar e nada aconteceria.
 *
 * 4. Não existe backend guardando o pedido: a mensagem vai pronta para o
 *    WhatsApp, que é o canal que a equipe já acompanha. Nada a se perder
 *    numa fila de e-mail que ninguém lê.
 */
export default function QuoteForm({
  dict,
  locale,
}: {
  dict: HomeContentDict["quoteForm"];
  locale: Locale;
}) {
  // A data mínima é hoje. Calcular isso durante a renderização quebraria a
  // hidratação (o build acontece num dia, a visita em outro), então só é
  // definida depois que o componente monta no navegador.
  const [hoje, setHoje] = useState("");
  useEffect(() => {
    const d = new Date();
    const p = (n: number) => String(n).padStart(2, "0");
    setHoje(`${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`);
  }, []);

  /** AAAA-MM-DD (formato do input) → DD/MM/AAAA, que é como se lê em pt e es. */
  const dataLegivel = (iso: string) => {
    if (!iso) return "";
    const [a, m, d] = iso.split("-");
    return locale === "en" ? `${m}/${d}/${a}` : `${d}/${m}/${a}`;
  };

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();

    const mensagem = dict.messageTemplate
      .replace("{nome}", v("nome"))
      .replace("{whatsapp}", v("whatsapp"))
      .replace("{data}", dataLegivel(v("data")))
      .replace("{origem}", v("origem"))
      .replace("{destino}", v("destino"))
      .replace("{passageiros}", v("passageiros"))
      .replace("{servico}", v("servico"))
      // tira linhas cujo campo ficou vazio, para a mensagem não chegar com
      // "Destino:" solto no fim
      .split("\n")
      .filter((linha) => !/^[^:]+:\s*$/.test(linha))
      .join("\n");

    // Primeira instrução depois de montar a URL — ver nota 3 acima.
    window.location.href = buildWhatsAppUrl(mensagem);
  }

  const campo =
    "w-full max-w-full min-w-0 rounded-xl border border-navy-950/25 bg-white px-4 py-3 text-[15px] text-navy-950 " +
    "placeholder:text-navy-950/55 " +
    "focus:outline-none focus:ring-2 focus:ring-action-600 focus:border-action-600 " +
    "transition-colors duration-150";
  const rotulo = "block text-sm font-semibold text-navy-950 mb-1.5";

  return (
    <section id="orcamento" className="bg-navy-900 border-t border-white/10 py-12 sm:py-16">
      <div className="container-st">
        <div className="mx-auto max-w-4xl rounded-2xl bg-surface-white shadow-premium p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold tracking-widest uppercase text-gold-700">{dict.eyebrow}</p>
          <h2 className="mt-3 text-[26px] sm:text-[32px] font-extrabold leading-tight tracking-tight text-navy-950">
            {dict.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-navy-950/75 max-w-2xl">{dict.subtitle}</p>

          <form
            id="orcamento-rapido"
            name="orcamento-rapido"
            onSubmit={enviar}
            className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="min-w-0">
              <label className={rotulo} htmlFor="of-nome">{dict.labels.nome}</label>
              <input
                id="of-nome" name="nome" type="text" required
                autoComplete="name" placeholder={dict.placeholders.nome} className={campo}
              />
            </div>

            <div className="min-w-0">
              <label className={rotulo} htmlFor="of-whatsapp">{dict.labels.whatsapp}</label>
              <input
                id="of-whatsapp" name="whatsapp" type="tel" required
                inputMode="tel" autoComplete="tel"
                placeholder={dict.placeholders.whatsapp} className={campo}
              />
            </div>

            <div className="min-w-0">
              <label className={rotulo} htmlFor="of-data">{dict.labels.data}</label>
              {/* No iOS o input[type=date] traz um controle nativo com largura
                  propria e ignora o w-full, estourando a coluna. O
                  appearance-none tira essa largura embutida; o min-w-0 acima
                  deixa a celula do grid encolher. */}
              <input
                id="of-data" name="data" type="date" required
                min={hoje || undefined}
                className={campo + " appearance-none"}
              />
            </div>

            <div className="min-w-0">
              <label className={rotulo} htmlFor="of-passageiros">{dict.labels.passageiros}</label>
              <select id="of-passageiros" name="passageiros" required defaultValue="" className={campo}>
                <option value="" disabled>{dict.placeholders.selecione}</option>
                {dict.passageirosOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div className="min-w-0">
              <label className={rotulo} htmlFor="of-origem">{dict.labels.origem}</label>
              <input
                id="of-origem" name="origem" type="text" required
                placeholder={dict.placeholders.origem} className={campo}
              />
            </div>

            <div className="min-w-0">
              <label className={rotulo} htmlFor="of-destino">{dict.labels.destino}</label>
              <input
                id="of-destino" name="destino" type="text" required
                placeholder={dict.placeholders.destino} className={campo}
              />
            </div>

            <div className="sm:col-span-2 min-w-0">
              <label className={rotulo} htmlFor="of-servico">{dict.labels.servico}</label>
              <select id="of-servico" name="servico" required defaultValue="" className={campo}>
                <option value="" disabled>{dict.placeholders.selecione}</option>
                {dict.servicoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-1">
              <Button type="submit" variant="primary" size="lg" showWhatsAppIcon className="justify-center">
                {dict.submitLabel}
              </Button>
              <p className="text-xs leading-relaxed text-navy-950/70 sm:flex-1">{dict.footnote}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
