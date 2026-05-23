"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

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
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento no WhatsApp"
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
        <img src="/images/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 shrink-0" />
        <span className="text-sm font-semibold">
          Atendimento imediato
        </span>
      </a>
    </div>
  );
}
