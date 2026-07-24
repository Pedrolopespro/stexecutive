"use client";

import { useEffect } from "react";

export default function EsLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "es";
    return () => {
      document.documentElement.lang = "pt-BR";
    };
  }, []);

  return <>{children}</>;
}
