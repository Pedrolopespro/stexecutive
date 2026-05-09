import React from "react";

type BadgeVariant = "gold" | "navy" | "light" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold: "bg-gold-500/10 text-gold-500 border border-gold-500/20",
  navy: "bg-navy-950 text-surface-white",
  light: "bg-gray-100 text-gray-600",
  outline: "bg-transparent text-navy-950 border border-navy-950/15",
};

export default function Badge({
  variant = "gold",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5",
        "px-3 py-1 rounded-full",
        "text-xs font-medium tracking-wide uppercase",
        variantStyles[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
