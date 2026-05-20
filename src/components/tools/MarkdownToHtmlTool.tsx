"use client";

import { useState, useMemo } from "react";
import TextTransformTool from "./TextTransformTool";
import { markdownToHtml } from "./markdownToHtml";

export default function MarkdownToHtmlTool() {
  const [input, setInput] = useState("");
  const output = useMemo(() => markdownToHtml(input), [input]);

  return (
    <TextTransformTool
      input={input}
      output={output}
      onInputChange={setInput}
      inputPlaceholder={"Paste Markdown here...\n\n# Heading\n**bold** and *italic*\n- list item\n[link](https://example.com)"}
      outputLabel="HTML Output"
      helperText="Converts Markdown to clean HTML in your browser. Nothing is uploaded."
    />
  );
}
