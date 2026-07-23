import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";

import { GUIA_ARTIGOS } from "@/lib/guia-brasilia";
import { WHATSAPP_URL } from "@/lib/constants";

// ─────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Guia Brasília | Dicas de transporte, turismo e deslocamento na capital",
  description:
    "Guia editorial sobre Brasília: dicas para quem visita pela primeira vez, onde ficar, o que fazer, como se deslocar e como organizar viagens de negócios à capital.",
  keywords: [
    "guia brasília",
    "dicas brasília",
    "turismo brasília",
    "deslocamento brasília",
    "viagem a trabalho brasília",
    "o que fazer em brasília",
  ],
  alternates: {
    canonical: "https://stexecutive.com.br/guia-brasilia/",
  },
};

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function GuiaBrasiliaPage() {
  return (
    <>
      <Header />
      <WhatsAppFloatingButton />

      {/* ── Hero editorial com imagem ── */}
      <section style={{ position: "relative", height: "clamp(380px, 50vw, 560px)" }}>
        {/* Imagem de fundo */}
        <Image
          src="/images/content/brasilia.webp"
          alt="Vista aérea de Brasília — Guia da capital federal"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Overlay gradiente */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(7,17,31,0.55) 0%, rgba(7,17,31,0.75) 100%)",
          }}
        />

        {/* Conteúdo */}
        <div
          className="container-st"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "64px",
            paddingTop: "80px",
          }}
        >
          {/* Label */}
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4px 14px",
                borderRadius: "999px",
                background: "rgba(200,164,93,0.2)",
                border: "1px solid rgba(200,164,93,0.4)",
                color: "#D8B76F",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Editorial
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              maxWidth: "700px",
              marginBottom: "20px",
            }}
          >
            Guia Brasília
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Dicas práticas sobre deslocamento, turismo e viagens de negócios em Brasília — para quem chega pela primeira vez ou quer conhecer mais a capital.
          </p>
        </div>
      </section>

      {/* ── Articles grid ── */}
      <section className="bg-[#F8F7F3] py-16">
        <div className="container-st">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {GUIA_ARTIGOS.map((artigo) => (
              <article
                key={artigo.slug}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(7,17,31,0.07)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Card image */}
                <div style={{ position: "relative", height: "220px", flexShrink: 0 }}>
                  <Image
                    src={artigo.image}
                    alt={artigo.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  {/* Subtle overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(7,17,31,0.35) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: 1,
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#07111F",
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {artigo.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "#4B5563",
                      lineHeight: 1.65,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {artigo.summary}
                  </p>

                  <div style={{ paddingTop: "8px" }}>
                    <Link href={`/guia-brasilia/${artigo.slug}`} className="btn-guia">
                      Ler artigo
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #07111F 0%, #05070A 100%)",
          padding: "64px 0",
        }}
      >
        <div className="container-st" style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#C8A45D",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Pronto para se deslocar?
          </p>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            Transporte executivo em Brasília
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
              marginBottom: "32px",
            }}
          >
            Solicite um orçamento pelo WhatsApp e receba atendimento imediato.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              borderRadius: "999px",
              background: "#25D366",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
            }}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
