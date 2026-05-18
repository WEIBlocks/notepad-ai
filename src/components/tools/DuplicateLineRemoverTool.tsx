"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";

export default function DuplicateLineRemoverTool() {
  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimLines, setTrimLines] = useState(true);

  const { output, removed } = useMemo(() => {
    if (!input) return { output: "", removed: 0 };
    const lines = input.split("\n");
    const seen = new Set<string>();
    const result: string[] = [];
    let removedCount = 0;

    for (const rawLine of lines) {
      const line = trimLines ? rawLine.trim() : rawLine;
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        result.push(rawLine);
      } else {
        removedCount++;
      }
    }
    return { output: result.join("\n"), removed: removedCount };
  }, [input, caseSensitive, trimLines]);

  const modeSelector = (
    <div className="flex flex-wrap gap-4 text-sm">
      <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
        <input
          type="checkbox"
          checked={caseSensitive}
          onChange={(e) => setCaseSensitive(e.target.checked)}
          className="accent-purple-500"
        />
        Case-sensitive
      </label>
      <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
        <input
          type="checkbox"
          checked={trimLines}
          onChange={(e) => setTrimLines(e.target.checked)}
          className="accent-purple-500"
        />
        Trim whitespace before comparing
      </label>
      {input && (
        <span className="text-xs text-gray-500 ml-auto">
          {removed} duplicate{removed === 1 ? "" : "s"} removed
        </span>
      )}
    </div>
  );

  return (
    <TextTransformTool
      input={input}
      output={output}
      onInputChange={setInput}
      modeSelector={modeSelector}
      inputPlaceholder="Paste a list with duplicate lines..."
      outputLabel="Unique Lines"
    />
  );
}
