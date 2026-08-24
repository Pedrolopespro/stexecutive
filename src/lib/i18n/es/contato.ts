import type { ContatoContentDict } from "@/lib/i18n/types";

export const contatoEs: ContatoContentDict = {
  meta: {
    title: "Contacto | ST Executive — Transporte Ejecutivo en Brasília",
    description: "Contacte a ST Executive para solicitar un presupuesto de transporte ejecutivo en Brasília. Atención por WhatsApp, correo electrónico y formulario.",
  },
  hero: {
    eyebrow: "Hable con nosotros",
    title: "Contáctenos",
    subtitle: "Indique los detalles de su traslado y nuestro equipo responderá con una propuesta personalizada.",
  },
  form: {
    heading: "Solicitar presupuesto",
    requiredNote: "Los campos marcados con {req} son obligatorios.",
    requiredWord: "*",
    labels: {
      nome: "Nombre",
      empresa: "Empresa",
      email: "Correo electrónico",
      telefone: "Teléfono",
      tipoServico: "Tipo de servicio",
      motoristaBilingue: "Chofer bilingüe",
      localEmbarque: "Lugar de recogida",
      localDesembarque: "Lugar de destino",
      observacao: "Observaciones",
    },
    placeholders: {
      nome: "Su nombre completo",
      empresa: "Nombre de la empresa (opcional)",
      email: "su@email.com",
      telefone: "+55 61 90000-0000",
      localEmbarque: "Ej.: Aeropuerto de Brasília, Hotel X...",
      localDesembarque: "Ej.: Centro de convenciones, Empresa Y...",
      observacao: "Fecha, horario, cantidad de pasajeros, necesidades especiales...",
    },
    selectPlaceholder: "Seleccione...",
    tipoServicoOptions: [
      { value: "Diária", label: "Día completo" },
      { value: "Transfer", label: "Transfer" },
    ],
    simNaoOptions: [
      { value: "Sim", label: "Sí" },
      { value: "Não", label: "No" },
    ],
    submitLabel: "Enviar solicitud",
    submitSendingLabel: "Enviando...",
    consentText: "Al enviar, usted acepta ser contactado por correo electrónico o WhatsApp.",
    errorMessage: "Ocurrió un error al enviar. Intente nuevamente o contáctenos por WhatsApp.",
    successTitle: "¡Mensaje enviado!",
    successMessage: "Recibimos su solicitud. Nuestro equipo se pondrá en contacto pronto.",
    successWhatsappLabel: "Hablar por WhatsApp",
  },
  sidebar: {
    whatsappLabel: "WhatsApp",
    whatsappSubtext: "Haga clic para conversar",
    phoneLabel: "Teléfono",
    phoneSubtext: "Atención 24 horas, todos los días",
    emailLabel: "Correo electrónico",
    emailSubtext: "Respuesta en hasta 24h",
    noteLabel: "Atención ágil",
    noteText: "Para respuestas más rápidas, use WhatsApp indicando fecha, trayecto y cantidad de pasajeros.",
  },
};
