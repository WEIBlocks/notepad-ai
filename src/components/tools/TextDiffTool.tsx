"use client";

import { useState, useMemo } from "react";

interface DiffLine {
  type: "equal" | "added" | "removed";
  text: string;
}

/**
 * Line-level diff using a longest-common-subsequence (LCS) algorithm.
 * Good enough for comparing text blocks line-by-line. O(n*m) time/space —
 * fine for typical documents (caps at a few thousand lines).
 */
function diffLines(a: string, b: string): DiffLine[] {
  const aLines = a.split("\n");
  const bLines = b.split("\n");
  const n = aLines.length;
  const m = bLines.length;

  // LCS length table
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = aLines[i] === bLines[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const result: DiffLine[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (aLines[i] === bLines[j]) {
      result.push({ type: "equal", text: aLines[i] });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      result.push({ type: "removed", text: aLines[i] });
      i++;
    } else {
      result.push({ type: "added", text: bLines[j] });
      j++;
    }
  }
  while (i < n) result.push({ type: "removed", text: aLines[i++] });
  while (j < m) result.push({ type: "added", text: bLines[j++] });
  return result;
}

export default function TextDiffTool() {
  const [original, setOriginal] = useState("");
  const [changed, setChanged] = useState("");

  const { diff, added, removed } = useMemo(() => {
    if (!original && !changed) return { diff: [] as DiffLine[], added: 0, removed: 0 };
    const d = diffLines(original, changed);
    return {
      diff: d,
      added: d.filter((l) => l.type === "added").length,
      removed: d.filter((l) => l.type === "removed").length,
    };
  }, [original, changed]);

  return (
    <section className="mb-16">
      {/* Two inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2 font-medium">Original</label>
          <textarea
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            placeholder="Paste the original text..."
            className="w-full min-h-[220px] p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 resize-y font-mono text-sm leading-relaxed"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2 font-medium">Changed</label>
          <textarea
            value={changed}
            onChange={(e) => setChanged(e.target.value)}
            placeholder="Paste the modified text..."
            className="w-full min-h-[220px] p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 resize-y font-mono text-sm leading-relaxed"
          />
        </div>
      </div>

      {/* Diff stats */}
      <div className="flex gap-4 mb-3 text-sm">
        <span className="text-green-400">+{added} added</span>
        <span className="text-red-400">−{removed} removed</span>
      </div>

      {/* Diff output */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl overflow-hidden">
        {diff.length === 0 ? (
          <p className="p-6 text-gray-500 text-sm text-center">Paste text in both boxes to see the line-by-line diff.</p>
        ) : (
          <pre className="p-4 overflow-x-auto text-sm leading-relaxed font-mono">
            {diff.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.type === "added"
                    ? "bg-green-500/10 text-green-300"
                    : line.type === "removed"
                    ? "bg-red-500/10 text-red-300"
                    : "text-gray-400"
                }
              >
                <span className="select-none text-gray-600 mr-2">
                  {line.type === "added" ? "+" : line.type === "removed" ? "−" : " "}
                </span>
                {line.text || " "}
              </div>
            ))}
          </pre>
        )}
      </div>
      <p className="text-xs text-gray-500 mt-3">Line-by-line diff computed in your browser. Nothing is uploaded.</p>
    </section>
  );
}
