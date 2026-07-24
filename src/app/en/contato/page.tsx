"use client";

import ContatoPage from "@/app/contato/page";
import { contatoEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export default function EnContatoPage() {
  return (
    <ContatoPage
      locale="en"
      content={contatoEn}
      navDict={navEn}
      footerDict={footerEn}
      commonDict={commonEn}
    />
  );
}
