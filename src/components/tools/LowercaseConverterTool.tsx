"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";
import { toLowerCase } from "./textCaseHelpers";

export default function LowercaseConverterTool() {
  const [input, setInput] = useState("");
  const output = useMemo(() => toLowerCase(input), [input]);

  return (
    <TextTransformTool
      input={input}
      output={output}
      onInputChange={setInput}
      inputPlaceholder="Type or paste text to convert to lowercase..."
      outputLabel="lowercase result"
    />
  );
}
