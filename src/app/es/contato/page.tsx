import ContatoTemplate from "@/components/templates/ContatoTemplate";
import { contatoEs, navEs, footerEs, commonEs } from "@/lib/i18n";

export default function EsContatoPage() {
  return (
    <ContatoTemplate
      locale="es"
      content={contatoEs}
      navDict={navEs}
      footerDict={footerEs}
      commonDict={commonEs}
    />
  );
}
