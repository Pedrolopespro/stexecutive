import type { HomeContentDict } from "@/lib/i18n/types";

export const homePt: HomeContentDict = {
  meta: {
    title: "Transporte Executivo em Brasília | Van e SUV — ST Executive",
    description:
      "Transporte executivo em Brasília com motorista profissional. SUVs e vans para empresas, embaixadas, eventos e transfer aeroporto. Solicite orçamento no WhatsApp.",
    keywords: [
      "transporte executivo brasília",
      "vans executivas brasília",
      "aluguel de van brasília",
      "SUV executiva brasília",
      "transfer aeroporto brasília",
      "transporte para eventos brasília",
      "transporte corporativo brasília",
      "transporte para embaixadas brasília",
    ],
  },

  hero: {
    eyebrow: "ST Executive",
    titleLine1: "Transporte Executivo",
    titleLine2: "Premium em",
    titleEmphasis: "Brasília",
    subtitle: "Atendimento para empresas, eventos, aeroportos, hotéis, embaixadas e turismo executivo.",
    supportText: "Vans executivas, carros premium e motoristas profissionais com atendimento 24h, pontualidade, conforto e segurança.",
    ctaPrimary: "Solicitar orçamento",
    ctaSecondary: "Conhecer serviços",
    ctaSecondaryMobile: "Serviços",
    ctaPrimaryMobile: "Orçamento",
    ctaFormulario: "Prefiro enviar por escrito",
    microcopy: "Informe data, horário, trajeto e quantidade de passageiros.",
  },

  featuresBar: [
    { title: "Atendimento 24h", sub: "Todos os dias da semana" },
    { title: "Segurança e Pontualidade", sub: "Compromisso com seu tempo" },
    { title: "Motoristas Profissionais", sub: "Experientes e certificados" },
    { title: "Frota Premium", sub: "Vans e carros executivos" },
    { title: "Atuação em Brasília", sub: "E região do DF" },
  ],

  clientsBar: {
    label: "Quem já confiou na ST Executive",
  },

  services: {
    eyebrow: "Serviços",
    heading: "Soluções para cada operação",
    subtitle: "Escolha o serviço ideal para sua empresa, evento ou deslocamento.",
    moreLabel: "Saiba mais",
    items: [
      {
        title: "Van Executiva",
        shortText: "Transporte para grupos, equipes, convidados e eventos.",
        description: "Vans com motorista profissional para eventos, transfer aeroporto, empresas e deslocamentos planejados.",
        highlights: ["Grupos e equipes", "Eventos e congressos", "Transfer aeroporto"],
        ctaText: "Solicitar van executiva",
        serviceKey: "vans",
        featured: true,
      },
      {
        title: "SUV Executiva",
        shortText: "Conforto e discrição para executivos e convidados especiais.",
        description: "SUVs executivas para reuniões, recepção de clientes, agendas corporativas e deslocamentos individuais.",
        highlights: ["Executivos e convidados", "Reuniões e agendas", "Atendimento individual"],
        ctaText: "Consultar SUV executiva",
        serviceKey: "executivo",
      },
      {
        title: "Transfer Aeroporto",
        shortText: "Traslado pontual para embarques e desembarques.",
        description: "Serviço agendado para o Aeroporto de Brasília, com motorista profissional e planejamento de horário.",
        highlights: ["Embarques e desembarques", "Horário agendado", "Espaço para bagagens"],
        ctaText: "Solicitar transfer",
        serviceKey: "transfer",
      },
      {
        title: "Eventos",
        shortText: "Logística de transporte para eventos corporativos, shows e grupos.",
        description: "Organização de ida, retorno e múltiplos deslocamentos para convidados, equipes, staff e participantes.",
        highlights: ["Eventos corporativos", "Shows e produções", "Ida e volta planejadas"],
        ctaText: "Orçar transporte para evento",
        serviceKey: "eventos",
      },
      {
        title: "Embaixadas e Autoridades",
        shortText: "Atendimento discreto para operações sensíveis.",
        description: "Transporte executivo com foco em discrição, pontualidade e apresentação profissional.",
        highlights: ["Discrição e sigilo", "Pontualidade garantida", "Motorista preparado"],
        ctaText: "Falar com a equipe",
        serviceKey: "executivo",
      },
      {
        title: "Ônibus e Micro-ônibus",
        shortText: "Soluções sob consulta para grupos maiores.",
        description: "Opções para operações com maior volume de passageiros, conforme disponibilidade e necessidade.",
        highlights: ["Grupos maiores", "Eventos e excursões", "Solução sob consulta"],
        ctaText: "Solicitar proposta",
        contatoFallback: true,
      },
    ],
  },

  vansSection: {
    badge: "Somos especialistas",
    heading: "Vans executivas para grupos em Brasília",
    paragraph: "A solução ideal para empresas, eventos e transfer aeroporto que precisam transportar pessoas com conforto, segurança e pontualidade.",
    bullets: ["Grupos e equipes", "Eventos e congressos", "Transfer aeroporto", "Motorista profissional", "Veículos climatizados", "Roteiro planejado"],
    ctaLabel: "Solicitar orçamento de van",
  },

  fleetSection: {
    badge: "Frota executiva",
    heading: "Frota executiva para diferentes demandas",
    subtitleParts: [
      { plain: "Veículos adequados para", emphasis: "grupos" },
      { plain: "", emphasis: "executivos" },
      { plain: "", emphasis: "eventos" },
      { plain: "", emphasis: "operações corporativas" },
    ],
    differentials: [
      { title: "Veículos revisados", sub: "e higienizados" },
      { title: "Seguro total", sub: "para passageiros" },
      { title: "Conforto e espaço", sub: "para cada necessidade" },
      { title: "Pontualidade", sub: "em todos os trajetos" },
    ],
    moreLabel: "Saiba mais",
    ctaLabel: "Consultar frota disponível",
    requestLabel: "Solicitar este veículo",
    requestMessageTemplate:
      "Olá, vim do site da ST Executive e gostaria de um orçamento para {veiculo} ({capacidade}).",
    items: [
      {
        src: "/images/content/van.webp",
        imgPos: "object-center",
        label: "Van Executiva em Brasília",
        capacity: "15 a 18 passageiros",
        model: "Mercedes-Benz Sprinter",
        desc: "Van executiva com motorista para grupos, transfer aeroporto, eventos corporativos e operações em Brasília.",
        serviceKey: "vans",
      },
      {
        src: "/images/content/mini van.webp",
        imgPos: "object-center",
        label: "Mini Van Executiva",
        capacity: "Até 7 passageiros",
        model: "Mercedes-Benz Vito ou similar",
        desc: "Mini van executiva ideal para pequenos grupos, recepção de convidados e deslocamentos corporativos em Brasília.",
        serviceKey: "minivan",
      },
      {
        src: "/images/content/seda executivo.webp",
        imgPos: "object-center",
        label: "Sedan Executivo",
        capacity: "Até 4 passageiros",
        model: "Toyota Corolla ou similar",
        desc: "Sedan executivo para reuniões, recepções de clientes, agendas corporativas e deslocamentos individuais em Brasília.",
        serviceKey: "executivo",
      },
      {
        src: "/images/content/commander.webp",
        imgPos: "object-center",
        label: "SUV Executiva",
        capacity: "4 a 6 passageiros",
        model: "Jeep Commander ou similar",
        desc: "SUV executiva com espaço, conforto e discrição para executivos, convidados especiais e embaixadas em Brasília.",
        serviceKey: "executivo",
      },
      {
        src: "/images/content/micro onibus.webp",
        imgPos: "object-center",
        label: "Micro-ônibus Executivo",
        capacity: "Até 25 passageiros",
        model: "Capacidade varia conforme configuração",
        desc: "Micro-ônibus executivo para grupos médios, eventos corporativos, excursões e operações planejadas em Brasília.",
        serviceKey: "microOnibus",
      },
      {
        src: "/images/content/onibus.webp",
        imgPos: "[object-position:50%_60%]",
        label: "Ônibus Executivo",
        capacity: "42 a 60 passageiros",
        model: "Ônibus padrão ou Double Decker",
        desc: "Ônibus executivo para grandes grupos, shows, congressos e operações de alto volume de passageiros em Brasília.",
        serviceKey: "onibus",
      },
    ],
  },

  quoteForm: {
    eyebrow: "Orçamento rápido",
    heading: "Peça seu orçamento em um minuto",
    subtitle:
      "Preencha os dados e envie. A conversa abre no WhatsApp já com tudo preenchido — você não precisa digitar nada de novo.",
    labels: {
      nome: "Nome",
      whatsapp: "WhatsApp",
      email: "E-mail",
      veiculo: "Veículo",
      descricao: "Descrição do atendimento",
      ddi: "Código do país",
    },
    placeholders: {
      nome: "Como podemos chamar você",
      whatsapp: "61 90000-0000",
      email: "seunome@empresa.com.br",
      descricao: "Data, horário, origem, destino, número de passageiros…",
      selecione: "Selecione",
    },
    dicaWhatsapp:
      "Selecione o país ao lado e digite o número com DDD.",
    veiculoOptions: [
      "Sedan Executivo",
      "Minivan",
      "Van Executiva",
      "SUV Executiva",
      "Micro-ônibus",
      "Ônibus",
    ],
    tituloMobile: "Solicite sua cotação",
    subtituloMobile: "Preencha os dados abaixo e receba seu orçamento personalizado.",
    diferenciais: [
      { linha1: "Atendimento", linha2: "rápido e seguro" },
      { linha1: "Resposta em", linha2: "até 1 minuto" },
      { linha1: "Excelência em", linha2: "cada detalhe" },
    ],
    submitLabel: "Enviar pelo WhatsApp",
    footnote: "Resposta pelo WhatsApp. Seus dados são usados apenas para responder a este pedido.",
    sucesso: {
      tituloLinha1: "Pedido enviado",
      tituloLinha2: "com sucesso",
      itemWhatsapp: "Recebemos seu pedido e já preenchemos a mensagem no WhatsApp para agilizar o atendimento.",
      itemToque: "Se o WhatsApp não abrir automaticamente, toque no botão abaixo.",
      itemEmail: "Também registramos o seu pedido por e-mail, então ele não se perde.",
      proximoRotulo: "Próximo passo:",
      proximoTexto: "abrir e enviar a mensagem no WhatsApp.",
      abrirWhatsapp: "Abrir WhatsApp",
      novoPedido: "Fazer novo pedido",
      voltarSite: "Voltar ao site",
      emailOk: "Também registramos o seu pedido por e-mail, então ele não se perde.",
      emailFalha: "Não conseguimos registrar por e-mail agora, mas o pedido pelo WhatsApp está valendo.",
    },

    messageTemplate:
      "Olá, vim do site da ST Executive e gostaria de um orçamento.\n\nNome: {nome}\nWhatsApp: {whatsapp}\nE-mail: {email}\nVeículo: {veiculo}\nAtendimento: {descricao}",
  },


  testimonialsSection: {
    eyebrow: "Depoimentos",
    heading: "Confiança em operações reais",
    subtitle: "A ST Executive atende empresas, eventos, artistas, instituições e convidados especiais em Brasília.",
    stats: [
      { title: "Mais de 15 anos", sub: "de experiência" },
      { title: "Centenas de clientes", sub: "atendidos" },
      { title: "{nota} no Google", sub: "em {qtd} avaliações" },
      { title: "Compromisso com", sub: "segurança e excelência" },
    ],
    items: [
      { text: "Ótima experiência com a ST Executive. Serviço pontual, conforto, segurança e atendimento de qualidade. Recomendo para transfer, eventos e transporte corporativo.", name: "Bolivas Burguer Artesanal", company: "Avaliação no Google" },
      { text: "Excelente atendimento! Tanto a equipe administrativa, sempre atenciosa e eficiente, quanto os motoristas, que demonstram profissionalismo, educação e cordialidade no dia a dia.", name: "Fernanda Carvalho", company: "Avaliação no Google" },
      { text: "Empresa séria, pontual e com atendimento diferenciado em Brasília. Excelente para transfer aeroporto, eventos, viagens e transporte executivo. Recomendo!", name: "Silvio Ferreira", company: "Avaliação no Google" },
      { text: "Servicio excelente, vehículos limpios y modernos. Conductor André muy profesional. Recomendable.", name: "Belen Callegari", company: "Avaliação no Google" },
      { text: "A empresa foi extremamente pontual, organizada e muito profissional durante todo o atendimento. Demonstraram muita honestidade, responsabilidade e cuidado. Recomendo com tranquilidade.", name: "Maria Eustáquia Liotto", company: "Avaliação no Google" },
      { text: "Prestação de serviço nota 10, motoristas educados, simpáticos, recomendo.", name: "Oscar Martins", company: "Avaliação no Google" },
    ],
    googleCta: {
      title: "Sua experiência importa",
      subtitle: "Avalie a ST Executive no Google e ajude outros clientes a nos encontrar.",
      buttonLabel: "Deixar avaliação",
      readLabel: "Ler as {qtd} avaliações",
    },
  },

  audienceSection: {
    eyebrow: "Para quem atendemos",
    heading: "Atendimento para empresas, eventos e convidados especiais",
    subtitlePlain: "Soluções de transporte executivo com pontualidade, conforto e segurança para atender diferentes necessidades em",
    subtitleEmphasis: "Brasília e região.",
    items: [
      { title: "Empresas", text: "Transporte para equipes, clientes e agendas corporativas com conforto e discrição.", bullets: ["Reuniões e visitas", "Transporte de funcionários", "Contratos corporativos"] },
      { title: "Eventos corporativos", text: "Soluções para congressos, feiras, convenções e eventos empresariais de todos os portes.", bullets: ["Congressos e feiras", "Convidados e palestrantes", "Logística de transporte"] },
      { title: "Shows e produções", text: "Transporte para artistas, equipes, staff e convidados com total segurança e sigilo.", bullets: ["Artistas e bandas", "Staff e produção", "Infraestrutura completa"] },
      { title: "Embaixadas", text: "Atendimento discreto e profissional para autoridades e representantes internacionais.", bullets: ["Autoridades e diplomatas", "Segurança e privacidade", "Motoristas especializados"] },
      { title: "Aeroporto", text: "Transfer para embarques e desembarques com pontualidade e acompanhamento de voo.", bullets: ["Transfer in/out", "Acompanhamento de voo", "Meet & Greet"] },
      { title: "Hotéis e grupos", text: "Recepção e deslocamento de hóspedes, turistas e grupos com conforto e agilidade.", bullets: ["Hospedagens e turismo", "City tour e passeios", "Grupos e excursões"] },
    ],
  },

  processSection: {
    eyebrow: "Processo",
    heading: "Como contratar",
    subtitle: "Quatro passos. Rápido e sem complicações.",
    steps: [
      { number: "01", title: "Envie sua demanda", text: "Informe data, trajeto e quantidade de passageiros." },
      { number: "02", title: "Receba a proposta", text: "A equipe indica o veículo ideal." },
      { number: "03", title: "Confirme o serviço", text: "A operação é organizada com antecedência." },
      { number: "04", title: "Transporte realizado", text: "Motorista e veículo no horário combinado." },
    ],
    ctaBar: {
      title: "Precisa de um transporte executivo para sua empresa ou evento?",
      subtitle: "Fale com nossa equipe e receba uma proposta personalizada.",
      buttonLabel: "Solicitar orçamento",
    },
  },

  aboutSection: {
    badge: "Sobre a empresa",
    heading: "+15 Anos no Mercado",
    paragraphs: [
      "A ST Executive oferece transporte executivo em Brasília para empresas, aeroportos, eventos, casamentos, viagens e grupos, com atendimento personalizado e foco em excelência.",
      "Contamos com frota moderna, incluindo carros executivos, Mercedes Vito, vans, micro-ônibus e ônibus, além de motoristas experientes para garantir conforto, segurança, discrição e pontualidade em cada trajeto.",
    ],
    ctaPrimary: "Solicitar orçamento",
    ctaSecondary: "Conhecer serviços",
    yearsBadgeLine1: "Anos no",
    yearsBadgeLine2: "Mercado",
    differentials: [
      { title: "Experiência e Confiança", sub: "Mais de 15 anos de atuação em transporte executivo." },
      { title: "Frota Premium", sub: "Veículos novos, revisados e com padrão executivo." },
      { title: "Pontualidade Garantida", sub: "Compromisso com horários e roteiros." },
      { title: "Atendimento 24h", sub: "Suporte todos os dias da semana." },
      { title: "Segurança e Discrição", sub: "Motoristas qualificados e treinados." },
    ],
    ctaBar: {
      title: "Precisa de transporte executivo para sua empresa ou evento?",
      subtitle: "Fale com nossa equipe e receba uma proposta personalizada.",
      buttonLabel: "Solicitar orçamento",
    },
  },

  semanticBlock:
    "A ST Executive é uma empresa de transporte executivo em Brasília. Atua com vans executivas, SUVs executivas, transfer aeroporto, transporte para eventos, empresas, embaixadas, grupos e operações especiais. A empresa atende com motoristas profissionais, frota executiva, pontualidade, segurança e organização.",

  faqSection: {
    eyebrow: "FAQ",
    heading: "Dúvidas frequentes",
    subtitle: "Se não encontrar o que procura, fale pelo WhatsApp.",
    buttonLabel: "Perguntar no WhatsApp",
    items: [
      { question: "A ST Executive oferece van executiva em Brasília?", answer: "Sim. A empresa oferece vans executivas com motorista para empresas, eventos, grupos e transfer aeroporto." },
      { question: "O serviço inclui motorista?", answer: "Sim. Todos os serviços são realizados com motorista profissional." },
      { question: "Atende eventos corporativos?", answer: "Sim. A ST Executive atende eventos corporativos, shows, congressos, produções e grupos." },
      { question: "Faz transfer para o Aeroporto de Brasília?", answer: "Sim. O serviço pode ser agendado para embarques e desembarques." },
      { question: "Atende embaixadas e convidados especiais?", answer: "Sim. A empresa realiza atendimentos discretos e personalizados." },
      { question: "Como solicitar orçamento?", answer: "Pelo WhatsApp, informando data, trajeto, horário e quantidade de passageiros." },
    ],
  },

  ctaFinal: {
    title: "Precisa organizar um transporte em Brasília?",
    subtitle: "Fale com a ST Executive e receba uma proposta personalizada.",
    ctaText: "Solicitar orçamento pelo WhatsApp",
    microcopy: "Atendimento para empresas, eventos, grupos e operações especiais.",
  },
};
