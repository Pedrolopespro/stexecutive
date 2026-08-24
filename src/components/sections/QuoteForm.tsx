"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { buildWhatsAppUrl, DDI_PAISES } from "@/lib/constants";
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
 *
 * Data, origem, destino e número de passageiros deixaram de ser campos
 * próprios a pedido do dono; agora entram em "Descrição do atendimento",
 * o campo livre no fim do formulário.
 */
export default function QuoteForm({
  dict,
  embutido = false,
}: {
  dict: HomeContentDict["quoteForm"];
  /**
   * `false` (padrao): a home, onde o formulario traz a propria secao escura
   * e o cartao branco. `true`: a pagina de contato, que ja tem cartao e
   * titulo proprios — ali entra so o <form>, sem moldura repetida.
   */
  embutido?: boolean;
}) {
  const [enviado, setEnviado] = useState(false);
  const [emailOk, setEmailOk] = useState<boolean | null>(null);
  const [urlWhats, setUrlWhats] = useState("");

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();

    const telefone = `${v("ddi")} ${v("whatsapp")}`.trim();

    const mensagem = dict.messageTemplate
      .replace("{nome}", v("nome"))
      .replace("{whatsapp}", telefone)
      .replace("{email}", v("email"))
      .replace("{veiculo}", v("veiculo"))
      .replace("{descricao}", v("descricao"))
      // tira linhas cujo campo ficou vazio, para a mensagem nao chegar com
      // "E-mail:" solto no meio
      .split("\n")
      .filter((linha) => !/^[^:]+:\s*$/.test(linha))
      .join("\n");

    const url = buildWhatsAppUrl(mensagem);
    setUrlWhats(url);

    // Abre o WhatsApp em aba nova e MANTEM a pagina. Antes a propria aba
    // ia para o WhatsApp: o cliente perdia o site e nao tinha como saber
    // se o pedido tinha sido registrado.
    //
    // A chamada e sincrona dentro do gesto do usuario, que e a unica forma
    // de o iOS nao tratar como pop-up. Se ainda assim vier bloqueado,
    // window.open devolve null — e ai o painel abaixo ja traz o botao
    // para abrir o WhatsApp com um toque. Em nenhum caso a pagina sai do
    // ar, o que mantem o formulario, a confirmacao e o registro visiveis.
    window.open(url, "_blank", "noopener,noreferrer");

    setEnviado(true);
    setEmailOk(null);

    // A pagina continua viva, entao da para usar fetch comum e contar ao
    // cliente se o registro por e-mail chegou de fato. Falhar aqui nao e
    // fatal: o pedido ja foi pelo WhatsApp.
    fetch("/mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // Nomes exatamente como public/mail.php ja espera, para nao
        // precisar alterar o PHP. `motoristaBilingue` e obrigatorio la
        // e este formulario nao pergunta isso, entao vai explicito.
        nome: v("nome"),
        email: v("email"),
        telefone,
        tipoServico: v("veiculo"),
        motoristaBilingue: "Nao perguntado neste formulario",
        observacao: v("descricao"),
      }),
    })
      .then((r) => setEmailOk(r.ok))
      .catch(() => setEmailOk(false));
  }

  // A largura fica FORA de `base`. Quando ela vinha junto (w-full), o seletor
  // de pais herdava largura total e espremia o campo do numero ate sumir —
  // duas classes de largura no mesmo elemento e a ordem do CSS decide, nao a
  // ordem em que aparecem aqui.
  const base =
    "max-w-full min-w-0 rounded-xl border border-navy-950/25 bg-white px-4 py-3 text-[15px] text-navy-950 " +
    "placeholder:text-navy-950/55 " +
    "focus:outline-none focus:ring-2 focus:ring-action-600 focus:border-action-600 " +
    "transition-colors duration-150";
  const campo = base + " w-full";
  const rotulo = "block text-sm font-semibold text-navy-950 mb-1.5";

  const formulario = (
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
                {/* O exemplo aqui era um numero brasileiro tambem em ingles e
                    espanhol, o que dava a entender que so servia numero do
                    Brasil. Agora cada idioma mostra um exemplo do proprio
                    publico, e a dica abaixo pede o codigo do pais. */}
                <div className="flex gap-2 min-w-0">
                  <select
                    name="ddi"
                    defaultValue="+55"
                    aria-label={dict.labels.whatsapp}
                    className={base + " w-[8.25rem] shrink-0 px-2"}
                  >
                    {DDI_PAISES.map((p) => (
                      <option key={p.ddi} value={p.ddi}>{`${p.ddi}  ${p.nome}`}</option>
                    ))}
                  </select>
                  <input
                    id="of-whatsapp" name="whatsapp" type="tel" required
                    inputMode="tel" autoComplete="tel"
                    aria-describedby="of-whatsapp-dica"
                    placeholder={dict.placeholders.whatsapp}
                    className={base + " flex-1 min-w-0"}
                  />
                </div>
                <p id="of-whatsapp-dica" className="mt-1.5 text-xs leading-snug text-navy-950/70">
                  {dict.dicaWhatsapp}
                </p>
              </div>

              <div className="min-w-0">
                <label className={rotulo} htmlFor="of-email">{dict.labels.email}</label>
                <input
                  id="of-email" name="email" type="email" required
                  inputMode="email" autoComplete="email"
                  placeholder={dict.placeholders.email} className={campo}
                />
              </div>

              <div className="min-w-0">
                <label className={rotulo} htmlFor="of-veiculo">{dict.labels.veiculo}</label>
                <select id="of-veiculo" name="veiculo" required defaultValue="" className={campo}>
                  <option value="" disabled>{dict.placeholders.selecione}</option>
                  {dict.veiculoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="sm:col-span-2 min-w-0">
                <label className={rotulo} htmlFor="of-descricao">{dict.labels.descricao}</label>
                <textarea
                  id="of-descricao" name="descricao" required rows={3}
                  placeholder={dict.placeholders.descricao}
                  className={campo + " resize-y"}
                />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-1">
                <Button type="submit" variant="primary" size="lg" showWhatsAppIcon className="justify-center">
                  {dict.submitLabel}
                </Button>
                <p className="text-xs leading-relaxed text-navy-950/70 sm:flex-1">{dict.footnote}</p>
              </div>
            </form>
  );

  // Depois do envio a pagina continua no ar (o WhatsApp abriu em aba nova),
  // entao da para confirmar o que aconteceu — inclusive se o registro por
  // e-mail chegou. Antes o cliente ficava sem saber.
  const painelSucesso = (
    <div className="mt-7 rounded-xl border border-navy-950/15 bg-surface-off p-6 sm:p-7">
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#128C7E] text-white"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-extrabold text-navy-950">{dict.sucesso.titulo}</h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-navy-950/80">{dict.sucesso.texto}</p>
          {/* role=status faz o leitor de tela anunciar sem roubar o foco */}
          <p role="status" className="mt-2 text-sm font-semibold text-navy-950/80">
            {emailOk === null ? "…" : emailOk ? dict.sucesso.emailOk : dict.sucesso.emailFalha}
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Button variant="primary" size="md" href={urlWhats} showWhatsAppIcon className="justify-center">
              {dict.sucesso.abrirDeNovo}
            </Button>
            {/* `secondary` e feita para fundo escuro: aqui, no cartao claro,
                o texto sumia. `outline` e a variante para fundo claro. */}
            <Button
              variant="outline"
              size="md"
              className="justify-center"
              onClick={() => { setEnviado(false); setEmailOk(null); }}
            >
              {dict.sucesso.novoPedido}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const conteudo = enviado ? painelSucesso : formulario;

  if (embutido) return conteudo;

  return (
    <section id="orcamento" className="bg-navy-900 border-t border-white/10 py-12 sm:py-16">
      <div className="container-st">
        <div className="mx-auto max-w-4xl rounded-2xl bg-surface-white shadow-premium p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold tracking-widest uppercase text-gold-700">{dict.eyebrow}</p>
          <h2 className="mt-3 text-[26px] sm:text-[32px] font-extrabold leading-tight tracking-tight text-navy-950">
            {dict.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-navy-950/75 max-w-2xl">{dict.subtitle}</p>
          {conteudo}
        </div>
      </div>
    </section>
  );
}
