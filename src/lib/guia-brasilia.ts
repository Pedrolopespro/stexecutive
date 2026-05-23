// ============================================
// Guia Brasília — Dados editoriais dos artigos
// ============================================

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] };

export interface GuiaArtigo {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  content: ContentBlock[];
  relatedSlugs: string[];
  relatedServiceHref?: string;
  relatedServiceLabel?: string;
}

// ─────────────────────────────────────────────
// ARTIGOS
// ─────────────────────────────────────────────

export const GUIA_ARTIGOS: GuiaArtigo[] = [
  // ── Artigo 1 ────────────────────────────────
  {
    slug: "primeira-vez-em-brasilia",
    metaTitle: "Primeira vez em Brasília: dicas de chegada, hospedagem e deslocamento",
    metaDescription:
      "Vai visitar Brasília pela primeira vez? Veja dicas sobre aeroporto, onde ficar, como se deslocar, pontos turísticos e como planejar melhor sua chegada.",
    keywords: [
      "primeira vez em Brasília",
      "dicas para viajar para Brasília",
      "como se deslocar em Brasília",
      "onde ficar em Brasília",
      "turismo em Brasília",
      "Aeroporto JK",
    ],
    title: "Primeira vez em Brasília: guia com dicas de chegada, hospedagem e deslocamento",
    summary:
      "Visitar Brasília pela primeira vez? Entenda como a cidade funciona, onde ficar, como chegar pelo Aeroporto JK e como planejar os deslocamentos.",
    image: "/images/content/aeroporto wild.png",
    imageAlt: "Aeroporto Internacional de Brasília JK — chegada e desembarque",
    relatedSlugs: ["onde-ficar-em-brasilia", "o-que-fazer-em-brasilia-em-poucas-horas", "viagem-a-trabalho-para-brasilia"],
    relatedServiceHref: "/transfer-aeroporto-brasilia",
    relatedServiceLabel: "Transfer aeroporto em Brasília",
    content: [
      {
        type: "paragraph",
        text: "Visitar Brasília pela primeira vez pode ser uma experiência surpreendente. A cidade é diferente de outras capitais brasileiras: foi planejada, tem grandes avenidas, setores bem definidos, distâncias amplas e uma lógica urbana própria.",
      },
      {
        type: "paragraph",
        text: "Por isso, antes de chegar, vale entender alguns pontos importantes sobre hospedagem, deslocamento, aeroporto, regiões da cidade e principais lugares para conhecer.",
      },
      { type: "h2", text: "Como Brasília é organizada" },
      {
        type: "paragraph",
        text: "Brasília funciona por setores. Isso significa que muitas atividades da cidade ficam concentradas em áreas específicas:",
      },
      {
        type: "list",
        items: [
          "Setor Hoteleiro Norte e Sul",
          "Setor Comercial e Bancário",
          "Setor de Embaixadas",
          "Esplanada dos Ministérios",
          "Asa Sul e Asa Norte",
          "Lago Sul e Lago Norte",
        ],
      },
      {
        type: "paragraph",
        text: "Essa organização ajuda a cidade a funcionar melhor, mas pode confundir quem chega sem conhecer. Ao montar sua viagem, não olhe apenas o nome do hotel ou do local do compromisso — veja também a região e a distância entre os pontos da sua agenda.",
      },
      { type: "h2", text: "Chegada pelo Aeroporto JK" },
      {
        type: "paragraph",
        text: "O Aeroporto Internacional de Brasília — Presidente Juscelino Kubitschek (Aeroporto JK) é a principal porta de entrada da cidade. Ele fica relativamente próximo da região central, mas o tempo de deslocamento pode variar de acordo com o horário, o trânsito e o destino final.",
      },
      {
        type: "paragraph",
        text: "Quem chega para reunião, evento ou compromisso com hora marcada deve considerar uma margem de segurança que inclui: desembarque, retirada de bagagem, deslocamento até o hotel, check-in e trânsito até o compromisso.",
      },
      { type: "h2", text: "Onde ficar em Brasília na primeira viagem" },
      {
        type: "paragraph",
        text: "Para quem visita Brasília pela primeira vez, as regiões mais práticas costumam ser o Setor Hoteleiro Norte e o Setor Hoteleiro Sul. Essas regiões ficam próximas de pontos importantes como shoppings, restaurantes, Esplanada dos Ministérios e principais cartões-postais da cidade.",
      },
      {
        type: "paragraph",
        text: "O Lago Sul e o Lago Norte podem fazer sentido para compromissos específicos ou eventos privados, mas exigem mais atenção ao deslocamento.",
      },
      { type: "h2", text: "Como se deslocar em Brasília" },
      {
        type: "paragraph",
        text: "Brasília é uma cidade ampla. Em muitos casos, caminhar de um ponto a outro não é tão simples quanto parece no mapa. As principais formas de deslocamento são:",
      },
      {
        type: "list",
        items: [
          "Carro por aplicativo",
          "Táxi",
          "Metrô",
          "Ônibus",
          "Carro alugado",
          "Transporte privativo agendado",
        ],
      },
      {
        type: "paragraph",
        text: "Para turismo leve e deslocamentos simples, aplicativos podem funcionar bem. Para reuniões, eventos, grupos, horários rígidos ou chegada de convidados, o transporte previamente agendado pode trazer mais previsibilidade.",
      },
      { type: "h2", text: "O que conhecer na primeira vez em Brasília" },
      {
        type: "list",
        items: [
          "Esplanada dos Ministérios",
          "Congresso Nacional",
          "Catedral Metropolitana",
          "Praça dos Três Poderes",
          "Torre de TV",
          "Memorial JK",
          "Ponte JK",
          "Lago Paranoá e Pontão do Lago Sul",
        ],
      },
      { type: "h2", text: "Erros comuns de quem visita Brasília pela primeira vez" },
      {
        type: "list",
        items: [
          "Escolher hotel sem olhar a localização",
          "Marcar reuniões muito próximas uma da outra",
          "Subestimar as distâncias",
          "Deixar transporte para decidir na última hora",
          "Tentar conhecer muitos pontos turísticos em pouco tempo",
          "Não considerar o horário do voo de volta",
        ],
      },
      { type: "h2", text: "Conclusão" },
      {
        type: "paragraph",
        text: "A primeira viagem a Brasília fica muito melhor quando você entende a lógica da cidade antes de chegar. Escolher bem onde ficar, calcular os deslocamentos e montar um roteiro compatível com o tempo disponível ajuda a evitar atrasos e torna a experiência mais tranquila.",
      },
      {
        type: "faq",
        items: [
          { q: "Brasília é fácil para turistas?", a: "Sim, mas exige planejamento. A cidade tem pontos turísticos bem distribuídos e grandes distâncias entre algumas regiões." },
          { q: "Qual a melhor região para ficar em Brasília pela primeira vez?", a: "O Setor Hoteleiro Norte e o Setor Hoteleiro Sul costumam ser boas opções para quem quer praticidade." },
          { q: "O Aeroporto JK fica longe do centro?", a: "Não fica muito distante da região central, mas o tempo de deslocamento varia conforme o horário e o destino." },
          { q: "Vale a pena alugar carro em Brasília?", a: "Depende do roteiro. Para quem terá muitos deslocamentos, pode ser útil. Para quem vem a trabalho ou evento, o transporte agendado pode ser mais prático." },
          { q: "Dá para conhecer Brasília em um dia?", a: "Dá para conhecer alguns pontos principais, desde que o roteiro seja bem planejado." },
        ],
      },
    ],
  },

  // ── Artigo 2 ────────────────────────────────
  {
    slug: "onde-ficar-em-brasilia",
    metaTitle: "Onde ficar em Brasília: melhores regiões para hospedagem e deslocamento",
    metaDescription:
      "Veja onde ficar em Brasília de acordo com sua viagem. Entenda as melhores regiões para hospedagem, distância do aeroporto, eventos, reuniões e pontos turísticos.",
    keywords: [
      "onde ficar em Brasília",
      "melhores regiões para se hospedar em Brasília",
      "hotel em Brasília",
      "Setor Hoteleiro Norte",
      "Setor Hoteleiro Sul",
      "hotel perto da Esplanada",
    ],
    title: "Onde ficar em Brasília: como escolher hotel pensando em localização e deslocamento",
    summary:
      "A localização do hotel pode facilitar ou dificultar toda a sua agenda em Brasília. Veja como escolher a melhor região conforme o objetivo da viagem.",
    image: "/images/content/hero site.png",
    imageAlt: "Brasília — vista aérea com Esplanada dos Ministérios ao fundo",
    relatedSlugs: ["primeira-vez-em-brasilia", "eventos-em-brasilia", "viagem-a-trabalho-para-brasilia"],
    relatedServiceHref: "/transfer-aeroporto-brasilia",
    relatedServiceLabel: "Transfer do aeroporto ao hotel",
    content: [
      {
        type: "paragraph",
        text: "Escolher onde ficar em Brasília é uma das decisões mais importantes da viagem. A cidade é planejada, ampla e dividida por setores. Por isso, a localização do hotel pode facilitar ou dificultar bastante sua experiência, principalmente se você vem para reuniões, eventos, turismo rápido ou compromissos oficiais.",
      },
      { type: "h2", text: "Antes de escolher o hotel, entenda o motivo da viagem" },
      {
        type: "paragraph",
        text: "A melhor região para se hospedar em Brasília depende diretamente do objetivo da viagem: turismo, reunião de trabalho, congresso, evento corporativo, compromisso em órgão público, audiência jurídica, visita a embaixadas, viagem em família ou agenda diplomática. Cada situação pede uma estratégia diferente.",
      },
      { type: "h2", text: "Setor Hoteleiro Norte" },
      {
        type: "paragraph",
        text: "O Setor Hoteleiro Norte é uma das regiões mais conhecidas para hospedagem em Brasília. Costuma ser uma boa escolha para quem quer ficar próximo de shoppings, restaurantes, áreas centrais e pontos turísticos. Também pode ser interessante para quem tem compromissos na Esplanada dos Ministérios, Setor Comercial ou Setor Bancário.",
      },
      { type: "h2", text: "Setor Hoteleiro Sul" },
      {
        type: "paragraph",
        text: "O Setor Hoteleiro Sul também é uma opção tradicional. Assim como o Norte, oferece boa localização para quem precisa acessar diferentes áreas da cidade. A escolha entre Norte e Sul pode depender do hotel, do preço, da disponibilidade e da proximidade com os compromissos principais.",
      },
      { type: "h2", text: "Asa Sul e Asa Norte" },
      {
        type: "paragraph",
        text: "A Asa Sul e a Asa Norte contam com comércio, restaurantes, serviços e opções de hospedagem. Podem ser boas alternativas para quem quer ficar em uma área mais residencial ou próxima de compromissos específicos. Para quem vai passar mais dias em Brasília, essas regiões oferecem uma experiência mais local.",
      },
      { type: "h2", text: "Lago Sul e Lago Norte" },
      {
        type: "paragraph",
        text: "O Lago Sul e o Lago Norte são regiões mais amplas, residenciais e tranquilas. Podem ser boas escolhas para eventos privados, compromissos específicos ou hospedagens mais reservadas. É importante considerar a distância até o aeroporto, Esplanada e outros pontos da agenda.",
      },
      { type: "h2", text: "Hotel perto do Aeroporto de Brasília vale a pena?" },
      {
        type: "paragraph",
        text: "Depende do tipo de viagem. Se você vai passar poucas horas na cidade, tem conexão longa ou precisa embarcar muito cedo, ficar perto do Aeroporto JK pode ser prático. Mas se a sua agenda acontece na região central ou em centros de eventos, o hotel mais perto do aeroporto nem sempre é a melhor escolha.",
      },
      { type: "h2", text: "Tabela rápida: melhores regiões para ficar em Brasília" },
      {
        type: "table",
        headers: ["Região", "Melhor para", "Atenção"],
        rows: [
          ["Setor Hoteleiro Norte", "Turismo, negócios, primeira visita", "Pode ter grande movimento em horários de pico"],
          ["Setor Hoteleiro Sul", "Turismo, reuniões, acesso central", "Verificar distância até o compromisso principal"],
          ["Asa Sul", "Restaurantes, comércio, estadias mais locais", "Depende do endereço exato"],
          ["Asa Norte", "Serviços, comércio, compromissos variados", "Pode ficar distante de alguns eventos"],
          ["Lago Sul", "Eventos privados, experiência mais tranquila", "Deslocamentos podem ser maiores"],
          ["Perto do Aeroporto JK", "Conexões, estadias curtas, voos cedo", "Nem sempre é melhor para turismo ou negócios"],
        ],
      },
      { type: "h2", text: "Conclusão" },
      {
        type: "paragraph",
        text: "Escolher onde ficar em Brasília não é apenas uma decisão de hospedagem — é uma decisão de logística. Uma boa localização pode economizar tempo, evitar atrasos e deixar sua viagem mais confortável. Antes de reservar, pense no roteiro completo: aeroporto, hotel, compromissos, eventos e retorno.",
      },
      {
        type: "faq",
        items: [
          { q: "Qual é a melhor região para se hospedar em Brasília?", a: "Para a maioria dos visitantes, o Setor Hoteleiro Norte e o Setor Hoteleiro Sul são opções práticas." },
          { q: "Onde ficar em Brasília para turismo?", a: "Regiões centrais facilitam o acesso aos principais pontos turísticos." },
          { q: "Onde ficar em Brasília para trabalho?", a: "Depende da agenda. O ideal é escolher hotel perto dos principais compromissos." },
          { q: "Vale a pena ficar perto do Aeroporto JK?", a: "Vale para conexões, voos cedo ou estadias muito curtas. Para turismo e negócios, nem sempre é a melhor opção." },
          { q: "Brasília é uma cidade boa para se deslocar?", a: "Sim, mas as distâncias podem ser grandes. Por isso, vale planejar os trajetos com antecedência." },
        ],
      },
    ],
  },

  // ── Artigo 3 ────────────────────────────────
  {
    slug: "viagem-a-trabalho-para-brasilia",
    metaTitle: "Viagem a trabalho para Brasília: hotéis, reuniões e deslocamento",
    metaDescription:
      "Vai fazer uma viagem a trabalho para Brasília? Veja como planejar chegada, hotel, reuniões, deslocamentos, horários e retorno ao aeroporto.",
    keywords: [
      "viagem a trabalho para Brasília",
      "viagem corporativa Brasília",
      "Brasília para negócios",
      "reunião em Brasília",
      "hotel para viagem corporativa em Brasília",
      "transporte em Brasília",
    ],
    title: "Viagem a trabalho para Brasília: guia de hotéis, reuniões e deslocamento",
    summary:
      "A capital recebe executivos, advogados e equipes corporativas todos os dias. Veja como planejar chegada, hotel, reuniões e logística para uma agenda produtiva.",
    image: "/images/content/SUV wild.png",
    imageAlt: "SUV executivo em Brasília para viagem corporativa — ST Executive",
    relatedSlugs: ["onde-ficar-em-brasilia", "eventos-em-brasilia"],
    relatedServiceHref: "/transporte-executivo-brasilia",
    relatedServiceLabel: "Transporte executivo em Brasília",
    content: [
      {
        type: "paragraph",
        text: "Fazer uma viagem a trabalho para Brasília exige planejamento. A capital recebe empresários, executivos, advogados, consultores, representantes comerciais, autoridades e equipes corporativas todos os dias.",
      },
      {
        type: "paragraph",
        text: "A cidade concentra órgãos públicos, tribunais, embaixadas, empresas, centros de eventos e espaços institucionais. Por isso, organizar bem chegada, hospedagem e deslocamento pode evitar atrasos e tornar a agenda mais produtiva.",
      },
      { type: "h2", text: "Planeje a chegada pelo Aeroporto JK" },
      {
        type: "paragraph",
        text: "A maioria das viagens corporativas para Brasília começa pelo Aeroporto JK. Em uma viagem profissional, o deslocamento não começa quando o carro sai do aeroporto. Antes disso, existem etapas como desembarque, espera por bagagem, contato com motorista, saída do terminal e trajeto até o hotel ou reunião.",
      },
      {
        type: "paragraph",
        text: "Se a primeira reunião acontece no mesmo dia da chegada, evite marcar horários muito próximos ao voo.",
      },
      { type: "h2", text: "Escolha o hotel de acordo com a agenda" },
      {
        type: "paragraph",
        text: "Em uma viagem a trabalho para Brasília, o melhor hotel não é necessariamente o mais barato ou o mais luxuoso — é aquele que faz sentido para a sua agenda.",
      },
      {
        type: "list",
        items: [
          "Onde será a primeira reunião",
          "Se haverá mais de um compromisso",
          "Distância até o aeroporto",
          "Distância até restaurantes ou locais de almoço",
          "Tempo de retorno ao aeroporto",
        ],
      },
      { type: "h2", text: "Brasília para reuniões e compromissos oficiais" },
      {
        type: "paragraph",
        text: "Brasília recebe muitos profissionais por causa de agendas ligadas a órgãos públicos, tribunais, ministérios, autarquias, embaixadas e entidades nacionais. Nesses casos, pontualidade e previsibilidade são fundamentais. Atrasos podem comprometer reuniões importantes, audiências, visitas institucionais ou apresentações comerciais.",
      },
      { type: "h2", text: "Como montar uma agenda eficiente" },
      {
        type: "paragraph",
        text: "Uma agenda corporativa em Brasília deve considerar deslocamento, intervalos e possíveis atrasos. O ideal é evitar compromissos muito colados, principalmente em regiões diferentes. Exemplos de etapas a considerar:",
      },
      {
        type: "list",
        items: [
          "Chegada ao Aeroporto JK",
          "Deslocamento até a primeira reunião",
          "Almoço próximo à região do compromisso",
          "Segunda reunião no período da tarde",
          "Deslocamento de retorno ao aeroporto com margem de segurança",
        ],
      },
      { type: "h2", text: "Transporte durante viagem corporativa" },
      {
        type: "paragraph",
        text: "Para deslocamentos simples, aplicativos podem funcionar. Para executivos, equipes, convidados, palestrantes ou agendas com horários rígidos, o transporte agendado pode trazer mais controle. O transporte privativo não precisa ser tratado como luxo — em muitos casos, é uma ferramenta de organização, pontualidade e redução de risco.",
      },
      { type: "h2", text: "Erros comuns em viagens a trabalho para Brasília" },
      {
        type: "list",
        items: [
          "Marcar reunião logo após o horário previsto de pouso",
          "Escolher hotel longe dos compromissos",
          "Não calcular o retorno ao aeroporto",
          "Depender de transporte de última hora",
          "Não prever deslocamento entre reuniões",
          "Não planejar transporte para equipe ou convidados",
        ],
      },
      { type: "h2", text: "Conclusão" },
      {
        type: "paragraph",
        text: "Uma viagem a trabalho para Brasília pode ser muito produtiva quando a logística é planejada com atenção. Hospedagem, deslocamento, horários e localização dos compromissos devem ser pensados antes da chegada. Para agendas importantes ou recepção de convidados, organizar o transporte previamente traz mais segurança e previsibilidade.",
      },
      {
        type: "faq",
        items: [
          { q: "Qual a melhor região para ficar em uma viagem a trabalho para Brasília?", a: "Depende da agenda. Para compromissos centrais, os setores hoteleiros costumam ser práticos." },
          { q: "Quanto tempo devo deixar entre o voo e a reunião?", a: "O ideal é deixar uma margem confortável para desembarque, bagagem e deslocamento." },
          { q: "Brasília é boa para viagens corporativas?", a: "Sim. A cidade recebe muitas agendas profissionais, institucionais e corporativas." },
          { q: "Vale a pena contratar transporte agendado em viagem a trabalho?", a: "Para agendas importantes, equipes ou horários rígidos, pode ser uma escolha mais segura." },
          { q: "Onde acontecem muitos compromissos profissionais em Brasília?", a: "Esplanada dos Ministérios, setores comerciais, tribunais, embaixadas, centros empresariais e centros de eventos." },
        ],
      },
    ],
  },

  // ── Artigo 4 ────────────────────────────────
  {
    slug: "eventos-em-brasilia",
    metaTitle: "Eventos em Brasília: como planejar chegada, hotel e deslocamento",
    metaDescription:
      "Vai participar de eventos em Brasília? Veja como planejar aeroporto, hotel, deslocamento, chegada ao evento, transporte para grupos e retorno com segurança.",
    keywords: [
      "eventos em Brasília",
      "congressos em Brasília",
      "feiras em Brasília",
      "evento corporativo em Brasília",
      "transporte para eventos em Brasília",
      "logística para eventos",
    ],
    title: "Eventos em Brasília: guia para planejar chegada, hotel e deslocamento",
    summary:
      "Brasília recebe congressos, feiras, eventos corporativos e institucionais durante todo o ano. Veja como planejar logística, hospedagem e transporte para participar sem imprevistos.",
    image: "/images/content/van wild.png",
    imageAlt: "Van executiva para eventos em Brasília — ST Executive",
    relatedSlugs: ["onde-ficar-em-brasilia", "viagem-a-trabalho-para-brasilia"],
    relatedServiceHref: "/van-para-eventos-brasilia",
    relatedServiceLabel: "Van para eventos em Brasília",
    content: [
      {
        type: "paragraph",
        text: "Brasília recebe eventos durante todo o ano: congressos, feiras, encontros corporativos, seminários, eventos jurídicos, agendas políticas, eventos institucionais, shows, formaturas e reuniões empresariais movimentam a capital.",
      },
      {
        type: "paragraph",
        text: "Para quem vem de fora, participar de eventos em Brasília exige mais do que comprar passagem e reservar hotel. A experiência depende também de chegada, localização, deslocamento e organização da agenda.",
      },
      { type: "h2", text: "Confirme o local exato do evento" },
      {
        type: "paragraph",
        text: "Antes de escolher hotel ou comprar passagem, confirme o endereço exato do evento. Brasília tem diferentes centros de eventos, hotéis com estrutura para congressos, espaços corporativos, órgãos públicos, clubes, teatros e locais privados.",
      },
      {
        type: "list",
        items: [
          "Endereço completo e bairro ou setor",
          "Distância até o aeroporto e até o hotel",
          "Rotas de acesso e horários de maior movimento",
          "Opções de estacionamento ou embarque",
        ],
      },
      { type: "h2", text: "Escolha o hotel pensando no evento" },
      {
        type: "list",
        items: [
          "Proximidade do local do evento",
          "Tempo de deslocamento",
          "Acesso ao aeroporto",
          "Opções de alimentação próximas",
          "Facilidade para entrada e saída",
          "Necessidade de transporte em grupo",
        ],
      },
      { type: "h2", text: "Chegada pelo aeroporto" },
      {
        type: "paragraph",
        text: "Muitos participantes chegam em Brasília no mesmo dia do evento. Isso pode funcionar, mas exige atenção. Entre o pouso e a chegada ao local, existe um tempo que muita gente subestima: atraso de voo, desembarque, retirada de bagagem, check-in no hotel, troca de roupa e deslocamento até o evento. Se o evento começa cedo, talvez seja mais seguro chegar no dia anterior.",
      },
      { type: "h2", text: "Eventos com equipe, convidados ou palestrantes" },
      {
        type: "paragraph",
        text: "Quando a viagem envolve equipe, convidados, palestrantes ou autoridades, a logística fica mais sensível. Para grupos, utilizar vários carros separados pode gerar atrasos e desencontros. Em alguns casos, vans ou veículos previamente agendados facilitam a operação.",
      },
      { type: "h2", text: "Transporte para eventos em Brasília" },
      {
        type: "paragraph",
        text: "Para participantes individuais, aplicativos podem resolver deslocamentos simples. Para grupos, convidados especiais, palestrantes ou empresas, o transporte agendado pode ser mais adequado. Durante grandes eventos, a demanda por transporte pode aumentar, gerando espera e preço dinâmico. Por isso, para compromissos com horário marcado, o ideal é não depender totalmente do improviso.",
      },
      { type: "h2", text: "Eventos corporativos e imagem profissional" },
      {
        type: "paragraph",
        text: "Em eventos corporativos, a logística também influencia a imagem da empresa. Receber um palestrante com atraso, deixar convidados esperando ou improvisar transporte em cima da hora pode prejudicar a experiência. Organização transmite cuidado, profissionalismo e respeito pelo tempo das pessoas.",
      },
      { type: "h2", text: "Conclusão" },
      {
        type: "paragraph",
        text: "Participar de eventos em Brasília pode ser uma experiência muito mais tranquila quando a logística é planejada antes. A escolha do hotel, o horário do voo, o trajeto até o evento e o retorno ao aeroporto devem ser pensados como parte da viagem.",
      },
      {
        type: "faq",
        items: [
          { q: "Onde acontecem os principais eventos em Brasília?", a: "Brasília recebe eventos em centros de convenções, hotéis, espaços corporativos, órgãos públicos, arenas, clubes e espaços privados." },
          { q: "É melhor chegar no dia anterior ao evento?", a: "Quando o evento começa cedo ou tem grande importância, chegar no dia anterior costuma ser mais seguro." },
          { q: "Como escolher hotel para evento em Brasília?", a: "Escolha considerando distância até o evento, aeroporto, alimentação, segurança e facilidade de deslocamento." },
          { q: "Vale a pena contratar transporte para grupos em eventos?", a: "Sim, especialmente quando há equipe, convidados, palestrantes ou horários rígidos." },
          { q: "Aplicativo funciona bem em eventos?", a: "Pode funcionar, mas em horários de grande demanda pode haver demora, preço dinâmico ou falta de veículos." },
        ],
      },
    ],
  },

  // ── Artigo 5 ────────────────────────────────
  {
    slug: "o-que-fazer-em-brasilia-em-poucas-horas",
    metaTitle: "O que fazer em Brasília em poucas horas: roteiro rápido para visitantes",
    metaDescription:
      "Tem poucas horas livres em Brasília? Veja um roteiro rápido com Esplanada, Catedral, Praça dos Três Poderes, Ponte JK e dicas de deslocamento.",
    keywords: [
      "o que fazer em Brasília em poucas horas",
      "roteiro rápido em Brasília",
      "Brasília em 1 dia",
      "pontos turísticos de Brasília",
      "o que conhecer em Brasília",
      "turismo rápido em Brasília",
    ],
    title: "O que fazer em Brasília em poucas horas: roteiro rápido para visitantes",
    summary:
      "Entre reuniões ou antes do voo de volta? Com planejamento é possível conhecer os principais cartões-postais de Brasília mesmo em pouco tempo.",
    image: "/images/content/corolla wild.png",
    imageAlt: "Roteiro turístico em Brasília — pontos turísticos e deslocamento",
    relatedSlugs: ["primeira-vez-em-brasilia", "onde-ficar-em-brasilia"],
    relatedServiceHref: "/city-tour-brasilia",
    relatedServiceLabel: "City Tour em Brasília",
    content: [
      {
        type: "paragraph",
        text: "Tem poucas horas livres em Brasília? Muita gente chega à capital para reunião, congresso, audiência, evento ou conexão e acaba tendo um intervalo antes do próximo compromisso ou do voo de volta.",
      },
      {
        type: "paragraph",
        text: "Com planejamento, é possível conhecer alguns dos principais pontos da cidade mesmo em pouco tempo.",
      },
      { type: "h2", text: "Antes de montar o roteiro, veja quanto tempo você tem" },
      {
        type: "paragraph",
        text: "O primeiro passo é ser realista. Brasília tem grandes avenidas e pontos turísticos distribuídos em áreas diferentes. Antes de sair, considere:",
      },
      {
        type: "list",
        items: [
          "Horário do próximo compromisso ou voo",
          "Tempo de deslocamento até o aeroporto",
          "Necessidade de check-in e bagagem",
          "Tempo para alimentação",
          "Margem de segurança",
        ],
      },
      { type: "h2", text: "Roteiro de 2 horas em Brasília" },
      {
        type: "paragraph",
        text: "Com apenas 2 horas livres, o ideal é focar em uma região. Uma boa opção é passar pela Esplanada dos Ministérios e arredores:",
      },
      {
        type: "list",
        items: [
          "Catedral Metropolitana",
          "Esplanada dos Ministérios",
          "Congresso Nacional",
          "Praça dos Três Poderes",
        ],
      },
      { type: "h2", text: "Roteiro de 4 horas em Brasília" },
      {
        type: "list",
        items: [
          "Catedral Metropolitana",
          "Esplanada dos Ministérios",
          "Congresso Nacional",
          "Praça dos Três Poderes",
          "Passagem pela Ponte JK",
          "Parada para café ou almoço",
        ],
      },
      { type: "h2", text: "Roteiro de meio dia em Brasília" },
      {
        type: "list",
        items: [
          "Torre de TV",
          "Catedral Metropolitana",
          "Esplanada dos Ministérios",
          "Praça dos Três Poderes",
          "Ponte JK",
          "Pontão do Lago Sul (almoço ou café)",
        ],
      },
      { type: "h2", text: "Principais pontos para conhecer em pouco tempo" },
      { type: "h3", text: "Catedral Metropolitana" },
      { type: "paragraph", text: "Uma das obras mais conhecidas da cidade. É uma parada rápida e marcante, tanto pela arquitetura externa quanto pelo interior." },
      { type: "h3", text: "Esplanada dos Ministérios" },
      { type: "paragraph", text: "Um dos espaços mais simbólicos da capital. Mesmo em uma visita curta, passar por ali ajuda a entender a dimensão urbanística e política de Brasília." },
      { type: "h3", text: "Praça dos Três Poderes" },
      { type: "paragraph", text: "A Praça reúne símbolos do Executivo, Legislativo e Judiciário. Especialmente interessante para visitantes com interesse institucional, jurídico ou político." },
      { type: "h3", text: "Ponte JK" },
      { type: "paragraph", text: "Uma das imagens mais bonitas da cidade. Dependendo do horário, pode ser uma boa passagem para fotos e contemplação." },
      { type: "h3", text: "Pontão do Lago Sul" },
      { type: "paragraph", text: "Uma boa opção para uma pausa, almoço ou café com vista para o Lago Paranoá." },
      { type: "h2", text: "Cuidado com o voo de volta" },
      {
        type: "paragraph",
        text: "Se o roteiro acontece antes do embarque, tenha atenção redobrada. Considere o tempo até o aeroporto, trânsito, fila de segurança, despacho de bagagem e horário de embarque. Não vale a pena conhecer mais um ponto turístico e correr o risco de perder o voo.",
      },
      { type: "h2", text: "Conclusão" },
      {
        type: "paragraph",
        text: "Brasília pode ser conhecida mesmo em poucas horas, desde que o roteiro seja bem planejado. Com 2 horas, foque na Esplanada. Com 4 horas, inclua Ponte JK e uma parada rápida. Com meio dia, o roteiro pode ficar mais completo.",
      },
      {
        type: "faq",
        items: [
          { q: "Dá para conhecer Brasília em poucas horas?", a: "Sim. Com planejamento, é possível conhecer pontos como Catedral, Esplanada, Congresso e Praça dos Três Poderes." },
          { q: "O que fazer em Brasília com 2 horas livres?", a: "O ideal é focar na região da Esplanada dos Ministérios." },
          { q: "O que fazer em Brasília em 4 horas?", a: "É possível visitar Catedral, Esplanada, Praça dos Três Poderes, Ponte JK e fazer uma parada rápida." },
          { q: "Vale a pena sair do aeroporto durante uma conexão em Brasília?", a: "Depende do tempo disponível. É importante considerar deslocamento, segurança, check-in e horário de embarque." },
          { q: "Qual o melhor roteiro rápido para quem vem a trabalho?", a: "Um roteiro pela Catedral, Esplanada, Congresso e Praça dos Três Poderes costuma ser o mais prático." },
        ],
      },
    ],
  },
];

// Helper — busca artigo por slug
export function getArtigoPorSlug(slug: string): GuiaArtigo | undefined {
  return GUIA_ARTIGOS.find((a) => a.slug === slug);
}

// Helper — artigos relacionados
export function getArtigosRelacionados(slugs: string[]): GuiaArtigo[] {
  return slugs
    .map((s) => getArtigoPorSlug(s))
    .filter((a): a is GuiaArtigo => a !== undefined);
}
