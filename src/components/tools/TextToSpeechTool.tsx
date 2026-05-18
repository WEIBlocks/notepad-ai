"use client";

import { useState, useEffect, useRef } from "react";

export default function TextToSpeechTool() {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    const loadVoices = () => {
      const list = window.speechSynthesis.getVoices();
      setVoices(list);
      // Pick a default English voice if available
      if (list.length > 0 && !voiceURI) {
        const en = list.find((v) => v.lang.startsWith("en")) || list[0];
        setVoiceURI(en.voiceURI);
      }
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, [voiceURI]);

  const handleSpeak = () => {
    if (!text || !supported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.voiceURI === voiceURI);
    if (voice) u.voice = voice;
    u.rate = rate;
    u.pitch = pitch;
    u.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };
    u.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    u.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utteranceRef.current = u;
    window.speechSynthesis.speak(u);
  };

  const handlePause = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  if (!supported) {
    return (
      <section className="mb-16 bg-[#1A1A1A] p-8 rounded-2xl border border-orange-500/30 text-center">
        <p className="text-orange-300 mb-2 font-medium">Text-to-Speech not supported in your browser</p>
        <p className="text-gray-400 text-sm">
          Try Chrome, Edge, or Safari for built-in voice synthesis support.
        </p>
      </section>
    );
  }

  return (
    <section className="mb-16">
      {/* Voice + speed controls */}
      <div className="mb-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] p-6 rounded-2xl border border-gray-800/50">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="block sm:col-span-1">
            <span className="text-sm text-gray-400 mb-1 block">Voice</span>
            <select
              value={voiceURI}
              onChange={(e) => setVoiceURI(e.target.value)}
              className="w-full p-2 bg-[#0f0f0f] border border-gray-800 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500/40"
            >
              {voices.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm text-gray-400 mb-1 block">Rate: {rate.toFixed(1)}x</span>
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full accent-purple-500"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-400 mb-1 block">Pitch: {pitch.toFixed(1)}</span>
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.1}
              value={pitch}
              onChange={(e) => setPitch(parseFloat(e.target.value))}
              className="w-full accent-purple-500"
            />
          </label>
        </div>
      </div>

      {/* Text input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text to hear it read aloud..."
        aria-label="Text to speak"
        className="w-full min-h-[260px] p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 resize-y text-sm leading-relaxed transition-colors"
      />

      {/* Actions */}
      <div className="mt-3 flex flex-wrap gap-3 items-center">
        {!isSpeaking ? (
          <button
            type="button"
            onClick={handleSpeak}
            disabled={!text}
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-transparent rounded-lg text-sm font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            ▶ Speak
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={handlePause}
              className="px-5 py-2 bg-[#1A1A1A] border border-purple-500/50 rounded-lg text-white text-sm font-medium hover:border-purple-500 transition-colors"
            >
              {isPaused ? "▶ Resume" : "⏸ Pause"}
            </button>
            <button
              type="button"
              onClick={handleStop}
              className="px-5 py-2 bg-[#1A1A1A] border border-red-500/50 rounded-lg text-white text-sm font-medium hover:border-red-500 transition-colors"
            >
              ■ Stop
            </button>
          </>
        )}
        <span className="text-xs text-gray-500 ml-auto">
          Uses your browser&apos;s built-in voices — no audio is uploaded anywhere.
        </span>
      </div>
    </section>
  );
}
