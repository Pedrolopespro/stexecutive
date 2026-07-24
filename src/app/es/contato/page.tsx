"use client";

import ContatoPage from "@/app/contato/page";
import { contatoEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export default function EsContatoPage() {
  return (
    <ContatoPage
      locale="es"
      content={contatoEs}
      navDict={navEs}
      footerDict={footerEs}
      commonDict={commonEs}
    />
  );
}
