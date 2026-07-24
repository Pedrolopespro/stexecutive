import type { ContatoContentDict } from "@/lib/i18n/types";

export const contatoPt: ContatoContentDict = {
  meta: {
    title: "Contato | ST Executive — Transporte Executivo em Brasília",
    description: "Entre em contato com a ST Executive para solicitar orçamento de transporte executivo em Brasília. Atendimento via WhatsApp, e-mail e formulário.",
  },
  hero: {
    eyebrow: "Fale conosco",
    title: "Entre em contato",
    subtitle: "Informe os detalhes do seu deslocamento e nossa equipe retornará com uma proposta personalizada.",
  },
  form: {
    heading: "Solicitar orçamento",
    requiredNote: "Campos marcados com {req} são obrigatórios.",
    requiredWord: "*",
    labels: {
      nome: "Nome",
      empresa: "Empresa",
      email: "E-mail",
      telefone: "Telefone",
      tipoServico: "Tipo de serviço",
      motoristaBilingue: "Motorista bilíngue",
      localEmbarque: "Local de embarque",
      localDesembarque: "Local de desembarque",
      observacao: "Observações",
    },
    placeholders: {
      nome: "Seu nome completo",
      empresa: "Nome da empresa (opcional)",
      email: "seu@email.com",
      telefone: "(61) 9 0000-0000",
      localEmbarque: "Ex: Aeroporto de Brasília, Hotel X...",
      localDesembarque: "Ex: Centro de convenções, Empresa Y...",
      observacao: "Data, horário, número de passageiros, necessidades especiais...",
    },
    selectPlaceholder: "Selecione...",
    tipoServicoOptions: [
      { value: "Diária", label: "Diária" },
      { value: "Transfer", label: "Transfer" },
    ],
    simNaoOptions: [
      { value: "Sim", label: "Sim" },
      { value: "Não", label: "Não" },
    ],
    submitLabel: "Enviar solicitação",
    submitSendingLabel: "Enviando...",
    consentText: "Ao enviar, você concorda com o contato por e-mail ou WhatsApp.",
    errorMessage: "Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.",
    successTitle: "Mensagem enviada!",
    successMessage: "Recebemos seu pedido. Nossa equipe entrará em contato em breve.",
    successWhatsappLabel: "Falar pelo WhatsApp",
  },
  sidebar: {
    whatsappLabel: "WhatsApp",
    whatsappSubtext: "Clique para conversar",
    phoneLabel: "Telefone",
    phoneSubtext: "Seg–Sáb, das 8h às 20h",
    emailLabel: "E-mail",
    emailSubtext: "Resposta em até 24h",
    noteLabel: "Atendimento ágil",
    noteText: "Para respostas mais rápidas, utilize o WhatsApp informando data, trajeto e quantidade de passageiros.",
  },
};
