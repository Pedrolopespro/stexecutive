import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GOOGLE_REVIEWS, CONTACT_EMAIL } from "@/lib/constants";

// next/font: baixa a Inter em build time e serve do próprio domínio
// elimina a requisição externa ao Google Fonts (render-blocking)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  verification: {
    google: "ejiWTOXEFJ1GCK3Ezg1M6DiewNW7EbTiRWuTNddwc1Q",
  },
  title: "Transporte Executivo em Brasília | Van e SUV — ST Executive",
  // 161 chars truncavam no resultado de busca; esta versão fecha em 138.
  description:
    "Transporte executivo em Brasília para empresas, aeroporto e eventos. Vans, SUVs, sedans e blindados com motorista. Solicite seu orçamento.",
  keywords: [
    "transporte executivo brasília",
    "vans executivas brasília",
    "aluguel de van brasília",
    "SUV executiva brasília",
    "transfer aeroporto brasília",
    "transporte para eventos brasília",
    "transporte corporativo brasília",
    "transporte para embaixadas brasília",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Transporte Executivo em Brasília | Van e SUV — ST Executive",
    description:
      "Transporte executivo em Brasília com motorista profissional. SUVs e vans para empresas, embaixadas, eventos e transfer aeroporto. Solicite orçamento no WhatsApp.",
    siteName: "ST Executive",
    images: [
      {
        url: "https://stexecutive.com.br/images/content/social.jpeg",
        width: 1200,
        height: 630,
        alt: "ST Executive — Transporte Executivo em Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transporte Executivo em Brasília | Van e SUV — ST Executive",
    description:
      "Transporte executivo em Brasília com motorista profissional. SUVs e vans para empresas, embaixadas, eventos e transfer aeroporto.",
    images: ["https://stexecutive.com.br/images/content/social.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`h-full ${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5GVMZZQJ');`,
          }}
        />
        {/* Google Ads.

            Aqui havia tambem <script async src=".../gtag/js?id=AW-18160577429">.
            Era duplicata: o conteiner GTM-5GVMZZQJ acima ja carrega o mesmo
            gtag/js para o mesmo ID de Ads, entao o arquivo vinha duas vezes —
            372 KB por visita de celular, sem contrapartida nenhuma.

            Verificado em tres execucoes, comparando os sinais enviados com e
            sem a tag: remover nao altera nada no Ads nem no GA4. O
            `gtag('config', ...)` abaixo empilha no dataLayer, e o gtag/js que
            o GTM carrega processa normalmente. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18160577429');
            `,
          }}
        />
        {/* Google Ads — Conversão: Enviar formulário de lead */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-18160577429/qaJ_CIyCrKwcEJXX0dND',
                  'value': 1.0,
                  'currency': 'BRL',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        {/* Schema.org — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://stexecutive.com.br/#business",
                  "name": "ST Executive",
                  "alternateName": "ST Executive by Saulo Transportes",
                  "url": "https://stexecutive.com.br",
                  "logo": "https://stexecutive.com.br/og-image.svg",
                  "image": "https://stexecutive.com.br/images/content/social.jpeg",
                  "description": "A ST Executive é especializada em transporte executivo em Brasília e região. Todos os serviços são realizados exclusivamente com motorista profissional. Não realizamos locação de carros, SUVs, vans, minivans, micro-ônibus ou ônibus sem motorista. Atendemos empresas, embaixadas, eventos corporativos e transfer aeroporto.",
                  "telephone": "+55-61-98409-7971",
                  // Vem da mesma constante que o site exibe. O schema dizia
                  // contato@stexecutive.com.br enquanto o rodape e a pagina de
                  // contato mostravam stexecutivebsb@hotmail.com — e e nesta que
                  // os pedidos realmente chegam (ver addAddress em mail.php).
                  // O contato@ continua sendo o REMETENTE do mail.php, que e
                  // outra coisa: quem envia, nao quem recebe.
                  "email": CONTACT_EMAIL,
                  "address": {
                    "@type": "PostalAddress",
                    // Rua e CEP faltavam. Sao os mesmos do perfil do Google Meu Negocio;
                    // sem eles a empresa perde forca na busca local e o schema fica
                    // divergente do perfil.
                    "streetAddress": "Quadra 05 Conj. G lote 47 - Sobradinho",
                    "addressLocality": "Brasília",
                    "addressRegion": "DF",
                    "postalCode": "73030-057",
                    "addressCountry": "BR"
                  },
                  // Nota real do perfil, conferida em 24/08/2026 no painel do dono e na
                  // pagina publica do Google. A diretriz do Google exige que estes
                  // numeros sejam os MESMOS exibidos na pagina — os dois saem de
                  // GOOGLE_REVIEWS em constants.ts.
                  "areaServed": [
                    { "@type": "City", "name": "Brasília" },
                    { "@type": "State", "name": "Distrito Federal" }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Serviços de Transporte Executivo",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transfer Aeroporto Internacional Juscelino Kubitschek" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Van Executiva para Eventos em Brasília" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SUV e Sedan Executivo com Motorista" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Micro-ônibus Executivo para Grupos" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ônibus Executivo para Eventos e Congressos" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "City Tour em Brasília com Motorista Profissional" } }
                    ]
                  },
                  "sameAs": [
                    "https://www.instagram.com/stexecutive"
                  ],
                  "priceRange": "$$",
                  "currenciesAccepted": "BRL",
                  "paymentAccepted": "Pix, Transferência Bancária, Cartão de Crédito",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://stexecutive.com.br/#website",
                  "url": "https://stexecutive.com.br",
                  "name": "ST Executive — Transporte Executivo em Brasília",
                  "publisher": { "@id": "https://stexecutive.com.br/#business" }
                }
              ]
            })
          }}
        />
        {/* Aqui havia um preload fixo de "hero site mobile.webp".
            Ele valia para TODAS as paginas do site, inclusive as que nao tem
            capa nenhuma — /contato/ baixava 104 KB de uma imagem que nunca
            aparece. E na home ele anulava o <picture> novo, porque preload
            baixa antes de o navegador avaliar o media query.
            A prioridade agora vem do fetchPriority="high" no proprio <img>
            dentro do <picture>, que respeita a largura da tela. */}
      </head>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GVMZZQJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
