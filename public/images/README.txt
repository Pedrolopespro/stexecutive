ESTRUTURA DE IMAGENS
====================

/logo/          - Logotipo da ST Executive (PNG, SVG)
                  Exemplo: logo.svg, logo-white.svg, logo.png

/content/       - Imagens de conteúdo (fotos, banners, hero images)
                  Exemplo: hero-banner.jpg, service-image.jpg

/icons/         - Ícones customizados (SVG, PNG)
                  Exemplo: whatsapp-icon.svg, custom-icons.svg

USO NO CÓDIGO:
--------------
import Image from 'next/image'

<Image
  src="/images/logo/logo.svg"
  alt="ST Executive Logo"
  width={200}
  height={60}
/>

ou caminho direto:
<img src="/images/logo/logo.svg" alt="Logo" />
