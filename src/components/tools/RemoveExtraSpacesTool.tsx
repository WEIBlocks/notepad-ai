"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";

export default function RemoveExtraSpacesTool() {
  const [input, setInput] = useState("");

  const output = useMemo(() => {
    if (!input) return "";
    // Collapse multiple whitespace within each line to single space.
    // Preserve newlines so layout is kept.
    return input
      .split("\n")
      .map((line) => line.replace(/[\t ]+/g, " ").trim())
      .join("\n");
  }, [input]);

  return (
    <TextTransformTool
      input={input}
      output={output}
      onInputChange={setInput}
      inputPlaceholder="Paste text with double/triple spaces to clean up..."
      outputLabel="Cleaned Result"
      helperText="Removes runs of spaces/tabs inside each line. Newlines preserved. Trims leading/trailing whitespace per line."
    />
  );
}
