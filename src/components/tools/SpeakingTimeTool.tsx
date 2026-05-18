"use client";

import { useState, useMemo } from "react";
import TextToolShell from "./TextToolShell";

function formatDuration(totalSeconds: number): string {
  if (totalSeconds < 1) return "0 sec";
  if (totalSeconds < 60) return `${Math.round(totalSeconds)} sec`;
  const m = Math.floor(totalSeconds / 60);
  const s = Math.round(totalSeconds % 60);
  if (s === 0) return `${m} min`;
  return `${m} min ${s} sec`;
}

export default function SpeakingTimeTool() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.split(/\s+/).filter((w) => w.length > 0).length;
    // 130 wpm average conversational speaking pace
    const seconds = (words / 130) * 60;
    return {
      speakingTime: formatDuration(seconds),
      words,
      sentences: text.split(/[.!?]+/).filter((s) => s.trim()).length,
      characters: text.length,
    };
  }, [text]);

  return (
    <TextToolShell
      text={text}
      onTextChange={setText}
      primaryStat={{ label: "Speaking Time @ 130 wpm", value: stats.speakingTime }}
      secondaryStats={[
        { label: "Words", value: stats.words },
        { label: "Sentences", value: stats.sentences },
        { label: "Characters", value: stats.characters },
      ]}
      inputPlaceholder="Paste your speech or script to estimate speaking time."
    />
  );
}
