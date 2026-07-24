import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { executivoEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: executivoEn.meta.title,
  description: executivoEn.meta.description,
  keywords: executivoEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${executivoEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/transporte-executivo-brasilia/",
      en: "https://stexecutive.com.br/en/transporte-executivo-brasilia/",
      "x-default": "https://stexecutive.com.br/transporte-executivo-brasilia/",
    },
  },
};

export default function EnTransporteExecutivoPage() {
  return (
    <ServicePageTemplate
      content={executivoEn}
      locale="en"
      navDict={navEn}
      footerDict={footerEn}
      commonDict={commonEn}
    />
  );
}
