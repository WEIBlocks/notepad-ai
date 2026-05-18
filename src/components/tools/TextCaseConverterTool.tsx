"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";
import { CASE_MODES, CaseModeKey } from "./textCaseHelpers";

/**
 * Multi-mode case converter. Renders a mode-button strip plus the standard
 * input/output panes. Used on /tools/text-case-converter (the all-in-one).
 */
export default function TextCaseConverterTool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<CaseModeKey>("upper");

  const output = useMemo(() => {
    const m = CASE_MODES.find((mm) => mm.key === mode);
    return m ? m.transform(input) : input;
  }, [input, mode]);

  const modeSelector = (
    <div className="flex flex-wrap gap-2">
      {CASE_MODES.map((m) => (
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
      inputPlaceholder="Type or paste your text — pick a case mode above..."
      outputLabel={`Result — ${CASE_MODES.find((m) => m.key === mode)?.label}`}
    />
  );
}
