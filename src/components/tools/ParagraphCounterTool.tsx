"use client";

/**
 * ParagraphCounterTool — the working tool widget embedded on /tools/paragraph-counter.
 *
 * Wraps the generic TextToolShell with paragraph-counter-specific logic:
 * splits text on blank lines (web-standard paragraph detection — matches MLA,
 * APA, and Chicago style conventions). Also computes sentences, words, and
 * characters as secondary stats so users get a full view in one place.
 *
 * Pure client-side. No server calls. No analytics on input text.
 */

import { useState, useMemo } from "react";
import TextToolShell from "./TextToolShell";

function computeStats(text: string) {
  // Paragraphs: split on one or more blank lines, filter empties
  const paragraphs = text.split(/\n\s*\n+/).filter((p) => p.trim().length > 0).length;

  // Sentences: split on sentence-ending punctuation, filter empties
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;

  // Words: split on whitespace, filter empties
  const words = text.split(/\s+/).filter((w) => w.length > 0).length;

  // Characters: total length
  const characters = text.length;

  return { paragraphs, sentences, words, characters };
}

export default function ParagraphCounterTool() {
  const [text, setText] = useState("");

  const stats = useMemo(() => computeStats(text), [text]);

  return (
    <TextToolShell
      text={text}
      onTextChange={setText}
      primaryStat={{ label: "Paragraphs", value: stats.paragraphs }}
      secondaryStats={[
        { label: "Sentences", value: stats.sentences },
        { label: "Words", value: stats.words },
        { label: "Characters", value: stats.characters },
      ]}
      inputPlaceholder="Paste or type your text here — paragraphs are counted live as you type."
      helperText="Everything runs in your browser. Your text is never uploaded."
    />
  );
}
