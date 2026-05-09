"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={[
              "rounded-[16px] border overflow-hidden",
              "transition-all duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
              isOpen
                ? "bg-surface-white border-gray-200 shadow-soft"
                : "bg-surface-off border-gray-200/60 hover:bg-surface-white",
            ].join(" ")}
          >
            <button
              onClick={() => toggle(index)}
              className={[
                "flex items-center justify-between w-full text-left",
                "px-5 py-4 sm:px-6 sm:py-5",
                "cursor-pointer",
              ].join(" ")}
              aria-expanded={isOpen}
            >
              <span className="text-[15px] sm:text-base font-semibold text-navy-950 pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={[
                  "w-5 h-5 text-gray-400 shrink-0",
                  "transition-transform duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
                  isOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>
            <div
              className={[
                "overflow-hidden",
                "transition-all duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
