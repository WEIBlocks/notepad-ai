"use client";

import { useState, useEffect, useCallback } from "react";

const CHARS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{};:,.<>?/|~",
  similar: "il1Lo0O", // characters to exclude when "no similar" is on
};

function generatePassword(length: number, opts: { upper: boolean; lower: boolean; numbers: boolean; symbols: boolean; excludeSimilar: boolean }) {
  let pool = "";
  if (opts.upper) pool += CHARS.upper;
  if (opts.lower) pool += CHARS.lower;
  if (opts.numbers) pool += CHARS.numbers;
  if (opts.symbols) pool += CHARS.symbols;
  if (opts.excludeSimilar) {
    pool = pool.split("").filter((c) => !CHARS.similar.includes(c)).join("");
  }
  if (!pool) return "";

  // Use crypto.getRandomValues for cryptographic randomness
  const arr = new Uint32Array(length);
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(arr);
  } else {
    for (let i = 0; i < length; i++) arr[i] = Math.floor(Math.random() * 0xffffffff);
  }

  let pw = "";
  for (let i = 0; i < length; i++) {
    pw += pool[arr[i] % pool.length];
  }
  return pw;
}

function estimateStrength(pw: string): { label: string; color: string; score: number } {
  if (!pw) return { label: "—", color: "text-gray-500", score: 0 };
  let charsetSize = 0;
  if (/[a-z]/.test(pw)) charsetSize += 26;
  if (/[A-Z]/.test(pw)) charsetSize += 26;
  if (/[0-9]/.test(pw)) charsetSize += 10;
  if (/[^a-zA-Z0-9]/.test(pw)) charsetSize += 28;
  const entropy = pw.length * Math.log2(charsetSize || 1);
  if (entropy < 28) return { label: "Very weak", color: "text-red-400", score: 1 };
  if (entropy < 36) return { label: "Weak", color: "text-orange-400", score: 2 };
  if (entropy < 60) return { label: "Reasonable", color: "text-yellow-400", score: 3 };
  if (entropy < 128) return { label: "Strong", color: "text-green-400", score: 4 };
  return { label: "Very strong", color: "text-emerald-400", score: 5 };
}

export default function PasswordGeneratorTool() {
  const [length, setLength] = useState(20);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const regenerate = useCallback(() => {
    setPassword(generatePassword(length, { upper, lower, numbers, symbols, excludeSimilar }));
  }, [length, upper, lower, numbers, symbols, excludeSimilar]);

  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const strength = estimateStrength(password);

  const handleCopy = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <section className="mb-16">
      {/* Password display */}
      <div className="mb-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] p-6 sm:p-8 rounded-2xl border border-gray-800/50">
        <div className="font-mono text-xl sm:text-2xl md:text-3xl text-white break-all min-h-[3rem] mb-3 tabular-nums">
          {password || "—"}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className={`text-sm font-medium ${strength.color}`}>{strength.label}</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-1.5 w-8 rounded-full ${
                  i <= strength.score
                    ? strength.score <= 2
                      ? "bg-red-400"
                      : strength.score === 3
                      ? "bg-yellow-400"
                      : "bg-green-400"
                    : "bg-gray-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Config */}
      <div className="mb-4 bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800">
        <label className="block mb-4">
          <span className="text-sm text-gray-400 mb-1 block">Length: {length} characters</span>
          <input
            type="range"
            min={6}
            max={64}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full accent-purple-500"
          />
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            { state: upper, set: setUpper, label: "Uppercase (A-Z)" },
            { state: lower, set: setLower, label: "Lowercase (a-z)" },
            { state: numbers, set: setNumbers, label: "Numbers (0-9)" },
            { state: symbols, set: setSymbols, label: "Symbols (!@#$...)" },
            { state: excludeSimilar, set: setExcludeSimilar, label: "Exclude i,l,1,L,o,0,O" },
          ].map((cfg) => (
            <label key={cfg.label} className="flex items-center gap-2 text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={cfg.state}
                onChange={(e) => cfg.set(e.target.checked)}
                className="accent-purple-500"
              />
              {cfg.label}
            </label>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 items-center">
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
          disabled={!password}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {copied ? "✓ Copied" : "Copy Password"}
        </button>
        <span className="text-xs text-gray-500 ml-auto">
          Uses crypto.getRandomValues() — cryptographically secure.
        </span>
      </div>
    </section>
  );
}
