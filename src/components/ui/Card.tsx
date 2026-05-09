import React from "react";

type CardVariant = "white" | "dark" | "offwhite" | "transparent";

interface CardProps {
  variant?: CardVariant;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  white: "bg-surface-white border border-gray-200/60",
  dark: "bg-navy-900 border border-white/10 text-surface-white",
  offwhite: "bg-surface-off border border-gray-200/40",
  transparent: "bg-transparent",
};

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  variant = "white",
  hover = false,
  padding = "md",
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-[20px]",
        "transition-all duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
        variantStyles[variant],
        paddingStyles[padding],
        hover
          ? "hover:shadow-card hover:-translate-y-1 hover:border-action-600/30"
          : "shadow-soft",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
