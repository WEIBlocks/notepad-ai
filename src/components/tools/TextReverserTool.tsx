"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";

type Mode = "characters" | "words" | "lines";

const MODES: { key: Mode; label: string }[] = [
  { key: "characters", label: "Reverse Characters" },
  { key: "words", label: "Reverse Words" },
  { key: "lines", label: "Reverse Lines" },
];

export default function TextReverserTool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("characters");

  const output = useMemo(() => {
    if (!input) return "";
    switch (mode) {
      case "characters":
        // Split into Unicode grapheme-like units (handles surrogate pairs reasonably)
        return Array.from(input).reverse().join("");
      case "words":
        return input.split(/\s+/).reverse().join(" ");
      case "lines":
        return input.split("\n").reverse().join("\n");
    }
  }, [input, mode]);

  const modeSelector = (
    <div className="flex flex-wrap gap-2">
      {MODES.map((m) => (
        <button
          key={m.key}
          type="button"
          onClick={() => setMode(m.key)}
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
      inputPlaceholder="Paste text to reverse..."
      outputLabel={`Reversed (${MODES.find((m) => m.key === mode)?.label})`}
    />
  );
}
