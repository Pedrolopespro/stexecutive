import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { minivanEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: minivanEs.meta.title,
  description: minivanEs.meta.description,
  keywords: minivanEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${minivanEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/minivan-executiva-brasilia/",
      en: "https://stexecutive.com.br/en/minivan-executiva-brasilia/",
      es: "https://stexecutive.com.br/es/minivan-executiva-brasilia/",
      "x-default": "https://stexecutive.com.br/minivan-executiva-brasilia/",
    },
  },
};

export default function EsMinivanPage() {
  return (
    <ServicePageTemplate content={minivanEs} locale="es" navDict={navEs} footerDict={footerEs} commonDict={commonEs} />
  );
}
