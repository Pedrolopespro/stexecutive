import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Button from "@/components/ui/Button";

import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Página não encontrada | ST Executive",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <WhatsAppFloatingButton />

      <main className="min-h-[70vh] flex items-center justify-center bg-surface-off">
        <div className="container-st py-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 mb-3">
            Erro 404
          </p>
          <h1 className="text-[28px] sm:text-[40px] font-bold text-navy-950 leading-snug mb-4">
            Página não encontrada
          </h1>
          <p className="text-base text-gray-600 max-w-lg mx-auto mb-8">
            O endereço acessado não existe ou foi movido. Volte para a página
            inicial ou fale com a gente pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full font-semibold px-6 py-3.5 text-base border border-navy-950/20 text-navy-950 hover:border-navy-950/40 hover:-translate-y-0.5 transition-all duration-[var(--motion-normal)]"
            >
              Voltar para o início
            </Link>
            <Button variant="primary" size="lg" href={WHATSAPP_URL} showWhatsAppIcon>
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
