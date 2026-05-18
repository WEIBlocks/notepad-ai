"use client";

import { useState, useMemo } from "react";

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with",
  "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do",
  "does", "did", "will", "would", "could", "should", "may", "might", "must", "can",
  "this", "that", "these", "those", "i", "you", "he", "she", "it", "we", "they",
  "my", "your", "his", "her", "its", "our", "their", "me", "him", "us", "them",
  "as", "by", "from", "into", "about", "than", "so", "if", "then", "what", "which",
  "who", "whom", "whose", "where", "when", "why", "how", "not", "no", "yes",
]);

interface FrequencyEntry {
  word: string;
  count: number;
}

export default function WordFrequencyTool() {
  const [text, setText] = useState("");
  const [excludeStopWords, setExcludeStopWords] = useState(true);
  const [copied, setCopied] = useState(false);

  const { frequencies, uniqueWords, totalWords } = useMemo(() => {
    if (!text) return { frequencies: [] as FrequencyEntry[], uniqueWords: 0, totalWords: 0 };
    const words = text
      .toLowerCase()
      .replace(/[^a-z0-9\s']/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 0 && (!excludeStopWords || !STOP_WORDS.has(w)));

    const counts = new Map<string, number>();
    for (const w of words) counts.set(w, (counts.get(w) || 0) + 1);

    const entries: FrequencyEntry[] = Array.from(counts.entries())
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    return { frequencies: entries, uniqueWords: counts.size, totalWords: words.length };
  }, [text, excludeStopWords]);

  const handleCopy = async () => {
    const csv = ["word,count", ...frequencies.map((e) => `${e.word},${e.count}`)].join("\n");
    try {
      await navigator.clipboard.writeText(csv);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* Clipboard blocked */
    }
  };

  const topWord = frequencies[0] ?? { word: "—", count: 0 };

  return (
    <section className="mb-16">
      {/* Live stats readout */}
      <div className="mb-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] p-6 sm:p-8 rounded-2xl border border-gray-800/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tabular-nums break-all">
              {topWord.word}
            </div>
            <div className="text-sm text-gray-400 mt-2 font-medium">
              Most Frequent Word {topWord.count > 0 && `(${topWord.count}×)`}
            </div>
          </div>
          <div className="border-l border-gray-800/50 pl-4">
            <div className="text-xl sm:text-2xl font-semibold text-white tabular-nums">{uniqueWords}</div>
            <div className="text-xs text-gray-500 mt-1">Unique Words</div>
          </div>
          <div className="border-l border-gray-800/50 pl-4">
            <div className="text-xl sm:text-2xl font-semibold text-white tabular-nums">{totalWords}</div>
            <div className="text-xs text-gray-500 mt-1">Total Words {excludeStopWords && "(filtered)"}</div>
          </div>
        </div>
      </div>

      {/* Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text to see word frequency analysis..."
        aria-label="Text input"
        className="w-full min-h-[260px] p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 resize-y font-mono text-sm leading-relaxed transition-colors"
      />

      {/* Options + Actions */}
      <div className="mt-3 flex flex-wrap gap-3 items-center">
        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={excludeStopWords}
            onChange={(e) => setExcludeStopWords(e.target.checked)}
            className="accent-purple-500"
          />
          Exclude common stop words (the, a, is...)
        </label>
        <button
          type="button"
          onClick={handleCopy}
          disabled={frequencies.length === 0}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors ml-auto"
        >
          {copied ? "✓ Copied as CSV" : "Copy as CSV"}
        </button>
        <button
          type="button"
          onClick={() => setText("")}
          disabled={!text}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-red-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Top 20 frequency table */}
      {frequencies.length > 0 && (
        <div className="mt-6 bg-[#1A1A1A] rounded-2xl border border-gray-800 overflow-hidden">
          <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider p-4 border-b border-gray-800">
            Top {frequencies.length} Words
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4">
            {frequencies.map((entry, idx) => (
              <div
                key={entry.word}
                className="flex items-center justify-between bg-[#0f0f0f] px-3 py-2 rounded-lg border border-gray-800/50"
              >
                <span className="text-sm text-gray-300 truncate" title={entry.word}>
                  <span className="text-gray-600 text-xs mr-2">#{idx + 1}</span>
                  {entry.word}
                </span>
                <span className="text-sm text-blue-400 font-mono tabular-nums ml-2">
                  {entry.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
