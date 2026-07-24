import type { Metadata } from "next";
import { contatoEs } from "@/lib/i18n";

export const metadata: Metadata = {
  title: contatoEs.meta.title,
  description: contatoEs.meta.description,
  alternates: {
    canonical: "https://stexecutive.com.br/es/contato/",
    languages: {
      "pt-BR": "https://stexecutive.com.br/contato/",
      en: "https://stexecutive.com.br/en/contato/",
      es: "https://stexecutive.com.br/es/contato/",
      "x-default": "https://stexecutive.com.br/contato/",
    },
  },
};

export default function EsContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
