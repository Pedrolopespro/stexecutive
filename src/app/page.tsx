import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://stexecutive.com.br/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/",
      en: "https://stexecutive.com.br/en/",
      es: "https://stexecutive.com.br/es/",
      "x-default": "https://stexecutive.com.br/",
    },
  },
};

export default function HomePage() {
  return <HomeContent />;
}
