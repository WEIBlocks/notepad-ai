"use client";

import { useState, useMemo } from "react";
import TextToolShell from "./TextToolShell";

export default function LineCounterTool() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    if (!text) return { lines: 0, nonEmptyLines: 0, words: 0, characters: 0 };
    const allLines = text.split("\n");
    const nonEmpty = allLines.filter((l) => l.trim().length > 0);
    const words = text.split(/\s+/).filter((w) => w.length > 0).length;
    return {
      lines: allLines.length,
      nonEmptyLines: nonEmpty.length,
      words,
      characters: text.length,
    };
  }, [text]);

  return (
    <TextToolShell
      text={text}
      onTextChange={setText}
      primaryStat={{ label: "Lines (Total)", value: stats.lines }}
      secondaryStats={[
        { label: "Non-empty Lines", value: stats.nonEmptyLines },
        { label: "Words", value: stats.words },
        { label: "Characters", value: stats.characters },
      ]}
      inputPlaceholder="Paste your text — line count updates as you type."
    />
  );
}
