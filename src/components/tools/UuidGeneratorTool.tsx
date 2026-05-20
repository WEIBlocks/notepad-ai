"use client";

import { useState, useCallback, useEffect } from "react";

function generateUuids(count: number, uppercase: boolean, hyphens: boolean): string[] {
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    let id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : // Fallback v4 using getRandomValues
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (crypto.getRandomValues(new Uint8Array(1))[0] % 16);
            const v = c === "x" ? r : (r % 4) + 8;
            return v.toString(16);
          });
    if (!hyphens) id = id.replace(/-/g, "");
    if (uppercase) id = id.toUpperCase();
    out.push(id);
  }
  return out;
}

export default function UuidGeneratorTool() {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const regenerate = useCallback(() => {
    setUuids(generateUuids(count, uppercase, hyphens));
  }, [count, uppercase, hyphens]);

  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(uuids.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <section className="mb-16">
      {/* Config */}
      <div className="mb-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] p-6 rounded-2xl border border-gray-800/50">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <label className="block">
            <span className="text-sm text-gray-400 mb-1 block">How many? ({count})</span>
            <input
              type="range"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
            <input type="checkbox" checked={hyphens} onChange={(e) => setHyphens(e.target.checked)} className="accent-purple-500" />
            Include hyphens
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
            <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} className="accent-purple-500" />
            Uppercase
          </label>
        </div>
      </div>

      {/* Output */}
      <textarea
        value={uuids.join("\n")}
        readOnly
        aria-label="Generated UUIDs"
        className="w-full min-h-[260px] p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white resize-y font-mono text-sm leading-relaxed"
      />

      {/* Actions */}
      <div className="mt-3 flex flex-wrap gap-3 items-center">
        <button
          type="button"
          onClick={regenerate}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-transparent rounded-lg text-sm font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
        >
          ↻ Generate New
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white transition-colors"
        >
          {copied ? "✓ Copied" : "Copy All"}
        </button>
        <span className="text-xs text-gray-500 ml-auto">
          UUID v4, generated with crypto.randomUUID() — cryptographically random, never uploaded.
        </span>
      </div>
    </section>
  );
}
