"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";

type Mode = "asc" | "desc" | "asc-ci" | "desc-ci" | "length-asc" | "length-desc" | "numeric-asc" | "numeric-desc";

const MODES: { key: Mode; label: string }[] = [
  { key: "asc", label: "A → Z (case-sensitive)" },
  { key: "desc", label: "Z → A" },
  { key: "asc-ci", label: "A → Z (case-insensitive)" },
  { key: "desc-ci", label: "Z → A (case-insensitive)" },
  { key: "length-asc", label: "Shortest first" },
  { key: "length-desc", label: "Longest first" },
  { key: "numeric-asc", label: "Numeric ↑" },
  { key: "numeric-desc", label: "Numeric ↓" },
];

export default function TextSorterTool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("asc");

  const output = useMemo(() => {
    if (!input) return "";
    const lines = input.split("\n");
    const sorted = [...lines].sort((a, b) => {
      switch (mode) {
        case "asc":
          return a.localeCompare(b);
        case "desc":
          return b.localeCompare(a);
        case "asc-ci":
          return a.toLowerCase().localeCompare(b.toLowerCase());
        case "desc-ci":
          return b.toLowerCase().localeCompare(a.toLowerCase());
        case "length-asc":
          return a.length - b.length;
        case "length-desc":
          return b.length - a.length;
        case "numeric-asc":
          return (parseFloat(a) || 0) - (parseFloat(b) || 0);
        case "numeric-desc":
          return (parseFloat(b) || 0) - (parseFloat(a) || 0);
      }
    });
    return sorted.join("\n");
  }, [input, mode]);

  const modeSelector = (
    <div className="flex flex-wrap gap-2">
      {MODES.map((m) => (
        <button
          key={m.key}
          type="button"
          onClick={() => setMode(m.key)}
          className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all border ${
            mode === m.key
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent"
              : "bg-[#1A1A1A] text-gray-300 border-gray-800 hover:border-purple-500/50 hover:text-white"
          }`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );

  return (
    <TextTransformTool
      input={input}
      output={output}
      onInputChange={setInput}
      modeSelector={modeSelector}
      inputPlaceholder="Paste a list of lines (one per line) to sort..."
      outputLabel={`Sorted (${MODES.find((m) => m.key === mode)?.label})`}
    />
  );
}
