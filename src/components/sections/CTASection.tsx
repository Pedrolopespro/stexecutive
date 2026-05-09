import React from "react";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  microcopy?: string;
  ctaText?: string;
  className?: string;
}

export default function CTASection({
  title,
  subtitle,
  microcopy,
  ctaText = "Solicitar orçamento pelo WhatsApp",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`bg-gradient-premium section-padding-lg ${className}`}>
      <div className="container-st text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold leading-tight text-surface-white">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/70">
              {subtitle}
            </p>
          )}

          <div className="gold-line mx-auto mt-6" />

          <div className="mt-8">
            <Button
              variant="whatsapp"
              size="lg"
              href={WHATSAPP_URL}
              showWhatsAppIcon
            >
              {ctaText}
            </Button>
          </div>

          {microcopy && (
            <p className="mt-4 text-sm text-white/50">
              {microcopy}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
