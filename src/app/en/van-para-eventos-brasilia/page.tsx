import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { eventosEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export const metadata: Metadata = {
  title: eventosEn.meta.title,
  description: eventosEn.meta.description,
  keywords: eventosEn.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${eventosEn.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/van-para-eventos-brasilia/",
      en: "https://stexecutive.com.br/en/van-para-eventos-brasilia/",
      "x-default": "https://stexecutive.com.br/van-para-eventos-brasilia/",
    },
  },
};

export default function EnVanParaEventosPage() {
  return (
    <ServicePageTemplate
      content={eventosEn}
      locale="en"
      navDict={navEn}
      footerDict={footerEn}
      commonDict={commonEn}
    />
  );
}
