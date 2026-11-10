import type { Metadata } from "next";

/**
 * /video/ — o endereço que o botão "Compartilhar" do vídeo institucional envia.
 *
 * Existe por um motivo: a prévia do WhatsApp (capa, título e descrição) vem
 * das meta tags da URL compartilhada, e o WhatsApp ignora o "#" do endereço.
 * Compartilhando a Home direto, a prévia seria a da Home. Aqui a prévia é a do
 * vídeo, e quem clica é levado na hora até ele: /?video=1#video-institucional.
 *
 * - O "?video=1" faz o navegador buscar a Home de novo em vez de usar uma
 *   cópia antiga guardada (o Safari do iPhone guarda páginas por dias).
 * - `?l=en` / `?l=es` levam às versões em inglês e espanhol.
 * - `noindex`: a página não vai para o Google nem para o sitemap de imagens
 *   (scripts/generate-image-sitemap.mjs pula páginas noindex). Ela não
 *   concorre com a Home.
 * - A capa é JPEG, não WebP: o WhatsApp falha em silêncio com WebP.
 */

const TITULO = "Vídeo institucional — ST Executive | Transporte Executivo em Brasília";
const DESCRICAO =
  "Vans, SUVs e sedans executivos com motorista profissional em Brasília. Assista ao vídeo e solicite seu orçamento.";
const CAPA = "https://stexecutive.com.br/images/content/video-st-executive-share.jpg";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://stexecutive.com.br/video/",
    siteName: "ST Executive",
    title: TITULO,
    description: DESCRICAO,
    images: [
      {
        url: CAPA,
        secureUrl: CAPA,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Vídeo institucional da ST Executive — frota executiva em Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRICAO,
    images: [CAPA],
  },
};

const DESTINO = "/?video=1#video-institucional";

// Roda antes de qualquer pintura: escolhe o idioma e troca de página sem
// deixar /video/ no histórico (o "voltar" não cai de novo aqui).
const REDIRECIONAR = `(function(){try{var l=new URLSearchParams(location.search).get('l');var p=(l==='en'||l==='es')?'/'+l+'/':'/';location.replace(p+'?video=1#video-institucional');}catch(e){location.replace('${DESTINO}');}})();`;

export default function VideoPage() {
  return (
    <>
      {/* Sem JavaScript: o refresh leva à versão em português. */}
      <meta httpEquiv="refresh" content={`0; url=${DESTINO}`} />
      <script dangerouslySetInnerHTML={{ __html: REDIRECIONAR }} />
      <main className="min-h-screen flex items-center justify-center bg-navy-950 px-6 text-center">
        <p className="text-white/80 text-sm">
          Abrindo o vídeo da ST Executive…{" "}
          <a href={DESTINO} className="underline text-white">
            Toque aqui se não abrir.
          </a>
        </p>
      </main>
    </>
  );
}
