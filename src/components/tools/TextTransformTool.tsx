"use client";

/**
 * TextTransformTool — UI shell for tools that transform input text into output text.
 *
 * Used by case converters (upper/lower/title/sentence/all-in-one) and text
 * cleaners (remove-line-breaks, remove-extra-spaces, reverser, dup-remover,
 * sorter). Auto-transforms as the user types — no button click required.
 *
 * Parent owns state. This component is presentation only.
 */

import { useState } from "react";

interface TextTransformToolProps {
  /** Current input text. Controlled by parent. */
  input: string;
  /** Result of running parent's transform function on input. Controlled by parent. */
  output: string;
  /** Called when the user edits the input textarea. */
  onInputChange: (text: string) => void;
  /** Placeholder text for the input. */
  inputPlaceholder?: string;
  /** Label shown above the output (default: "Result"). */
  outputLabel?: string;
  /** Optional UI rendered above the input — e.g. mode buttons for multi-mode tools. */
  modeSelector?: React.ReactNode;
  /** Optional helper text shown under the actions. */
  helperText?: string;
}

export default function TextTransformTool({
  input,
  output,
  onInputChange,
  inputPlaceholder = "Type or paste your text here...",
  outputLabel = "Result",
  modeSelector,
  helperText = "Everything happens in your browser. Your text is never sent to a server.",
}: TextTransformToolProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* Clipboard API blocked — silently fail */
    }
  };

  const handleClear = () => onInputChange("");

  const hasInput = input.length > 0;
  const hasOutput = output.length > 0;

  return (
    <section className="mb-16">
      {modeSelector && <div className="mb-4">{modeSelector}</div>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div>
          <label className="block text-sm text-gray-400 mb-2 font-medium">Input</label>
          <textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder={inputPlaceholder}
            aria-label="Input text"
            className="w-full min-h-[280px] p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 resize-y font-mono text-sm leading-relaxed transition-colors"
          />
        </div>

        {/* Output */}
        <div>
          <label className="block text-sm text-gray-400 mb-2 font-medium">{outputLabel}</label>
          <textarea
            value={output}
            readOnly
            placeholder="Your transformed text will appear here..."
            aria-label="Output text"
            className="w-full min-h-[280px] p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 resize-y font-mono text-sm leading-relaxed"
          />
        </div>
      </div>

      {/* Action row */}
      <div className="mt-3 flex flex-wrap gap-3 items-center">
        <button
          type="button"
          onClick={handleCopy}
          disabled={!hasOutput}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {copied ? "✓ Copied" : "Copy Result"}
        </button>

        <button
          type="button"
          onClick={handleClear}
          disabled={!hasInput}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-red-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Clear
        </button>

        {helperText && (
          <span className="text-xs text-gray-500 ml-auto w-full sm:w-auto mt-2 sm:mt-0">
            {helperText}
          </span>
        )}
      </div>
    </section>
  );
}
