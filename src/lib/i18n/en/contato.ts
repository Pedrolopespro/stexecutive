import type { ContatoContentDict } from "@/lib/i18n/types";

export const contatoEn: ContatoContentDict = {
  meta: {
    title: "Contact | ST Executive — Executive Transportation in Brasília",
    description: "Contact ST Executive to request a quote for executive transportation in Brasília. Available via WhatsApp, email and contact form.",
  },
  hero: {
    eyebrow: "Talk to us",
    title: "Get in touch",
    subtitle: "Share the details of your trip and our team will get back to you with a personalized proposal.",
  },
  form: {
    heading: "Request a quote",
    requiredNote: "Fields marked with {req} are required.",
    requiredWord: "*",
    labels: {
      nome: "Name",
      empresa: "Company",
      email: "Email",
      telefone: "Phone",
      tipoServico: "Service type",
      motoristaBilingue: "Bilingual driver",
      localEmbarque: "Pickup location",
      localDesembarque: "Drop-off location",
      observacao: "Notes",
    },
    placeholders: {
      nome: "Your full name",
      empresa: "Company name (optional)",
      email: "you@email.com",
      telefone: "+55 61 90000-0000",
      localEmbarque: "E.g.: Brasília Airport, Hotel X...",
      localDesembarque: "E.g.: Convention center, Company Y...",
      observacao: "Date, time, number of passengers, special needs...",
    },
    selectPlaceholder: "Select...",
    tipoServicoOptions: [
      { value: "Diária", label: "Full day" },
      { value: "Transfer", label: "Transfer" },
    ],
    simNaoOptions: [
      { value: "Sim", label: "Yes" },
      { value: "Não", label: "No" },
    ],
    submitLabel: "Send request",
    submitSendingLabel: "Sending...",
    consentText: "By submitting, you agree to be contacted by email or WhatsApp.",
    errorMessage: "An error occurred while sending. Please try again or contact us via WhatsApp.",
    successTitle: "Message sent!",
    successMessage: "We received your request. Our team will contact you shortly.",
    successWhatsappLabel: "Chat on WhatsApp",
  },
  sidebar: {
    whatsappLabel: "WhatsApp",
    whatsappSubtext: "Click to chat",
    phoneLabel: "Phone",
    phoneSubtext: "Mon–Sat, 8am to 8pm",
    emailLabel: "Email",
    emailSubtext: "Response within 24h",
    noteLabel: "Fast service",
    noteText: "For faster replies, use WhatsApp and share the date, route and number of passengers.",
  },
};
