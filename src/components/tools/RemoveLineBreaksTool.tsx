"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";

type Mode = "single-space" | "no-space" | "preserve-paragraphs";

const MODES: { key: Mode; label: string; description: string }[] = [
  { key: "single-space", label: "Replace with space", description: "Line breaks → single space" },
  { key: "no-space", label: "Remove entirely", description: "Line breaks deleted" },
  { key: "preserve-paragraphs", label: "Keep paragraph breaks", description: "Only single line breaks removed; blank lines (paragraph breaks) preserved" },
];

export default function RemoveLineBreaksTool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("single-space");

  const output = useMemo(() => {
    if (!input) return "";
    switch (mode) {
      case "single-space":
        return input.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
      case "no-space":
        return input.replace(/[\r\n]+/g, "");
      case "preserve-paragraphs":
        // Preserve double-newline (paragraph breaks), collapse single newlines to spaces
        return input
          .split(/\n\s*\n/)
          .map((para) => para.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim())
          .join("\n\n");
    }
  }, [input, mode]);

  const modeSelector = (
    <div className="flex flex-wrap gap-2">
      {MODES.map((m) => (
        <button
          key={m.key}
          type="button"
          onClick={() => setMode(m.key)}
          title={m.description}
          className={`px-3 py-2 text-sm rounded-lg font-medium transition-all border ${
            mode === m.key
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.3)]"
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
      inputPlaceholder="Paste text with line breaks you want to remove..."
      outputLabel="Result"
    />
  );
}
