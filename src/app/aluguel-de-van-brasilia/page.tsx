import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { vansPt } from "@/lib/i18n";

export const metadata: Metadata = {
  title: vansPt.meta.title,
  description: vansPt.meta.description,
  keywords: vansPt.meta.keywords,
  alternates: {
    canonical: `https://stexecutive.com.br/${vansPt.canonicalPath}`,
    languages: {
      "pt-BR": "https://stexecutive.com.br/aluguel-de-van-brasilia/",
      en: "https://stexecutive.com.br/en/aluguel-de-van-brasilia/",
      "x-default": "https://stexecutive.com.br/aluguel-de-van-brasilia/",
    },
  },
};

export default function AluguelDeVanBrasiliaPage() {
  return <ServicePageTemplate content={vansPt} locale="pt" />;
}
