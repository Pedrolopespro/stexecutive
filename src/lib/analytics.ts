/**
 * Registro de conversao (Google Ads) e de evento (GTM).
 *
 * Por que este arquivo existe: o layout define a funcao
 * `gtag_report_conversion` num <script> solto, para a conversao
 * AW-18160577429/qaJ_CIyCrKwcEJXX0dND — mas nada no site chegava a chama-la.
 * A auditoria de 25/08/2026 confirmou: ao enviar o formulario o `dataLayer`
 * nao recebia nenhuma entrada nova, e o mesmo no clique do WhatsApp. Ou seja,
 * a campanha paga nunca soube quais cliques viraram pedido.
 *
 * Como a funcao nasce em script classico, ela vira propriedade de `window`.
 * O TypeScript nao sabe disso, daí a declaracao abaixo.
 */

declare global {
  interface Window {
    /** Definida em src/app/layout.tsx. Sem argumento, NAO redireciona. */
    gtag_report_conversion?: (url?: string) => boolean;
    dataLayer?: Record<string, unknown>[];
  }
}

/** Eventos que o site registra. Nome fixo para o GTM poder acionar gatilhos. */
export type EventoConversao =
  | "orcamento_enviado"
  | "whatsapp_flutuante"
  | "whatsapp_link";

/**
 * Avisa Ads e GTM de uma conversao.
 *
 * Chamamos `gtag_report_conversion()` SEM url de proposito: com url ela
 * redireciona a aba no callback, e aqui a pagina precisa continuar viva —
 * o WhatsApp abre em aba nova e a tela de confirmacao fica no lugar.
 *
 * Nunca deixa erro escapar: falha de rastreamento nao pode derrubar o envio
 * de um pedido.
 */
export function registrarConversao(
  evento: EventoConversao,
  detalhes?: Record<string, string>,
): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: evento, ...detalhes });
    window.gtag_report_conversion?.();
  } catch {
    // rastreamento e acessorio; o pedido do cliente vem primeiro
  }
}
