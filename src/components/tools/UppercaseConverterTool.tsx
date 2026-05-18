"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";
import { toUpperCase } from "./textCaseHelpers";

export default function UppercaseConverterTool() {
  const [input, setInput] = useState("");
  const output = useMemo(() => toUpperCase(input), [input]);

  return (
    <TextTransformTool
      input={input}
      output={output}
      onInputChange={setInput}
      inputPlaceholder="Type or paste text to convert to UPPERCASE..."
      outputLabel="UPPERCASE RESULT"
    />
  );
}
