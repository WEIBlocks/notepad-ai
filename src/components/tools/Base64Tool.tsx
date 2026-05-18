"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";

type Mode = "encode" | "decode";

function utf8ToBase64(s: string): string {
  // Properly handle Unicode characters via TextEncoder
  const bytes = new TextEncoder().encode(s);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

function base64ToUtf8(s: string): string {
  try {
    const binary = atob(s.trim());
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  } catch {
    return "⚠️  Invalid Base64 input.";
  }
}

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("encode");

  const output = useMemo(() => {
    if (!input) return "";
    return mode === "encode" ? utf8ToBase64(input) : base64ToUtf8(input);
  }, [input, mode]);

  const modeSelector = (
    <div className="flex flex-wrap gap-2">
      {(["encode", "decode"] as Mode[]).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setMode(m)}
          className={`px-4 py-2 text-sm rounded-lg font-medium transition-all border ${
            mode === m
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              : "bg-[#1A1A1A] text-gray-300 border-gray-800 hover:border-purple-500/50 hover:text-white"
          }`}
        >
          {m === "encode" ? "Text → Base64" : "Base64 → Text"}
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
      inputPlaceholder={mode === "encode" ? "Type or paste text to encode..." : "Paste Base64 string to decode..."}
      outputLabel={mode === "encode" ? "Base64 Encoded" : "Decoded Text"}
      helperText="Full Unicode support (UTF-8). Everything runs in your browser."
    />
  );
}
