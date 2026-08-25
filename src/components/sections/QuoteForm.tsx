"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { buildWhatsAppUrl, DDI_PAISES, type Locale } from "@/lib/constants";
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
  locale = "pt",
  embutido = false,
}: {
  dict: HomeContentDict["quoteForm"];
  /** Define para onde aponta o "Voltar ao site". */
  locale?: Locale;
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

  const inicioHref = locale === "pt" ? "/" : `/${locale}/`;

  // Some com o botao flutuante do WhatsApp enquanto a tela de confirmacao
  // estiver visivel. Ali o unico caminho de WhatsApp deve ser o botao
  // principal — dois botoes verdes na mesma tela se sobrepoem e disputam o
  // toque. A classe sai do body assim que o cliente volta ao formulario ou
  // troca de pagina, entao o botao continua normal no resto do site.
  useEffect(() => {
    const classe = "formulario-enviado";
    if (enviado) document.body.classList.add(classe);
    else document.body.classList.remove(classe);
    return () => document.body.classList.remove(classe);
  }, [enviado]);

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
        motoristaBilingue: "Não perguntado neste formulário",
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

  // ── TELA DE CONFIRMAÇÃO ────────────────────────────────────────────────
  // Substitui o formulário depois do envio. A página nunca sai do ar, então
  // aqui dá para explicar o que aconteceu e oferecer o caminho de volta.
  const linhaInfo = (icone: React.ReactNode, texto: string, primeira = false) => (
    <div className={`flex items-start gap-4 py-4 ${primeira ? "" : "border-t border-navy-950/10"}`}>
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#128C7E]/10 text-[#0F7A6B]"
      >
        {icone}
      </span>
      <p className="text-[15px] leading-relaxed text-navy-950/85">{texto}</p>
    </div>
  );

  const painelSucesso = (
    <div className="mt-7 text-center">
      {/* selo de confirmação */}
      <span
        aria-hidden="true"
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#128C7E]/10"
      >
        <svg className="h-10 w-10 text-[#0F7A6B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.4l2.6 2.6L16 9.6" />
        </svg>
      </span>

      <h2 className="mt-6 text-[30px] sm:text-[36px] font-extrabold leading-[1.12] tracking-tight text-navy-950">
        {dict.sucesso.tituloLinha1}
        <br />
        {dict.sucesso.tituloLinha2}
      </h2>

      <span aria-hidden="true" className="mx-auto mt-5 block h-[3px] w-16 rounded-full bg-[#0F7A6B]" />

      {/* os três avisos ficam alinhados à esquerda: texto corrido centralizado
          cansa a leitura, e o título centralizado já dá o eixo da tela */}
      <div className="mt-6 text-left">
        {linhaInfo(
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.23 8.23 0 010 16.47z" />
          </svg>,
          dict.sucesso.itemWhatsapp,
          true
        )}
        {linhaInfo(
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}>
            <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
            <path strokeLinecap="round" d="M10.5 5.5h3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4.5m0 0l-1.6-1.6M12 15.5l1.6-1.6" />
          </svg>,
          dict.sucesso.itemToque
        )}
        {linhaInfo(
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}>
            <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 7l8.5 6 8.5-6" />
          </svg>,
          emailOk === false ? dict.sucesso.emailFalha : dict.sucesso.itemEmail
        )}
      </div>

      {/* role=status faz o leitor de tela anunciar sem roubar o foco */}
      <p role="status" className="sr-only">
        {emailOk === null ? "" : emailOk ? dict.sucesso.emailOk : dict.sucesso.emailFalha}
      </p>

      <div className="mt-5 flex items-start gap-3 rounded-xl bg-action-600/8 px-4 py-3.5 text-left">
        <svg aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-action-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2.5l1.9 4.6 4.6 1.9-4.6 1.9L11 15.5 9.1 10.9 4.5 9l4.6-1.9L11 2.5zM18 14l.95 2.3 2.3.95-2.3.95L18 20.5l-.95-2.3-2.3-.95 2.3-.95L18 14z" />
        </svg>
        <p className="text-[15px] leading-relaxed text-navy-950/85">
          <strong className="font-bold text-navy-950">{dict.sucesso.proximoRotulo}</strong>{" "}
          {dict.sucesso.proximoTexto}
        </p>
      </div>

      <a
        href={urlWhats}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-action-600 px-6 py-4 text-[17px] font-bold text-white shadow-md transition-colors duration-200 hover:bg-action-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-600"
      >
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2z" />
        </svg>
        {dict.sucesso.abrirWhatsapp}
      </a>

      <button
        type="button"
        onClick={() => { setEnviado(false); setEmailOk(null); }}
        className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl border border-action-600 bg-white px-6 py-4 text-[17px] font-bold text-action-600 transition-colors duration-200 hover:bg-action-600/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-600"
      >
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
          <path strokeLinecap="round" d="M12 11v5m-2.5-2.5h5" />
        </svg>
        {dict.sucesso.novoPedido}
      </button>

      <a
        href={inicioHref}
        className="mt-5 inline-block text-[15px] font-semibold text-action-600 underline underline-offset-4 hover:text-action-500"
      >
        {dict.sucesso.voltarSite}
      </a>
    </div>
  );

  const conteudo = enviado ? painelSucesso : formulario;

  if (embutido) return conteudo;

  return (
    <section id="orcamento" className="bg-navy-900 border-t border-white/10 py-12 sm:py-16">
      <div className="container-st">
        <div className="mx-auto max-w-4xl rounded-2xl bg-surface-white shadow-premium p-6 sm:p-8 lg:p-10">
          {/* O convite para pedir orcamento sai de cena quando o pedido ja
              foi feito: a tela de confirmacao traz o proprio titulo. */}
          {!enviado && (
            <>
              <p className="text-xs font-bold tracking-widest uppercase text-gold-700">{dict.eyebrow}</p>
              <h2 className="mt-3 text-[26px] sm:text-[32px] font-extrabold leading-tight tracking-tight text-navy-950">
                {dict.heading}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-950/75 max-w-2xl">{dict.subtitle}</p>
            </>
          )}
          {conteudo}
        </div>
      </div>
    </section>
  );
}
