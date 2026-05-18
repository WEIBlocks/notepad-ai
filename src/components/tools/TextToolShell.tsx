"use client";

/**
 * TextToolShell — generic UI shell for embedded text tool widgets.
 *
 * Purpose: the leverage point for the APEX programmatic burst (spec Section 6).
 * Each tool page (paragraph-counter, line-counter, lorem-ipsum, base64, etc.)
 * wraps this with a tiny client component that defines its own state + compute
 * logic. The shell handles the UI: input field, live stat readout, action
 * buttons, and the privacy-claim caption.
 *
 * Pattern:
 *   1. Tool page (server component) — handles metadata, schema, FAQ, copy.
 *   2. Small client wrapper (e.g. ParagraphCounterTool) — useState + compute fn.
 *   3. This shell — renders the UI from the props passed by the wrapper.
 *
 * Match the dark-theme Tailwind patterns from /tools/sentence-counter and
 * the rest of the site for visual consistency.
 */

import { useState } from "react";

interface SecondaryStat {
  label: string;
  value: string | number;
}

interface ToolAction {
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive" | "primary";
  disabled?: boolean;
}

interface TextToolShellProps {
  /** Current text in the textarea. Controlled by parent. */
  text: string;
  /** Called whenever the user edits the textarea. */
  onTextChange: (text: string) => void;
  /** Headline stat displayed in large gradient text. */
  primaryStat: { label: string; value: string | number };
  /** Optional smaller stats shown alongside the primary. Keep to ≤4 for layout. */
  secondaryStats?: SecondaryStat[];
  /** Placeholder text for the textarea. */
  inputPlaceholder?: string;
  /** Optional helper text shown below the action row (e.g. "Privacy: text never leaves your browser"). */
  helperText?: string;
  /** Tailwind gradient class for the primary stat number. Default: blue → purple. */
  primaryStatGradient?: string;
  /** Optional extra action buttons (e.g. "Reverse", "Encode") — appears after Copy/Clear. */
  extraActions?: ToolAction[];
  /** Optional readonly mode — used for output-only tools (e.g. lorem-ipsum generator). */
  readOnly?: boolean;
  /** Optional minimum height for textarea. Default 300px. */
  minHeight?: string;
}

export default function TextToolShell({
  text,
  onTextChange,
  primaryStat,
  secondaryStats = [],
  inputPlaceholder = "Paste or type your text here...",
  helperText = "Everything happens in your browser. Your text is never sent to a server.",
  primaryStatGradient = "from-blue-400 via-purple-500 to-pink-500",
  extraActions = [],
  readOnly = false,
  minHeight = "300px",
}: TextToolShellProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API blocked — fall back to selecting the text
      const ta = document.querySelector<HTMLTextAreaElement>('[data-tool-shell-input]');
      ta?.select();
    }
  };

  const handleClear = () => onTextChange("");

  const hasText = text.length > 0;

  return (
    <section className="mb-16">
      {/* Live stat readout — sits above the textarea so it's the focal point */}
      <div className="mb-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] p-6 sm:p-8 rounded-2xl border border-gray-800/50">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {/* Primary stat — large gradient text */}
          <div className="md:col-span-2">
            <div
              className={`text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r ${primaryStatGradient} bg-clip-text text-transparent tabular-nums`}
            >
              {primaryStat.value}
            </div>
            <div className="text-sm sm:text-base text-gray-400 mt-2 font-medium">
              {primaryStat.label}
            </div>
          </div>

          {/* Secondary stats — smaller, in a row */}
          {secondaryStats.map((s) => (
            <div key={s.label} className="border-l border-gray-800/50 pl-4">
              <div className="text-xl sm:text-2xl font-semibold text-white tabular-nums">
                {s.value}
              </div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Input textarea */}
      <textarea
        data-tool-shell-input
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={inputPlaceholder}
        readOnly={readOnly}
        aria-label="Text input for tool"
        className="w-full p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 resize-y font-mono text-sm leading-relaxed transition-colors"
        style={{ minHeight }}
      />

      {/* Action row */}
      <div className="mt-3 flex flex-wrap gap-3 items-center">
        <button
          type="button"
          onClick={handleCopy}
          disabled={!hasText}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {copied ? "✓ Copied" : "Copy Text"}
        </button>

        {!readOnly && (
          <button
            type="button"
            onClick={handleClear}
            disabled={!hasText}
            className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-red-500/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Clear
          </button>
        )}

        {extraActions.map((action) => {
          const variantClasses =
            action.variant === "primary"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              : action.variant === "destructive"
              ? "bg-[#1A1A1A] border-gray-800 text-gray-300 hover:border-red-500/50 hover:text-white"
              : "bg-[#1A1A1A] border-gray-800 text-gray-300 hover:border-purple-500/50 hover:text-white";

          return (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              disabled={action.disabled}
              className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed ${variantClasses}`}
            >
              {action.label}
            </button>
          );
        })}

        {helperText && (
          <span className="text-xs text-gray-500 ml-auto sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
            {helperText}
          </span>
        )}
      </div>
    </section>
  );
}
