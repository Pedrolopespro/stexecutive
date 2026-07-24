"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  shortText: string;
  description: string;
  highlights: string[];
  ctaText: string;
  internalLink: string;
  featured?: boolean;
  className?: string;
  whatsappUrl?: string;
  moreLabel?: string;
}

export default function ServiceCard({
  icon,
  title,
  shortText,
  description,
  highlights,
  ctaText,
  internalLink,
  featured = false,
  className = "",
  whatsappUrl = WHATSAPP_URL,
  moreLabel = "Saiba mais",
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={[
        "rounded-[20px] border overflow-hidden",
        "transition-all duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
        featured
          ? "bg-surface-white border-action-600/20 shadow-card ring-1 ring-action-600/10"
          : "bg-surface-white border-gray-200/60 shadow-soft",
        "hover:shadow-card hover:-translate-y-1",
        isExpanded ? "hover:border-action-600/30" : "",
        className,
      ].join(" ")}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left px-5 py-5 sm:px-6 sm:py-6 cursor-pointer"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={[
                "flex items-center justify-center shrink-0",
                "w-11 h-11 rounded-[12px]",
                featured
                  ? "bg-action-600/10 text-action-600"
                  : "bg-navy-950/5 text-navy-950",
              ].join(" ")}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-navy-950">
                {title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                {shortText}
              </p>
            </div>
          </div>
          <ChevronDown
            className={[
              "w-5 h-5 text-gray-400 shrink-0 mt-1",
              "transition-transform duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
              isExpanded ? "rotate-180" : "",
            ].join(" ")}
          />
        </div>
      </button>

      {/* Expanded content */}
      <div
        className={[
          "overflow-hidden",
          "transition-all duration-[var(--motion-slow)] ease-[var(--ease-premium)]",
          isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-5 pb-6 sm:px-6 sm:pb-7 border-t border-gray-100 pt-5">
          <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600">
            {description}
          </p>

          <ul className="mt-4 flex flex-col gap-2">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-navy-950">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              size="sm"
              href={whatsappUrl}
              showWhatsAppIcon
            >
              {ctaText}
            </Button>
            <Link
              href={internalLink}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-action-600 hover:text-action-500 transition-colors"
            >
              {moreLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
