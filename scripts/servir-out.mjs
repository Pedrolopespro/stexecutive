// Servidor estatico para a pasta out/ — so para conferencia local.
//
// Por que existe: `next dev` e `next build` dividem a pasta .next, entao rodar
// um build com o dev no ar apaga o CSS que o dev esta servindo e a pagina
// aparece crua. Servindo out/ o problema some, e de quebra o que se ve e
// exatamente o que iria para o servidor.
//
// Uso: node scripts/servir-out.mjs [porta]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';

const RAIZ = new URL('../out/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PORTA = Number(process.argv[2] || 4000);

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const servidor = createServer(async (req, res) => {
  try {
    let caminho = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    // impede sair da pasta out/
    caminho = normalize(caminho).replace(/^(\.\.[/\\])+/, '');
    let arquivo = join(RAIZ, caminho);

    // o site usa trailingSlash: /contato/ -> /contato/index.html
    try {
      const s = await stat(arquivo);
      if (s.isDirectory()) arquivo = join(arquivo, 'index.html');
    } catch {
      if (!extname(arquivo)) arquivo = join(arquivo, 'index.html');
    }

    const conteudo = await readFile(arquivo);
    res.writeHead(200, {
      'Content-Type': TIPOS[extname(arquivo).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(conteudo);
  } catch {
    try {
      const erro = await readFile(join(RAIZ, '404.html'));
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(erro);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404');
    }
  }
});

servidor.listen(PORTA, () => {
  console.log(`servindo ${RAIZ} em http://localhost:${PORTA}`);
});
