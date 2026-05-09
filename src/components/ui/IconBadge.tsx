import React from "react";

interface IconBadgeProps {
  icon: React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
}

export default function IconBadge({
  icon,
  theme = "light",
  className = "",
}: IconBadgeProps) {
  const themeStyles =
    theme === "dark"
      ? "bg-white/10 text-gold-400"
      : "bg-navy-950/5 text-navy-950";

  return (
    <div
      className={[
        "inline-flex items-center justify-center",
        "w-11 h-11 rounded-[12px]",
        themeStyles,
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}
