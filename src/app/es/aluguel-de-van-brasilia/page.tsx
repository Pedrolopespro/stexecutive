import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { vansEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: vansEs.meta.title,
  description: vansEs.meta.description,
  keywords: vansEs.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${vansEs.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/aluguel-de-van-brasilia/",
      en: "https://stexecutive.com.br/en/aluguel-de-van-brasilia/",
      es: "https://stexecutive.com.br/es/aluguel-de-van-brasilia/",
      "x-default": "https://stexecutive.com.br/aluguel-de-van-brasilia/",
    },
  },
};

export default function EsAluguelDeVanBrasiliaPage() {
  return (
    <ServicePageTemplate
      content={vansEs}
      locale="es"
      navDict={navEs}
      footerDict={footerEs}
      commonDict={commonEs}
    />
  );
}
