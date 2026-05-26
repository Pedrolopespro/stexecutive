import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";

import {
  GUIA_ARTIGOS,
  getArtigoPorSlug,
  getArtigosRelacionados,
  type ContentBlock,
} from "@/lib/guia-brasilia";

// ─────────────────────────────────────────────
// Static params
// ─────────────────────────────────────────────

export async function generateStaticParams() {
  return GUIA_ARTIGOS.map((a) => ({ slug: a.slug }));
}

// ─────────────────────────────────────────────
// SEO
// ─────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artigo = getArtigoPorSlug(slug);
  if (!artigo) return {};

  return {
    title: artigo.metaTitle,
    description: artigo.metaDescription,
    keywords: artigo.keywords,
    openGraph: {
      title: artigo.metaTitle,
      description: artigo.metaDescription,
      images: [{ url: artigo.image, alt: artigo.imageAlt }],
    },
  };
}

// ─────────────────────────────────────────────
// Content renderer
// ─────────────────────────────────────────────

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            color: "#374151",
            marginBottom: "20px",
          }}
        >
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
            fontWeight: 700,
            color: "#07111F",
            marginTop: "40px",
            marginBottom: "16px",
            lineHeight: 1.3,
          }}
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "#07111F",
            marginTop: "28px",
            marginBottom: "12px",
          }}
        >
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul
          style={{
            paddingLeft: "24px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "#374151",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div
          style={{
            overflowX: "auto",
            marginBottom: "24px",
            borderRadius: "12px",
            border: "1px solid rgba(7,17,31,0.1)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#07111F" }}>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    style={{
                      padding: "12px 16px",
                      color: "#C8A45D",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  style={{
                    background: ri % 2 === 0 ? "#FFFFFF" : "#F8F7F3",
                    borderBottom: "1px solid rgba(7,17,31,0.06)",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "12px 16px",
                        fontSize: "0.9375rem",
                        color: "#374151",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "faq":
      return (
        <div style={{ marginBottom: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {block.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#F8F7F3",
                borderRadius: "12px",
                padding: "20px 24px",
                borderLeft: "3px solid #C8A45D",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: "#07111F",
                  fontSize: "1rem",
                  marginBottom: "8px",
                }}
              >
                {item.q}
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#4B5563", lineHeight: 1.7 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default async function GuiaArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artigo = getArtigoPorSlug(slug);
  if (!artigo) notFound();

  const relacionados = getArtigosRelacionados(artigo.relatedSlugs).slice(0, 2);

  // Build FAQ schema from faq content blocks
  const faqBlocks = artigo.content.filter((b) => b.type === "faq") as Extract<
    ContentBlock,
    { type: "faq" }
  >[];
  const faqItems = faqBlocks.flatMap((b) => b.items);

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />
      <WhatsAppFloatingButton />

      {/* ── Hero ── */}
      <section>
        <div style={{ position: "relative", height: "clamp(360px, 50vw, 560px)" }}>
          <Image
            src={artigo.image}
            alt={artigo.imageAlt}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(7,17,31,0.45) 0%, rgba(7,17,31,0.72) 100%)",
            }}
          />
          <div
            className="container-st"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              paddingTop: "80px",
              paddingBottom: "48px",
            }}
          >
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <Link
                href="/guia-brasilia"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.8125rem",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Guia Brasília
              </Link>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem" }}>›</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8125rem" }}>
                {artigo.title.split(":")[0]}
              </span>
            </div>

            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                maxWidth: "720px",
              }}
            >
              {artigo.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section style={{ background: "#FFFFFF", padding: "56px 0 80px" }}>
        <div className="container-st">
          <div className="guia-article-grid">
            {/* Main content */}
            <div style={{ maxWidth: "720px" }}>
              {/* Lead */}
              <p
                style={{
                  fontSize: "1.1875rem",
                  lineHeight: 1.75,
                  color: "#1F2937",
                  fontWeight: 500,
                  borderLeft: "3px solid #C8A45D",
                  paddingLeft: "20px",
                  marginBottom: "36px",
                }}
              >
                {artigo.summary}
              </p>

              {/* Content blocks */}
              {artigo.content.map((block, i) => (
                <RenderBlock key={i} block={block} />
              ))}
            </div>

            {/* Sidebar */}
            <aside className="guia-sidebar">
              {/* Service CTA */}
              {artigo.relatedServiceHref && (
                <div
                  style={{
                    background: "linear-gradient(135deg, #07111F 0%, #10233A 100%)",
                    borderRadius: "16px",
                    padding: "28px",
                  }}
                >
                  <p
                    style={{
                      color: "#C8A45D",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Serviço recomendado
                  </p>
                  <p
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "1rem",
                      lineHeight: 1.4,
                      marginBottom: "16px",
                    }}
                  >
                    {artigo.relatedServiceLabel}
                  </p>
                  <Link
                    href={artigo.relatedServiceHref}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 18px",
                      borderRadius: "999px",
                      background: "#C8A45D",
                      color: "#07111F",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      textDecoration: "none",
                    }}
                  >
                    Ver serviço →
                  </Link>
                </div>
              )}

              {/* Related articles */}
              {relacionados.length > 0 && (
                <div
                  style={{
                    background: "#F8F7F3",
                    borderRadius: "16px",
                    padding: "24px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: "#07111F",
                      fontSize: "0.875rem",
                      marginBottom: "16px",
                    }}
                  >
                    Leia também
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {relacionados.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/guia-brasilia/${r.slug}`}
                        className="btn-guia"
                        style={{ fontSize: "0.875rem", padding: "10px 14px" }}
                      >
                        {r.title.split(":")[0].split(",")[0]}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #07111F 0%, #05070A 100%)",
          padding: "72px 0",
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
            Planejar deslocamento em Brasília
          </p>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            Transporte executivo com conforto e pontualidade
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
              marginBottom: "32px",
            }}
          >
            Frota premium com motoristas profissionais. Solicite orçamento via WhatsApp.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/5561999999999"
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
            <Link
              href="/guia-brasilia"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "transparent",
                color: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
              }}
            >
              Voltar ao Guia
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
