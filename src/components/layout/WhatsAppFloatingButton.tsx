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
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento no WhatsApp"
      className={[
        "fixed z-40",
        // Desktop: bottom-right floating
        "bottom-6 right-6",
        // Mobile: bottom bar style
        "md:bottom-6 md:right-6",
        // Shared styles
        "flex items-center gap-2",
        "bg-[#25D366] text-surface-white",
        "rounded-full shadow-premium",
        "transition-all duration-[var(--motion-slow)] ease-[var(--ease-premium)]",
        "hover:bg-[#20BD5A] hover:shadow-card hover:scale-105",
        "active:scale-95",
        // Size
        "px-5 py-3.5 md:px-5 md:py-3.5",
        // Visibility
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="text-sm font-semibold hidden sm:inline">
        Solicitar orçamento
      </span>
    </a>
  );
}
