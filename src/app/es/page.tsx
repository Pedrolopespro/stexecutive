import type { Metadata } from "next";
import HomeContent from "@/app/HomeContent";
import { homeEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: homeEs.meta.title,
  description: homeEs.meta.description,
  keywords: homeEs.meta.keywords,
  alternates: {
    canonical: "https://stexecutive.com.br/es/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/",
      en: "https://stexecutive.com.br/en/",
      es: "https://stexecutive.com.br/es/",
      "x-default": "https://stexecutive.com.br/",
    },
  },
};

export default function EsHomePage() {
  return (
    <HomeContent
      locale="es"
      content={homeEs}
      navDict={navEs}
      footerDict={footerEs}
      commonDict={commonEs}
    />
  );
}
