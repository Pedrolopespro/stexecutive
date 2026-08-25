import React from "react";
import Badge from "./Badge";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor =
    theme === "dark" ? "text-surface-white" : "text-navy-950";
  const subtitleColor =
    theme === "dark" ? "text-white/70" : "text-gray-600";

  return (
    <div className={`max-w-2xl ${alignClass} mb-10 md:mb-14 ${className}`}>
      {eyebrow && (
        <Badge variant={theme === "dark" ? "gold" : "goldLight"} className="mb-4">
          {eyebrow}
        </Badge>
      )}

      <h2
        className={`text-[28px] sm:text-[34px] lg:text-[42px] font-bold leading-tight tracking-tight ${titleColor}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}

      <div
        className={`gold-line mt-5 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
    </div>
  );
}
