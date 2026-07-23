"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
  showWhatsAppIcon?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-action-600 text-surface-white",
    "hover:bg-action-500 hover:-translate-y-0.5",
    "active:translate-y-0",
    "shadow-soft hover:shadow-card",
  ].join(" "),
  secondary: [
    "bg-transparent text-surface-white",
    "border border-white/25",
    "hover:bg-white/10 hover:-translate-y-0.5",
    "active:translate-y-0",
  ].join(" "),
  outline: [
    "bg-transparent text-navy-950",
    "border border-navy-950/20",
    "hover:border-navy-950/40 hover:-translate-y-0.5",
    "active:translate-y-0",
  ].join(" "),
  ghost: [
    "bg-transparent text-navy-950",
    "hover:bg-gray-100",
  ].join(" "),
  whatsapp: [
    "bg-[#25D366] text-surface-white",
    "hover:bg-[#20BD5A] hover:-translate-y-0.5",
    "active:translate-y-0",
    "shadow-soft hover:shadow-card",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-3 text-[15px] gap-2",
  lg: "px-6 py-3.5 text-base gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  showWhatsAppIcon = false,
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = [
    "inline-flex items-center justify-center",
    "rounded-full font-semibold",
    "transition-all duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
    "cursor-pointer select-none",
    "focus-visible:outline-2 focus-visible:outline-action-600 focus-visible:outline-offset-2",
    fullWidth ? "w-full" : "",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(" ");

  const content = (
    <>
      {showWhatsAppIcon && <MessageCircle className="w-4 h-4 shrink-0" />}
      {icon && !showWhatsAppIcon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    // Rota interna (ex: "/aluguel-de-van-brasilia/") usa next/link para
    // navegação client-side; links externos e âncoras usam <a> normal.
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={baseStyles}>
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={baseStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      {content}
    </button>
  );
}
