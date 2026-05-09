"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-navy-950"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={[
          "w-full px-4 py-3",
          "bg-surface-white",
          "border border-gray-200",
          "rounded-[12px]",
          "text-base text-navy-950 placeholder:text-gray-400",
          "transition-all duration-[var(--motion-fast)]",
          "focus:outline-none focus:border-action-600 focus:ring-2 focus:ring-action-600/20",
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "",
          className,
        ].join(" ")}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-0.5">{error}</span>
      )}
    </div>
  );
}
