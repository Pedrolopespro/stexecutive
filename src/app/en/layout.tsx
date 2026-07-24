"use client";

import { useEffect } from "react";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "en";
    return () => {
      document.documentElement.lang = "pt-BR";
    };
  }, []);

  return <>{children}</>;
}
