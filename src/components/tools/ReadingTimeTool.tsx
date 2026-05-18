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

export default function ReadingTimeTool() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.split(/\s+/).filter((w) => w.length > 0).length;
    // 200 wpm average adult silent reading speed
    const seconds = (words / 200) * 60;
    return {
      readingTime: formatDuration(seconds),
      words,
      sentences: text.split(/[.!?]+/).filter((s) => s.trim()).length,
      characters: text.length,
    };
  }, [text]);

  return (
    <TextToolShell
      text={text}
      onTextChange={setText}
      primaryStat={{ label: "Reading Time @ 200 wpm", value: stats.readingTime }}
      secondaryStats={[
        { label: "Words", value: stats.words },
        { label: "Sentences", value: stats.sentences },
        { label: "Characters", value: stats.characters },
      ]}
      inputPlaceholder="Paste your text to estimate reading time (200 wpm)."
    />
  );
}
