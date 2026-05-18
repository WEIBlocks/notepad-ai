"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";
import { toSentenceCase } from "./textCaseHelpers";

export default function SentenceCaseConverterTool() {
  const [input, setInput] = useState("");
  const output = useMemo(() => toSentenceCase(input), [input]);

  return (
    <TextTransformTool
      input={input}
      output={output}
      onInputChange={setInput}
      inputPlaceholder="Type or paste text to convert to Sentence case..."
      outputLabel="Sentence case result"
    />
  );
}
