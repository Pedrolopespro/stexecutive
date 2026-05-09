import React from "react";

interface QuoteBarProps {
  text: string;
  className?: string;
}

export default function QuoteBar({ text, className = "" }: QuoteBarProps) {
  return (
    <blockquote
      className={[
        "border-l-2 border-gold-500 pl-4",
        "text-sm sm:text-base italic text-gray-600 leading-relaxed",
        className,
      ].join(" ")}
    >
      {text}
    </blockquote>
  );
}
