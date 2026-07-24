import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { eventosEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: eventosEs.meta.title,
  description: eventosEs.meta.description,
  keywords: eventosEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${eventosEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/van-para-eventos-brasilia/",
      en: "https://stexecutive.com.br/en/van-para-eventos-brasilia/",
      es: "https://stexecutive.com.br/es/van-para-eventos-brasilia/",
      "x-default": "https://stexecutive.com.br/van-para-eventos-brasilia/",
    },
  },
};

export default function EsVanParaEventosPage() {
  return (
    <ServicePageTemplate
      content={eventosEs}
      locale="es"
      navDict={navEs}
      footerDict={footerEs}
      commonDict={commonEs}
    />
  );
}
