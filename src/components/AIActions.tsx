"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-hot-toast";
import { SparklesIcon, XMarkIcon } from "@heroicons/react/24/outline";

type Selection = { text: string; index: number; length: number };

interface AIActionsProps {
  /** Returns the current selection, or the whole note if nothing is selected. Null if the editor isn't ready. */
  getSelectionOrAll: () => Selection | null;
  /** Replaces [index, index+length) in the Quill document with newText. */
  applyResult: (index: number, length: number, newText: string) => void;
}

type PendingAction = "grammar" | "rewrite";
type Tone = "formal" | "casual" | "concise";

// Client-side cooldown between requests, so a mis-click or impatient double-tap
// can't fire a second request while the first is barely underway. The real cap
// (a fixed number of AI actions per IP per day) is enforced server-side in the
// API routes — this is just a UX guard, not the actual limit.
const COOLDOWN_MS = 4000;

export default function AIActions({ getSelectionOrAll, applyResult }: AIActionsProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState<PendingAction | null>(null);
  const [tone, setTone] = useState<Tone>("concise");
  const [cooldownMsLeft, setCooldownMsLeft] = useState(0);
  const [dailyStatus, setDailyStatus] = useState<{ remaining: number; limit: number } | null>(null);
  const cooldownEndRef = useRef(0);
  const [preview, setPreview] = useState<{
    action: PendingAction;
    original: string;
    result: string;
    index: number;
    length: number;
  } | null>(null);

  // Tick the cooldown display down once a second while it's active.
  useEffect(() => {
    if (cooldownMsLeft <= 0) return;
    const id = setInterval(() => {
      const left = cooldownEndRef.current - Date.now();
      setCooldownMsLeft(left > 0 ? left : 0);
    }, 250);
    return () => clearInterval(id);
  }, [cooldownMsLeft > 0]);

  function startCooldown() {
    cooldownEndRef.current = Date.now() + COOLDOWN_MS;
    setCooldownMsLeft(COOLDOWN_MS);
  }

  const onCooldown = cooldownMsLeft > 0;
  const disabled = loading !== null || onCooldown;

  async function runAction(action: PendingAction) {
    if (disabled) return;
    const selection = getSelectionOrAll();
    setMenuOpen(false);

    if (!selection || !selection.text.trim()) {
      toast.error("Write something first.");
      return;
    }
    if (selection.text.length > 6000) {
      toast.error("Select a shorter passage for AI actions (max ~6000 characters).");
      return;
    }

    setLoading(action);
    try {
      const endpoint = action === "grammar" ? "/api/ai/grammar-check" : "/api/ai/rewrite";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          action === "grammar" ? { text: selection.text } : { text: selection.text, tone }
        ),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "AI request failed");
      }
      if (typeof data.remaining === "number" && typeof data.limit === "number") {
        setDailyStatus({ remaining: data.remaining, limit: data.limit });
      }
      if (data.result.trim() === selection.text.trim()) {
        toast.success(action === "grammar" ? "No issues found — looks good!" : "Nothing to change.");
        return;
      }
      setPreview({
        action,
        original: selection.text,
        result: data.result,
        index: selection.index,
        length: selection.length,
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(null);
      startCooldown();
    }
  }

  function apply() {
    if (!preview) return;
    applyResult(preview.index, preview.length, preview.result);
    toast.success("Applied");
    setPreview(null);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen((v) => !v)}
        disabled={disabled}
        className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white text-xs sm:text-sm font-medium shadow-sm shadow-purple-500/30 transition-colors disabled:opacity-50"
        title="AI Actions"
      >
        <SparklesIcon className="h-4 w-4 flex-shrink-0" />
        <span>
          {loading
            ? loading === "grammar"
              ? "Checking…"
              : "Rewriting…"
            : onCooldown
            ? `${Math.ceil(cooldownMsLeft / 1000)}s`
            : "AI"}
        </span>
      </button>

      {menuOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 w-64 bg-[#1a1f2e] border border-[#2a3142] rounded-lg shadow-2xl p-3">
            <p className="text-xs text-gray-400 mb-3">
              Uses AI on the selected text (or the whole note if nothing's selected). Nothing is sent unless you tap a button below.
            </p>
            {dailyStatus && (
              <p className="text-xs text-gray-500 mb-3">
                {dailyStatus.remaining} of {dailyStatus.limit} AI actions left today
              </p>
            )}
            <button
              onClick={() => runAction("grammar")}
              disabled={disabled}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-[#151823] hover:text-blue-400 transition-colors mb-1 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-200"
            >
              Check grammar &amp; spelling
            </button>
            <div className="border-t border-[#2a3142] my-2" />
            <p className="text-xs text-gray-500 mb-1 px-1">Rewrite tone</p>
            <div className="flex gap-1 mb-2 px-1">
              {(["formal", "casual", "concise"] as Tone[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`flex-1 text-xs px-2 py-1 rounded-md capitalize transition-colors ${
                    tone === t
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                      : "text-gray-400 border border-[#2a3142] hover:text-gray-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => runAction("rewrite")}
              disabled={disabled}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-[#151823] hover:text-blue-400 transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-200"
            >
              Rewrite ({tone})
            </button>
          </div>
        </>
      )}

      {preview &&
        ReactDOM.createPortal(
          <>
            <div className="fixed top-0 bottom-0 w-full h-screen inset-0 bg-[#1a1f2e]/80 backdrop-blur-md z-[100]" />
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
              <div className="bg-[#1a1f2e] rounded-lg w-full max-w-2xl p-6 border border-[#2a3142] shadow-2xl max-h-[85vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-100">
                    {preview.action === "grammar" ? "Grammar check result" : `Rewrite (${tone})`}
                  </h3>
                  <button onClick={() => setPreview(null)} className="text-gray-400 hover:text-gray-200">
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-xs text-gray-500 mb-1">Original</p>
                <div className="w-full mb-4 bg-[#151823] text-gray-400 rounded-md p-3 border border-[#2a3142] text-sm whitespace-pre-wrap max-h-40 overflow-y-auto">
                  {preview.original}
                </div>

                <p className="text-xs text-gray-500 mb-1">Suggested</p>
                <div className="w-full mb-6 bg-[#151823] text-white rounded-md p-3 border border-[#2a3142] text-sm whitespace-pre-wrap max-h-40 overflow-y-auto">
                  {preview.result}
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setPreview(null)}
                    className="px-4 py-2 rounded-md text-sm text-gray-300 hover:bg-[#151823] transition-colors"
                  >
                    Discard
                  </button>
                  <button
                    onClick={apply}
                    className="px-4 py-2 rounded-md text-sm bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    Apply to note
                  </button>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  );
}
