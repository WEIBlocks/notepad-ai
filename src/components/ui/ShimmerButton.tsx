"use client";

import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function ShimmerButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ShimmerButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center px-6 py-3
        overflow-hidden font-medium text-white
        bg-gradient-to-r from-blue-600 to-purple-600
        rounded-xl group
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 w-full h-full">
        <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />
      </span>

      {/* Glow effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
