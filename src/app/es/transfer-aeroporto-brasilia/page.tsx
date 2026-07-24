import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { transferEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: transferEs.meta.title,
  description: transferEs.meta.description,
  keywords: transferEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${transferEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/transfer-aeroporto-brasilia/",
      en: "https://stexecutive.com.br/en/transfer-aeroporto-brasilia/",
      es: "https://stexecutive.com.br/es/transfer-aeroporto-brasilia/",
      "x-default": "https://stexecutive.com.br/transfer-aeroporto-brasilia/",
    },
  },
};

export default function EsTransferAeroportoPage() {
  return (
    <ServicePageTemplate
      content={transferEs}
      locale="es"
      navDict={navEs}
      footerDict={footerEs}
      commonDict={commonEs}
    />
  );
}
