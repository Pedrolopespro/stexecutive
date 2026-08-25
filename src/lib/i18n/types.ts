import type { NavKey, ServiceKey } from "@/lib/constants";

// ─────────────────────────────────────────────
// Compartilhado — Header / MobileMenu / Footer
// ─────────────────────────────────────────────

export interface ServiceLinkDict {
  key: ServiceKey;
  label: string;
  desc: string;
}

export interface NavDict {
  labels: Record<NavKey, string>;
  servicesDropdownLabel: string;
  ctaLabel: string;
  serviceLinks: ServiceLinkDict[];
  openMenuAriaLabel: string;
  closeMenuAriaLabel: string;
  newBadge: string;
  whatsappButtonLabel: string;
  whatsappSubtext: string;
}

export interface FooterDict {
  brandDescription: string;
  sectionHeaders: {
    services: string;
    company: string;
    contact: string;
  };
  serviceLinks: ServiceLinkDict[];
  companyLinks: { key: NavKey | "faq"; label: string; href: string }[];
  contact: {
    whatsapp: string;
    address: string;
  };
  copyright: string;
  tagline: string;
}

export interface CommonDict {
  whatsappMessage: string;
  eyebrowBrand: string;
  whatsappFloatingAriaLabel: string;
  whatsappFloatingLabel: string;
}

// ─────────────────────────────────────────────
// Página de serviço (template compartilhado)
// ─────────────────────────────────────────────

export interface Meta {
  title: string;
  description: string;
  keywords: string[];
}

export interface LabeledItem {
  label: string;
  desc: string;
}

export interface NumberedItem {
  number: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

export interface SpecItem {
  spec: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ServicePageContent {
  meta: Meta;
  canonicalPath: string; // ex: "aluguel-de-van-brasilia/" — sem barra inicial, com barra final

  hero: {
    image: string;
    imageAlt: string;
    titleLine1: string;
    titleEmphasis: string;
    titleLine2?: string;
    subtitle: string;
    ctaLabel: string;
    microcopy: string;
  };

  whatIs: {
    eyebrow: string;
    heading: string;
    paragraph: string;
  };

  fleet: {
    image: string;
    imageAlt: string;
    eyebrow: string;
    heading: string;
    paragraph: string;
    specs?: SpecItem[];
    checklist?: string[];
    tagsLabel?: string;
    tags?: LabeledItem[];
    ctaLabel: string;
  };

  useCases: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: LabeledItem[];
  };

  differentials: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: NumberedItem[];
  };

  process: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    steps: ProcessStep[];
    ctaLabel: string;
  };

  gallery?: {
    eyebrow: string;
    heading: string;
    images: GalleryImage[];
  };

  coverage?: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    locations: string[];
  };

  faq: {
    eyebrow: string;
    heading: string;
    items: FaqItem[];
  };

  semanticBlock: string; // texto sr-only para SEO/IA

  cta: {
    title: string;
    subtitle: string;
    ctaText: string;
    microcopy: string;
  };

  // ── Seções opcionais específicas de algumas páginas ──
  eventTypes?: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: LabeledItem[];
  };
  commonSituations?: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  comparisonTable?: {
    eyebrow: string;
    heading: string;
    headers: string[];
    rows: string[][];
  };
  companyBenefits?: {
    eyebrow: string;
    heading: string;
    items: LabeledItem[];
  };
  price?: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    factors?: string[];
    note?: string;
    ctaLabel?: string;
  };

  comparisonCards?: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    theme?: "light" | "dark";
    left: { label: string; items: string[] };
    right: { label: string; items: string[] };
  };

  contextSection?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stats: { number: string; label: string }[];
  };
}

// ─────────────────────────────────────────────
// Home
// ─────────────────────────────────────────────

export interface IconedItem {
  title: string;
  sub: string;
}

export interface ServiceItem {
  title: string;
  shortText: string;
  description: string;
  highlights: string[];
  ctaText: string;
  serviceKey?: import("@/lib/constants").ServiceKey;
  contatoFallback?: boolean;
  featured?: boolean;
}

export interface FleetItem {
  src: string;
  imgPos: string;
  label: string;
  capacity: string;
  model: string;
  desc: string;
  serviceKey: import("@/lib/constants").ServiceKey;
}

export interface TestimonialItem {
  text: string;
  name: string;
  company: string;
}

export interface AudienceItem {
  title: string;
  text: string;
  bullets: string[];
}

export interface HomeContentDict {
  meta: Meta;

  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEmphasis: string;
    subtitle: string;
    supportText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryMobile: string;
    ctaPrimaryMobile: string;
    microcopy: string;
  };

  featuresBar: IconedItem[];

  clientsBar: {
    label: string;
  };

  services: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceItem[];
    moreLabel: string;
  };

  vansSection: {
    badge: string;
    heading: string;
    paragraph: string;
    bullets: string[];
    ctaLabel: string;
  };

  fleetSection: {
    badge: string;
    heading: string;
    subtitleParts: { plain: string; emphasis: string }[];
    differentials: IconedItem[];
    items: FleetItem[];
    moreLabel: string;
    ctaLabel: string;
    /** Rótulo do botão de orçamento dentro de cada card de veículo. */
    requestLabel: string;
    /**
     * Mensagem que abre no WhatsApp a partir do card. Os marcadores
     * {veiculo} e {capacidade} são trocados pelos dados do próprio card,
     * para o pedido já chegar sabendo de qual veículo se trata.
     */
    requestMessageTemplate: string;
  };

  /**
   * Formulário curto de orçamento, logo abaixo da primeira tela.
   * Ao enviar, monta uma mensagem e abre o WhatsApp já preenchido —
   * não existe backend próprio guardando o pedido.
   */
  quoteForm: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    labels: {
      nome: string;
      whatsapp: string;
      email: string;
      veiculo: string;
      descricao: string;
    };
    placeholders: {
      nome: string;
      whatsapp: string;
      email: string;
      descricao: string;
      selecione: string;
    };
    /**
     * Dica sob o campo de WhatsApp. Existe porque parte do publico vem de
     * fora do Brasil (embaixadas, turnes, congressos) e precisa saber que
     * pode usar o numero do proprio pais.
     */
    dicaWhatsapp: string;
    veiculoOptions: string[];
    /** Titulo e subtitulo usados so no celular, onde nao ha o painel lateral. */
    tituloMobile: string;
    subtituloMobile: string;
    /** Tres diferenciais exibidos sobre a imagem, no painel do desktop. */
    diferenciais: { linha1: string; linha2: string }[];
    submitLabel: string;
    footnote: string;
    /** Tela mostrada depois do envio, no lugar do formulario. */
    sucesso: {
      tituloLinha1: string;
      tituloLinha2: string;
      itemWhatsapp: string;
      itemToque: string;
      itemEmail: string;
      proximoRotulo: string;
      proximoTexto: string;
      abrirWhatsapp: string;
      novoPedido: string;
      voltarSite: string;
      /** Confirmacao de que o pedido tambem foi registrado por e-mail. */
      emailOk: string;
      /** O e-mail falhou, mas o WhatsApp ja levou o pedido. */
      emailFalha: string;
    };

    /**
     * Modelo da mensagem enviada ao WhatsApp. Cada marcador e trocado pelo
     * valor digitado; linhas com campo vazio saem antes do envio.
     */
    messageTemplate: string;
  };


  testimonialsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    stats: IconedItem[];
    items: TestimonialItem[];
    googleCta: {
      title: string;
      subtitle: string;
      buttonLabel: string;
      /** Link para LER as avaliacoes. O buttonLabel abre o form de escrever. */
      readLabel: string;
    };
  };

  audienceSection: {
    eyebrow: string;
    heading: string;
    subtitlePlain: string;
    subtitleEmphasis: string;
    items: AudienceItem[];
  };

  processSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    steps: ProcessStep[];
    ctaBar: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
  };

  aboutSection: {
    badge: string;
    heading: string;
    paragraphs: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    yearsBadgeLine1: string;
    yearsBadgeLine2: string;
    differentials: IconedItem[];
    ctaBar: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
  };

  semanticBlock: string;

  faqSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    buttonLabel: string;
    items: FaqItem[];
  };

  ctaFinal: {
    title: string;
    subtitle: string;
    ctaText: string;
    microcopy: string;
  };
}

// ─────────────────────────────────────────────
// Contato
// ─────────────────────────────────────────────

export interface ContatoContentDict {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  form: {
    heading: string;
    requiredNote: string;
    requiredWord: string;
    labels: {
      nome: string;
      empresa: string;
      email: string;
      telefone: string;
      tipoServico: string;
      motoristaBilingue: string;
      localEmbarque: string;
      localDesembarque: string;
      observacao: string;
    };
    placeholders: {
      nome: string;
      empresa: string;
      email: string;
      telefone: string;
      localEmbarque: string;
      localDesembarque: string;
      observacao: string;
    };
    selectPlaceholder: string;
    tipoServicoOptions: { value: string; label: string }[];
    simNaoOptions: { value: string; label: string }[];
    submitLabel: string;
    submitSendingLabel: string;
    consentText: string;
    errorMessage: string;
    successTitle: string;
    successMessage: string;
    successWhatsappLabel: string;
  };
  sidebar: {
    whatsappLabel: string;
    whatsappSubtext: string;
    phoneLabel: string;
    phoneSubtext: string;
    emailLabel: string;
    emailSubtext: string;
    noteLabel: string;
    noteText: string;
  };
}
