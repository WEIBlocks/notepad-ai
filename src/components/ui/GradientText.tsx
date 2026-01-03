"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GradientText({
  children,
  className = "",
  animate = true
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${
        animate ? "animate-gradient-x bg-[length:200%_auto]" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
