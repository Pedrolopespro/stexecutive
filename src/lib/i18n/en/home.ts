import type { HomeContentDict } from "@/lib/i18n/types";

export const homeEn: HomeContentDict = {
  meta: {
    title: "Executive Transportation in Brasília | SUV and Van with Driver — ST Executive",
    description:
      "Executive transportation in Brasília with a professional driver. SUVs and vans for companies, embassies, events and airport transfer. Request a quote on WhatsApp.",
    keywords: [
      "executive transportation brasilia",
      "executive vans brasilia",
      "van rental brasilia",
      "executive suv brasilia",
      "airport transfer brasilia",
      "transportation for events brasilia",
      "corporate transportation brasilia",
      "transportation for embassies brasilia",
    ],
  },

  hero: {
    eyebrow: "ST Executive",
    titleLine1: "Premium Executive",
    titleLine2: "Transportation in",
    titleEmphasis: "Brasília",
    subtitle: "Serving companies, events, airports, hotels, embassies and executive tourism.",
    supportText: "Executive vans, premium cars and professional drivers with 24h service, punctuality, comfort and safety.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "See our services",
    ctaSecondaryMobile: "Services",
    ctaPrimaryMobile: "Quote",
    microcopy: "Share the date, time, route and number of passengers.",
  },

  featuresBar: [
    { title: "24h Service", sub: "Every day of the week" },
    { title: "Safety and Punctuality", sub: "Committed to your time" },
    { title: "Professional Drivers", sub: "Experienced and certified" },
    { title: "Premium Fleet", sub: "Executive vans and cars" },
    { title: "Serving Brasília", sub: "And the whole DF region" },
  ],

  clientsBar: {
    label: "Who has already trusted ST Executive",
  },

  services: {
    eyebrow: "Services",
    heading: "Solutions for every operation",
    subtitle: "Choose the right service for your company, event or trip.",
    moreLabel: "Learn more",
    items: [
      {
        title: "Executive Van",
        shortText: "Transportation for groups, teams, guests and events.",
        description: "Vans with a professional driver for events, airport transfer, companies and planned trips.",
        highlights: ["Groups and teams", "Events and conferences", "Airport transfer"],
        ctaText: "Request an executive van",
        serviceKey: "vans",
        featured: true,
      },
      {
        title: "Executive SUV",
        shortText: "Comfort and discretion for executives and special guests.",
        description: "Executive SUVs for meetings, client pickups, corporate agendas and individual trips.",
        highlights: ["Executives and guests", "Meetings and agendas", "Individual service"],
        ctaText: "Ask about the executive SUV",
        serviceKey: "executivo",
      },
      {
        title: "Airport Transfer",
        shortText: "Punctual transportation for arrivals and departures.",
        description: "Scheduled service to Brasília Airport, with a professional driver and time planning.",
        highlights: ["Arrivals and departures", "Scheduled time", "Space for luggage"],
        ctaText: "Request a transfer",
        serviceKey: "transfer",
      },
      {
        title: "Events",
        shortText: "Transportation logistics for corporate events, shows and groups.",
        description: "Organization of outbound, return and multiple trips for guests, teams, staff and participants.",
        highlights: ["Corporate events", "Shows and productions", "Planned round trips"],
        ctaText: "Get a quote for your event",
        serviceKey: "eventos",
      },
      {
        title: "Embassies and Authorities",
        shortText: "Discreet service for sensitive operations.",
        description: "Executive transportation focused on discretion, punctuality and professional presentation.",
        highlights: ["Discretion and confidentiality", "Guaranteed punctuality", "Prepared driver"],
        ctaText: "Talk to our team",
        serviceKey: "executivo",
      },
      {
        title: "Bus and Mini-Bus",
        shortText: "On-request solutions for larger groups.",
        description: "Options for operations with a higher passenger volume, depending on availability and need.",
        highlights: ["Larger groups", "Events and excursions", "On-request solution"],
        ctaText: "Request a proposal",
        contatoFallback: true,
      },
    ],
  },

  vansSection: {
    badge: "We are specialists",
    heading: "Executive vans for groups in Brasília",
    paragraph: "The ideal solution for companies, events and airport transfer that need to move people with comfort, safety and punctuality.",
    bullets: ["Groups and teams", "Events and conferences", "Airport transfer", "Professional driver", "Air-conditioned vehicles", "Planned itinerary"],
    ctaLabel: "Request a van quote",
  },

  fleetSection: {
    badge: "Executive fleet",
    heading: "Executive fleet for different needs",
    subtitleParts: [
      { plain: "Vehicles suited for", emphasis: "groups" },
      { plain: "", emphasis: "executives" },
      { plain: "", emphasis: "events" },
      { plain: "", emphasis: "corporate operations" },
    ],
    differentials: [
      { title: "Serviced vehicles", sub: "and sanitized" },
      { title: "Full insurance", sub: "for passengers" },
      { title: "Comfort and space", sub: "for every need" },
      { title: "Punctuality", sub: "on every trip" },
    ],
    moreLabel: "Learn more",
    ctaLabel: "Check available fleet",
    requestLabel: "Request this vehicle",
    requestMessageTemplate:
      "Hello, I found ST Executive online and would like a quote for {veiculo} ({capacidade}).",
    items: [
      {
        src: "/images/content/van.webp",
        imgPos: "object-center",
        label: "Executive Van in Brasília",
        capacity: "15 to 20 passengers",
        model: "Mercedes-Benz Sprinter",
        desc: "Executive van with driver for groups, airport transfer, corporate events and operations in Brasília.",
        serviceKey: "vans",
      },
      {
        src: "/images/content/mini van.webp",
        imgPos: "object-center",
        label: "Executive Minivan",
        capacity: "7 to 8 passengers",
        model: "Mercedes-Benz Vito or similar",
        desc: "Executive minivan ideal for small groups, guest reception and corporate trips in Brasília.",
        serviceKey: "minivan",
      },
      {
        src: "/images/content/seda executivo.webp",
        imgPos: "object-center",
        label: "Executive Sedan",
        capacity: "3 to 4 passengers",
        model: "Toyota Corolla or similar",
        desc: "Executive sedan for meetings, client receptions, corporate agendas and individual trips in Brasília.",
        serviceKey: "executivo",
      },
      {
        src: "/images/content/commander.webp",
        imgPos: "object-center",
        label: "Executive SUV",
        capacity: "4 to 6 passengers",
        model: "Jeep Commander or similar",
        desc: "Executive SUV with space, comfort and discretion for executives, special guests and embassies in Brasília.",
        serviceKey: "executivo",
      },
      {
        src: "/images/content/micro onibus.webp",
        imgPos: "object-center",
        label: "Executive Mini-Bus",
        capacity: "20 to 30 passengers",
        model: "Capacity varies by configuration",
        desc: "Executive mini-bus for mid-size groups, corporate events, excursions and planned operations in Brasília.",
        serviceKey: "microOnibus",
      },
      {
        src: "/images/content/onibus.webp",
        imgPos: "[object-position:50%_60%]",
        label: "Executive Bus",
        capacity: "42 to 56 passengers",
        model: "Standard or Double Decker bus",
        desc: "Executive bus for large groups, shows, conferences and high passenger-volume operations in Brasília.",
        serviceKey: "onibus",
      },
    ],
  },

  quoteForm: {
    eyebrow: "Quick quote",
    heading: "Get your quote in one minute",
    subtitle:
      "Fill in your details and send. The chat opens on WhatsApp already filled in — you won't have to type anything twice.",
    labels: {
      nome: "Name",
      whatsapp: "WhatsApp",
      email: "Email",
      veiculo: "Vehicle",
      descricao: "What you need",
    },
    placeholders: {
      nome: "What should we call you",
      whatsapp: "555 000 0000",
      email: "yourname@company.com",
      descricao: "Date, time, pick-up, drop-off, number of passengers…",
      selecione: "Select",
    },
    dicaWhatsapp:
      "Pick your country on the left, then type the number.",
    veiculoOptions: [
      "Executive Sedan",
      "Minivan",
      "Executive Van",
      "Executive SUV",
      "Mini-Bus",
      "Bus",
    ],
    submitLabel: "Send via WhatsApp",
    footnote: "We reply on WhatsApp. Your details are used only to answer this request.",
    sucesso: {
      titulo: "Request sent",
      texto: "We opened WhatsApp in a new tab with your details already filled in. If nothing opened, your pop-up blocker may have stopped it — use the button below.",
      emailOk: "We also logged your request by email, so nothing gets lost.",
      emailFalha: "We could not log it by email right now, but your WhatsApp request still stands.",
      abrirDeNovo: "Open WhatsApp",
      novoPedido: "Back",
    },
    messageTemplate:
      "Hello, I found ST Executive online and would like a quote.\n\nName: {nome}\nWhatsApp: {whatsapp}\nEmail: {email}\nVehicle: {veiculo}\nDetails: {descricao}",
  },


  testimonialsSection: {
    eyebrow: "Testimonials",
    heading: "Trusted for real operations",
    subtitle: "ST Executive serves companies, events, artists, institutions and special guests in Brasília.",
    stats: [
      { title: "Over 15 years", sub: "of experience" },
      { title: "Hundreds of clients", sub: "served" },
      { title: "{nota} on Google", sub: "from {qtd} reviews" },
      { title: "Committed to", sub: "safety and excellence" },
    ],
    items: [
      { text: "Ótima experiência com a ST Executive. Serviço pontual, conforto, segurança e atendimento de qualidade. Recomendo para transfer, eventos e transporte corporativo.", name: "Bolivas Burguer Artesanal", company: "Google Review" },
      { text: "Excelente atendimento! Tanto a equipe administrativa, sempre atenciosa e eficiente, quanto os motoristas, que demonstram profissionalismo, educação e cordialidade no dia a dia.", name: "Fernanda Carvalho", company: "Google Review" },
      { text: "Empresa séria, pontual e com atendimento diferenciado em Brasília. Excelente para transfer aeroporto, eventos, viagens e transporte executivo. Recomendo!", name: "Silvio Ferreira", company: "Google Review" },
      { text: "Servicio excelente, vehículos limpios y modernos. Conductor André muy profesional. Recomendable.", name: "Belen Callegari", company: "Google Review" },
      { text: "A empresa foi extremamente pontual, organizada e muito profissional durante todo o atendimento. Demonstraram muita honestidade, responsabilidade e cuidado. Recomendo com tranquilidade.", name: "Maria Eustáquia Liotto", company: "Google Review" },
      { text: "Prestação de serviço nota 10, motoristas educados, simpáticos, recomendo.", name: "Oscar Martins", company: "Google Review" },
    ],
    googleCta: {
      title: "Your experience matters",
      subtitle: "Rate ST Executive on Google and help other clients find us.",
      buttonLabel: "Leave a review",
      readLabel: "Read all {qtd} reviews",
    },
  },

  audienceSection: {
    eyebrow: "Who we serve",
    heading: "Service for companies, events and special guests",
    subtitlePlain: "Executive transportation solutions with punctuality, comfort and safety to serve different needs across",
    subtitleEmphasis: "Brasília and the region.",
    items: [
      { title: "Companies", text: "Transportation for teams, clients and corporate agendas with comfort and discretion.", bullets: ["Meetings and visits", "Employee transportation", "Corporate contracts"] },
      { title: "Corporate events", text: "Solutions for conferences, trade shows, conventions and business events of every size.", bullets: ["Conferences and trade shows", "Guests and speakers", "Transportation logistics"] },
      { title: "Shows and productions", text: "Transportation for artists, teams, crew and guests with total safety and confidentiality.", bullets: ["Artists and bands", "Crew and production", "Full infrastructure"] },
      { title: "Embassies", text: "Discreet, professional service for authorities and international representatives.", bullets: ["Authorities and diplomats", "Security and privacy", "Specialized drivers"] },
      { title: "Airport", text: "Transfer for arrivals and departures with punctuality and flight tracking.", bullets: ["Transfer in/out", "Flight tracking", "Meet & Greet"] },
      { title: "Hotels and groups", text: "Reception and transportation for guests, tourists and groups with comfort and speed.", bullets: ["Hospitality and tourism", "City tours and sightseeing", "Groups and excursions"] },
    ],
  },

  processSection: {
    eyebrow: "Process",
    heading: "How to hire us",
    subtitle: "Four steps. Fast and hassle-free.",
    steps: [
      { number: "01", title: "Send your request", text: "Share the date, route and number of passengers." },
      { number: "02", title: "Receive your proposal", text: "Our team suggests the ideal vehicle." },
      { number: "03", title: "Confirm the service", text: "The operation is organized in advance." },
      { number: "04", title: "Transportation delivered", text: "Driver and vehicle at the agreed time." },
    ],
    ctaBar: {
      title: "Need executive transportation for your company or event?",
      subtitle: "Talk to our team and get a personalized proposal.",
      buttonLabel: "Request a quote",
    },
  },

  aboutSection: {
    badge: "About the company",
    heading: "Over 15 Years in the Market",
    paragraphs: [
      "ST Executive offers executive transportation in Brasília for companies, airports, events, weddings, trips and groups, with personalized service and a focus on excellence.",
      "We have a modern fleet, including executive cars, Mercedes Vito, vans, mini-buses and buses, plus experienced drivers to ensure comfort, safety, discretion and punctuality on every trip.",
    ],
    ctaPrimary: "Request a quote",
    ctaSecondary: "See our services",
    yearsBadgeLine1: "Years in",
    yearsBadgeLine2: "the Market",
    differentials: [
      { title: "Experience and Trust", sub: "Over 15 years in executive transportation." },
      { title: "Premium Fleet", sub: "New, serviced vehicles with an executive standard." },
      { title: "Guaranteed Punctuality", sub: "Committed to schedules and routes." },
      { title: "24h Service", sub: "Support every day of the week." },
      { title: "Safety and Discretion", sub: "Qualified, trained drivers." },
    ],
    ctaBar: {
      title: "Need executive transportation for your company or event?",
      subtitle: "Talk to our team and get a personalized proposal.",
      buttonLabel: "Request a quote",
    },
  },

  semanticBlock:
    "ST Executive is an executive transportation company in Brasília. It operates executive vans, executive SUVs, airport transfer, transportation for events, companies, embassies, groups and special operations. The company serves with professional drivers, an executive fleet, punctuality, safety and organization.",

  faqSection: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    subtitle: "Can't find what you're looking for? Reach us on WhatsApp.",
    buttonLabel: "Ask on WhatsApp",
    items: [
      { question: "Does ST Executive offer executive van service in Brasília?", answer: "Yes. The company offers executive vans with driver for companies, events, groups and airport transfer." },
      { question: "Does the service include a driver?", answer: "Yes. All services are performed with a professional driver." },
      { question: "Do you serve corporate events?", answer: "Yes. ST Executive serves corporate events, shows, conferences, productions and groups." },
      { question: "Do you do transfer to Brasília Airport?", answer: "Yes. The service can be scheduled for arrivals and departures." },
      { question: "Do you serve embassies and special guests?", answer: "Yes. The company provides discreet, personalized service." },
      { question: "How do I request a quote?", answer: "Via WhatsApp, sharing the date, route, time and number of passengers." },
    ],
  },

  ctaFinal: {
    title: "Need to arrange transportation in Brasília?",
    subtitle: "Talk to ST Executive and get a personalized proposal.",
    ctaText: "Request a quote on WhatsApp",
    microcopy: "Service for companies, events, groups and special operations.",
  },
};
