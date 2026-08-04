"use client";

import React, { useState, useEffect } from "react";
import { buildWhatsAppUrl, type Locale } from "@/lib/constants";
import { commonPt, type CommonDict } from "@/lib/i18n";

interface WhatsAppFloatingButtonProps {
  locale?: Locale;
  dict?: CommonDict;
}

export default function WhatsAppFloatingButton({ dict = commonPt }: WhatsAppFloatingButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(dict.whatsappMessage);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={[
        "fixed z-40 bottom-6 right-6",
        "transition-all duration-[var(--motion-slow)] ease-[var(--ease-premium)]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      {/* Anel pulsante */}
      <span className="absolute inset-0 rounded-full bg-[#4ade80] opacity-40 animate-ping" />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.whatsappFloatingAriaLabel}
        className={[
          "relative flex items-center gap-2",
          "bg-[#25D366] text-surface-white",
          "rounded-full shadow-premium",
          "transition-all duration-[var(--motion-slow)] ease-[var(--ease-premium)]",
          "hover:bg-[#20BD5A] hover:shadow-card hover:scale-105",
          "active:scale-95",
          "px-5 py-3.5",
        ].join(" ")}
      >
        <img src="/images/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 shrink-0" width={20} height={20} />
        <span className="text-sm font-semibold">
          {dict.whatsappFloatingLabel}
        </span>
      </a>
    </div>
  );
}
