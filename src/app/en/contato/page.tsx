import ContatoTemplate from "@/components/templates/ContatoTemplate";
import { contatoEn, navEn, footerEn, commonEn } from "@/lib/i18n";

export default function EnContatoPage() {
  return (
    <ContatoTemplate
      locale="en"
      content={contatoEn}
      navDict={navEn}
      footerDict={footerEn}
      commonDict={commonEn}
    />
  );
}
