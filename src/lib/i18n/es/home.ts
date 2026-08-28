import type { HomeContentDict } from "@/lib/i18n/types";

export const homeEs: HomeContentDict = {
  meta: {
    title: "Transporte Ejecutivo en Brasília | Van y SUV — ST Executive",
    description:
      "Transporte ejecutivo en Brasília con chofer profesional. SUVs y vans para empresas, embajadas, eventos y transfer aeropuerto. Solicite presupuesto por WhatsApp.",
    keywords: [
      "transporte ejecutivo brasilia",
      "vans ejecutivas brasilia",
      "alquiler de van brasilia",
      "suv ejecutiva brasilia",
      "transfer aeropuerto brasilia",
      "transporte para eventos brasilia",
      "transporte corporativo brasilia",
      "transporte para embajadas brasilia",
    ],
  },

  hero: {
    eyebrow: "ST Executive",
    titleLine1: "Transporte Ejecutivo",
    titleLine2: "Premium en",
    titleEmphasis: "Brasília",
    subtitle: "Atención para empresas, eventos, aeropuertos, hoteles, embajadas y turismo ejecutivo.",
    supportText: "Vans ejecutivas, autos premium y choferes profesionales con atención 24h, puntualidad, comodidad y seguridad.",
    ctaPrimary: "Solicitar presupuesto",
    ctaSecondary: "Conocer servicios",
    ctaSecondaryMobile: "Servicios",
    ctaPrimaryMobile: "Presupuesto",
    ctaFormulario: "Prefiero enviarlo por escrito",
    microcopy: "Indique fecha, horario, trayecto y cantidad de pasajeros.",
  },

  featuresBar: [
    { title: "Atención 24h", sub: "Todos los días de la semana" },
    { title: "Seguridad y Puntualidad", sub: "Comprometidos con su tiempo" },
    { title: "Choferes Profesionales", sub: "Experimentados y certificados" },
    { title: "Flota Premium", sub: "Vans y autos ejecutivos" },
    { title: "Cobertura en Brasília", sub: "Y toda la región del DF" },
  ],

  clientsBar: {
    label: "Quién ya confió en ST Executive",
  },

  services: {
    eyebrow: "Servicios",
    heading: "Soluciones para cada operación",
    subtitle: "Elija el servicio ideal para su empresa, evento o traslado.",
    moreLabel: "Saber más",
    items: [
      {
        title: "Van Ejecutiva",
        shortText: "Transporte para grupos, equipos, invitados y eventos.",
        description: "Vans con chofer profesional para eventos, transfer aeropuerto, empresas y traslados planificados.",
        highlights: ["Grupos y equipos", "Eventos y congresos", "Transfer aeropuerto"],
        ctaText: "Solicitar van ejecutiva",
        serviceKey: "vans",
        featured: true,
      },
      {
        title: "SUV Ejecutiva",
        shortText: "Comodidad y discreción para ejecutivos e invitados especiales.",
        description: "SUVs ejecutivas para reuniones, recepción de clientes, agendas corporativas y traslados individuales.",
        highlights: ["Ejecutivos e invitados", "Reuniones y agendas", "Atención individual"],
        ctaText: "Consultar SUV ejecutiva",
        serviceKey: "executivo",
      },
      {
        title: "Transfer Aeropuerto",
        shortText: "Traslado puntual para llegadas y salidas.",
        description: "Servicio programado al Aeropuerto de Brasília, con chofer profesional y planificación de horario.",
        highlights: ["Llegadas y salidas", "Horario programado", "Espacio para equipaje"],
        ctaText: "Solicitar transfer",
        serviceKey: "transfer",
      },
      {
        title: "Eventos",
        shortText: "Logística de transporte para eventos corporativos, shows y grupos.",
        description: "Organización de ida, vuelta y múltiples traslados para invitados, equipos, staff y participantes.",
        highlights: ["Eventos corporativos", "Shows y producciones", "Ida y vuelta planificadas"],
        ctaText: "Presupuestar transporte para evento",
        serviceKey: "eventos",
      },
      {
        title: "Embajadas y Autoridades",
        shortText: "Atención discreta para operaciones sensibles.",
        description: "Transporte ejecutivo enfocado en discreción, puntualidad y presentación profesional.",
        highlights: ["Discreción y confidencialidad", "Puntualidad garantizada", "Chofer preparado"],
        ctaText: "Hablar con el equipo",
        serviceKey: "executivo",
      },
      {
        title: "Ómnibus y Micro-ómnibus",
        shortText: "Soluciones bajo consulta para grupos grandes.",
        description: "Opciones para operaciones con mayor volumen de pasajeros, según disponibilidad y necesidad.",
        highlights: ["Grupos grandes", "Eventos y excursiones", "Solución bajo consulta"],
        ctaText: "Solicitar propuesta",
        contatoFallback: true,
      },
    ],
  },

  vansSection: {
    badge: "Somos especialistas",
    heading: "Vans ejecutivas para grupos en Brasília",
    paragraph: "La solución ideal para empresas, eventos y transfer aeropuerto que necesitan trasladar personas con comodidad, seguridad y puntualidad.",
    bullets: ["Grupos y equipos", "Eventos y congresos", "Transfer aeropuerto", "Chofer profesional", "Vehículos climatizados", "Itinerario planificado"],
    ctaLabel: "Solicitar presupuesto de van",
  },

  fleetSection: {
    badge: "Flota ejecutiva",
    heading: "Flota ejecutiva para diferentes necesidades",
    subtitleParts: [
      { plain: "Vehículos adecuados para", emphasis: "grupos" },
      { plain: "", emphasis: "ejecutivos" },
      { plain: "", emphasis: "eventos" },
      { plain: "", emphasis: "operaciones corporativas" },
    ],
    differentials: [
      { title: "Vehículos revisados", sub: "e higienizados" },
      { title: "Seguro total", sub: "para pasajeros" },
      { title: "Comodidad y espacio", sub: "para cada necesidad" },
      { title: "Puntualidad", sub: "en todos los trayectos" },
    ],
    moreLabel: "Saber más",
    ctaLabel: "Consultar flota disponible",
    requestLabel: "Solicitar este vehículo",
    requestMessageTemplate:
      "Hola, vengo del sitio de ST Executive y quisiera un presupuesto para {veiculo} ({capacidade}).",
    items: [
      {
        src: "/images/content/van.webp",
        imgPos: "object-center",
        label: "Van Ejecutiva en Brasília",
        capacity: "15 a 18 pasajeros",
        model: "Mercedes-Benz Sprinter",
        desc: "Van ejecutiva con chofer para grupos, transfer aeropuerto, eventos corporativos y operaciones en Brasília.",
        serviceKey: "vans",
      },
      {
        src: "/images/content/mini van.webp",
        imgPos: "object-center",
        label: "Mini Van Ejecutiva",
        capacity: "Hasta 7 pasajeros",
        model: "Mercedes-Benz Vito o similar",
        desc: "Mini van ejecutiva ideal para grupos pequeños, recepción de invitados y traslados corporativos en Brasília.",
        serviceKey: "minivan",
      },
      {
        src: "/images/content/seda executivo.webp",
        imgPos: "object-center",
        label: "Sedán Ejecutivo",
        capacity: "Hasta 4 pasajeros",
        model: "Toyota Corolla o similar",
        desc: "Sedán ejecutivo para reuniones, recepción de clientes, agendas corporativas y traslados individuales en Brasília.",
        serviceKey: "executivo",
      },
      {
        src: "/images/content/commander.webp",
        imgPos: "object-center",
        label: "SUV Ejecutiva",
        capacity: "4 a 6 pasajeros",
        model: "Jeep Commander o similar",
        desc: "SUV ejecutiva con espacio, comodidad y discreción para ejecutivos, invitados especiales y embajadas en Brasília.",
        serviceKey: "executivo",
      },
      {
        src: "/images/content/micro onibus.webp",
        imgPos: "object-center",
        label: "Micro-ómnibus Ejecutivo",
        capacity: "Hasta 25 pasajeros",
        model: "Capacidad varía según configuración",
        desc: "Micro-ómnibus ejecutivo para grupos medianos, eventos corporativos, excursiones y operaciones planificadas en Brasília.",
        serviceKey: "microOnibus",
      },
      {
        src: "/images/content/onibus.webp",
        imgPos: "[object-position:50%_60%]",
        label: "Ómnibus Ejecutivo",
        capacity: "42 a 60 pasajeros",
        model: "Ómnibus estándar o Double Decker",
        desc: "Ómnibus ejecutivo para grupos grandes, shows, congresos y operaciones de alto volumen de pasajeros en Brasília.",
        serviceKey: "onibus",
      },
    ],
  },

  quoteForm: {
    eyebrow: "Presupuesto rápido",
    heading: "Pida su presupuesto en un minuto",
    subtitle:
      "Complete los datos y envíe. La conversación se abre en WhatsApp ya completada — no tendrá que escribir nada de nuevo.",
    labels: {
      nome: "Nombre",
      whatsapp: "WhatsApp",
      email: "Correo electrónico",
      veiculo: "Vehículo",
      descricao: "Descripción del servicio",
      ddi: "Código del país",
    },
    placeholders: {
      nome: "¿Cómo podemos llamarle?",
      whatsapp: "600 000 000",
      email: "sunombre@empresa.com",
      descricao: "Fecha, hora, origen, destino, número de pasajeros…",
      selecione: "Seleccione",
    },
    dicaWhatsapp:
      "Elija su país al lado y escriba el número.",
    veiculoOptions: [
      "Sedán Ejecutivo",
      "Minivan",
      "Van Ejecutiva",
      "SUV Ejecutiva",
      "Micro-ómnibus",
      "Ómnibus",
    ],
    tituloMobile: "Solicite su cotización",
    subtituloMobile: "Complete los datos abajo y reciba su presupuesto personalizado.",
    diferenciais: [
      { linha1: "Atención", linha2: "rápida y segura" },
      { linha1: "Respuesta en", linha2: "hasta 1 minuto" },
      { linha1: "Excelencia en", linha2: "cada detalle" },
    ],
    submitLabel: "Enviar por WhatsApp",
    footnote: "Respondemos por WhatsApp. Sus datos se usan solo para responder a esta solicitud.",
    sucesso: {
      tituloLinha1: "Solicitud enviada",
      tituloLinha2: "con éxito",
      itemWhatsapp: "Recibimos su solicitud y ya completamos el mensaje en WhatsApp para agilizar la atención.",
      itemToque: "Si WhatsApp no se abrió automáticamente, toque el botón de abajo.",
      itemEmail: "También registramos su solicitud por correo, así no se pierde.",
      proximoRotulo: "Siguiente paso:",
      proximoTexto: "abrir y enviar el mensaje en WhatsApp.",
      abrirWhatsapp: "Abrir WhatsApp",
      novoPedido: "Hacer una nueva solicitud",
      voltarSite: "Volver al sitio",
      emailOk: "También registramos su solicitud por correo, así no se pierde.",
      emailFalha: "No pudimos registrarla por correo ahora, pero su solicitud por WhatsApp sigue valiendo.",
    },

    messageTemplate:
      "Hola, vengo del sitio de ST Executive y quisiera un presupuesto.\n\nNombre: {nome}\nWhatsApp: {whatsapp}\nCorreo: {email}\nVehículo: {veiculo}\nDetalles: {descricao}",
  },


  testimonialsSection: {
    eyebrow: "Testimonios",
    heading: "Confianza en operaciones reales",
    subtitle: "ST Executive atiende empresas, eventos, artistas, instituciones e invitados especiales en Brasília.",
    stats: [
      { title: "Más de 15 años", sub: "de experiencia" },
      { title: "Cientos de clientes", sub: "atendidos" },
      { title: "{nota} en Google", sub: "de {qtd} reseñas" },
      { title: "Compromiso con", sub: "seguridad y excelencia" },
    ],
    items: [
      { text: "Ótima experiência com a ST Executive. Serviço pontual, conforto, segurança e atendimento de qualidade. Recomendo para transfer, eventos e transporte corporativo.", name: "Bolivas Burguer Artesanal", company: "Reseña en Google" },
      { text: "Excelente atendimento! Tanto a equipe administrativa, sempre atenciosa e eficiente, quanto os motoristas, que demonstram profissionalismo, educação e cordialidade no dia a dia.", name: "Fernanda Carvalho", company: "Reseña en Google" },
      { text: "Empresa séria, pontual e com atendimento diferenciado em Brasília. Excelente para transfer aeroporto, eventos, viagens e transporte executivo. Recomendo!", name: "Silvio Ferreira", company: "Reseña en Google" },
      { text: "Servicio excelente, vehículos limpios y modernos. Conductor André muy profesional. Recomendable.", name: "Belen Callegari", company: "Reseña en Google" },
      { text: "A empresa foi extremamente pontual, organizada e muito profissional durante todo o atendimento. Demonstraram muita honestidade, responsabilidade e cuidado. Recomendo com tranquilidade.", name: "Maria Eustáquia Liotto", company: "Reseña en Google" },
      { text: "Prestação de serviço nota 10, motoristas educados, simpáticos, recomendo.", name: "Oscar Martins", company: "Reseña en Google" },
    ],
    googleCta: {
      title: "Su experiencia importa",
      subtitle: "Califique a ST Executive en Google y ayude a otros clientes a encontrarnos.",
      buttonLabel: "Dejar reseña",
      readLabel: "Leer las {qtd} reseñas",
    },
  },

  audienceSection: {
    eyebrow: "A quién atendemos",
    heading: "Atención para empresas, eventos e invitados especiales",
    subtitlePlain: "Soluciones de transporte ejecutivo con puntualidad, comodidad y seguridad para atender diferentes necesidades en",
    subtitleEmphasis: "Brasília y la región.",
    items: [
      { title: "Empresas", text: "Transporte para equipos, clientes y agendas corporativas con comodidad y discreción.", bullets: ["Reuniones y visitas", "Transporte de empleados", "Contratos corporativos"] },
      { title: "Eventos corporativos", text: "Soluciones para congresos, ferias, convenciones y eventos empresariales de todos los tamaños.", bullets: ["Congresos y ferias", "Invitados y ponentes", "Logística de transporte"] },
      { title: "Shows y producciones", text: "Transporte para artistas, equipos, staff e invitados con total seguridad y confidencialidad.", bullets: ["Artistas y bandas", "Staff y producción", "Infraestructura completa"] },
      { title: "Embajadas", text: "Atención discreta y profesional para autoridades y representantes internacionales.", bullets: ["Autoridades y diplomáticos", "Seguridad y privacidad", "Choferes especializados"] },
      { title: "Aeropuerto", text: "Transfer para llegadas y salidas con puntualidad y seguimiento de vuelo.", bullets: ["Transfer in/out", "Seguimiento de vuelo", "Meet & Greet"] },
      { title: "Hoteles y grupos", text: "Recepción y traslado de huéspedes, turistas y grupos con comodidad y agilidad.", bullets: ["Hospedaje y turismo", "City tour y paseos", "Grupos y excursiones"] },
    ],
  },

  processSection: {
    eyebrow: "Proceso",
    heading: "Cómo contratar",
    subtitle: "Cuatro pasos. Rápido y sin complicaciones.",
    steps: [
      { number: "01", title: "Envíe su solicitud", text: "Indique fecha, trayecto y cantidad de pasajeros." },
      { number: "02", title: "Reciba la propuesta", text: "El equipo indica el vehículo ideal." },
      { number: "03", title: "Confirme el servicio", text: "La operación se organiza con antelación." },
      { number: "04", title: "Transporte realizado", text: "Chofer y vehículo en el horario acordado." },
    ],
    ctaBar: {
      title: "¿Necesita transporte ejecutivo para su empresa o evento?",
      subtitle: "Hable con nuestro equipo y reciba una propuesta personalizada.",
      buttonLabel: "Solicitar presupuesto",
    },
  },

  aboutSection: {
    badge: "Sobre la empresa",
    heading: "+15 Años en el Mercado",
    paragraphs: [
      "ST Executive ofrece transporte ejecutivo en Brasília para empresas, aeropuertos, eventos, bodas, viajes y grupos, con atención personalizada y enfoque en la excelencia.",
      "Contamos con una flota moderna, incluyendo autos ejecutivos, Mercedes Vito, vans, micro-ómnibus y ómnibus, además de choferes experimentados para garantizar comodidad, seguridad, discreción y puntualidad en cada trayecto.",
    ],
    ctaPrimary: "Solicitar presupuesto",
    ctaSecondary: "Conocer servicios",
    yearsBadgeLine1: "Años en el",
    yearsBadgeLine2: "Mercado",
    differentials: [
      { title: "Experiencia y Confianza", sub: "Más de 15 años de trayectoria en transporte ejecutivo." },
      { title: "Flota Premium", sub: "Vehículos nuevos, revisados y con estándar ejecutivo." },
      { title: "Puntualidad Garantizada", sub: "Compromiso con horarios e itinerarios." },
      { title: "Atención 24h", sub: "Soporte todos los días de la semana." },
      { title: "Seguridad y Discreción", sub: "Choferes calificados y capacitados." },
    ],
    ctaBar: {
      title: "¿Necesita transporte ejecutivo para su empresa o evento?",
      subtitle: "Hable con nuestro equipo y reciba una propuesta personalizada.",
      buttonLabel: "Solicitar presupuesto",
    },
  },

  semanticBlock:
    "ST Executive es una empresa de transporte ejecutivo en Brasília. Opera con vans ejecutivas, SUVs ejecutivas, transfer aeropuerto, transporte para eventos, empresas, embajadas, grupos y operaciones especiales. La empresa atiende con choferes profesionales, flota ejecutiva, puntualidad, seguridad y organización.",

  faqSection: {
    eyebrow: "FAQ",
    heading: "Preguntas frecuentes",
    subtitle: "Si no encuentra lo que busca, hable por WhatsApp.",
    buttonLabel: "Preguntar por WhatsApp",
    items: [
      { question: "¿ST Executive ofrece van ejecutiva en Brasília?", answer: "Sí. La empresa ofrece vans ejecutivas con chofer para empresas, eventos, grupos y transfer aeropuerto." },
      { question: "¿El servicio incluye chofer?", answer: "Sí. Todos los servicios se realizan con chofer profesional." },
      { question: "¿Atienden eventos corporativos?", answer: "Sí. ST Executive atiende eventos corporativos, shows, congresos, producciones y grupos." },
      { question: "¿Hacen transfer al Aeropuerto de Brasília?", answer: "Sí. El servicio puede programarse para llegadas y salidas." },
      { question: "¿Atienden embajadas e invitados especiales?", answer: "Sí. La empresa realiza atenciones discretas y personalizadas." },
      { question: "¿Cómo solicito un presupuesto?", answer: "Por WhatsApp, indicando fecha, trayecto, horario y cantidad de pasajeros." },
    ],
  },

  ctaFinal: {
    title: "¿Necesita organizar un transporte en Brasília?",
    subtitle: "Hable con ST Executive y reciba una propuesta personalizada.",
    ctaText: "Solicitar presupuesto por WhatsApp",
    microcopy: "Atención para empresas, eventos, grupos y operaciones especiales.",
  },
};
