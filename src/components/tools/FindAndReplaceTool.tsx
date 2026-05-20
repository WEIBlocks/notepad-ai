"use client";

import { useState, useMemo } from "react";

export default function FindAndReplaceTool() {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [useRegex, setUseRegex] = useState(false);
  const [copied, setCopied] = useState(false);

  const { output, matchCount, error } = useMemo(() => {
    if (!text || !find) return { output: text, matchCount: 0, error: "" };
    try {
      const flags = caseSensitive ? "g" : "gi";
      const pattern = useRegex
        ? new RegExp(find, flags)
        : new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flags);
      const matches = text.match(pattern);
      const result = text.replace(pattern, replace);
      return { output: result, matchCount: matches ? matches.length : 0, error: "" };
    } catch (e) {
      return { output: text, matchCount: 0, error: "Invalid regular expression." };
    }
  }, [text, find, replace, caseSensitive, useRegex]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <section className="mb-16">
      {/* Find/Replace controls */}
      <div className="mb-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] p-6 rounded-2xl border border-gray-800/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Find</label>
            <input
              type="text"
              value={find}
              onChange={(e) => setFind(e.target.value)}
              placeholder={useRegex ? "Regular expression..." : "Text to find..."}
              className="w-full p-3 bg-[#0f0f0f] border border-gray-800 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500/40 font-mono"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Replace with</label>
            <input
              type="text"
              value={replace}
              onChange={(e) => setReplace(e.target.value)}
              placeholder="Replacement text..."
              className="w-full p-3 bg-[#0f0f0f] border border-gray-800 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500/40 font-mono"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
            <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} className="accent-purple-500" />
            Case-sensitive
          </label>
          <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
            <input type="checkbox" checked={useRegex} onChange={(e) => setUseRegex(e.target.checked)} className="accent-purple-500" />
            Use regex
          </label>
          <span className="text-xs text-gray-500 ml-auto self-center">
            {error ? <span className="text-red-400">{error}</span> : `${matchCount} match${matchCount === 1 ? "" : "es"}`}
          </span>
        </div>
      </div>

      {/* Input + Output */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2 font-medium">Original Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            className="w-full min-h-[260px] p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 resize-y font-mono text-sm leading-relaxed"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2 font-medium">Result</label>
          <textarea
            value={output}
            readOnly
            placeholder="Result appears here..."
            className="w-full min-h-[260px] p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] border border-gray-800 rounded-2xl text-white placeholder-gray-500 resize-y font-mono text-sm leading-relaxed"
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-3 items-center">
        <button
          type="button"
          onClick={handleCopy}
          disabled={!output}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {copied ? "✓ Copied" : "Copy Result"}
        </button>
        <button
          type="button"
          onClick={() => setText("")}
          disabled={!text}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-red-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Clear
        </button>
        <span className="text-xs text-gray-500 ml-auto">Find &amp; replace runs in your browser — nothing uploaded.</span>
      </div>
    </section>
  );
}
