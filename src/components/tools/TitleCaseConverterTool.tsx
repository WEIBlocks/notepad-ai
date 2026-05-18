"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";
import { toTitleCase } from "./textCaseHelpers";

export default function TitleCaseConverterTool() {
  const [input, setInput] = useState("");
  const output = useMemo(() => toTitleCase(input), [input]);

  return (
    <TextTransformTool
      input={input}
      output={output}
      onInputChange={setInput}
      inputPlaceholder="Type or paste text to convert to Title Case..."
      outputLabel="Title Case Result"
    />
  );
}
