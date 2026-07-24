import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { executivoEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: executivoEs.meta.title,
  description: executivoEs.meta.description,
  keywords: executivoEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${executivoEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/transporte-executivo-brasilia/",
      en: "https://stexecutive.com.br/en/transporte-executivo-brasilia/",
      es: "https://stexecutive.com.br/es/transporte-executivo-brasilia/",
      "x-default": "https://stexecutive.com.br/transporte-executivo-brasilia/",
    },
  },
};

export default function EsTransporteExecutivoPage() {
  return (
    <ServicePageTemplate
      content={executivoEs}
      locale="es"
      navDict={navEs}
      footerDict={footerEs}
      commonDict={commonEs}
    />
  );
}
