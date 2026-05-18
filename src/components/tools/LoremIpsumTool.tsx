"use client";

import { useState, useMemo } from "react";

const LOREM_WORDS = `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae illo inventore veritatis quasi architecto beatae vitae dicta explicabo nemo ipsam quia voluptas aspernatur aut odit fugit consequuntur magni dolores eos ratione sequi nesciunt neque porro quisquam dolorem ipsum quia dolor adipisci numquam eius modi tempora incidunt magnam quaerat etiam minima molestiae nostrum exercitationem corporis suscipit laboriosam aliquid commodi consequatur autem vel reprehenderit qui hendrerit ea voluptas`.split(/\s+/);

function randomWord() {
  return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
}

function generateSentence(minWords: number, maxWords: number): string {
  const len = minWords + Math.floor(Math.random() * (maxWords - minWords + 1));
  const words = Array.from({ length: len }, () => randomWord());
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}

function generateParagraph(sentenceCount: number): string {
  return Array.from({ length: sentenceCount }, () => generateSentence(6, 14)).join(" ");
}

export default function LoremIpsumTool() {
  const [paragraphs, setParagraphs] = useState(3);
  const [sentencesPerPara, setSentencesPerPara] = useState(5);
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [seed, setSeed] = useState(0); // bump to regenerate
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    void seed; // ensure regenerate on seed change
    const paras = Array.from({ length: paragraphs }, () => generateParagraph(sentencesPerPara));
    if (startWithLorem && paras.length > 0) {
      paras[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + paras[0];
    }
    return paras.join("\n\n");
  }, [paragraphs, sentencesPerPara, startWithLorem, seed]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <section className="mb-16">
      {/* Config row */}
      <div className="mb-4 bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] p-6 rounded-2xl border border-gray-800/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <label className="block">
            <span className="text-sm text-gray-400 mb-1 block">Paragraphs ({paragraphs})</span>
            <input
              type="range"
              min={1}
              max={20}
              value={paragraphs}
              onChange={(e) => setParagraphs(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-400 mb-1 block">Sentences per paragraph ({sentencesPerPara})</span>
            <input
              type="range"
              min={1}
              max={15}
              value={sentencesPerPara}
              onChange={(e) => setSentencesPerPara(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={startWithLorem}
              onChange={(e) => setStartWithLorem(e.target.checked)}
              className="accent-purple-500"
            />
            Start with &quot;Lorem ipsum dolor sit amet...&quot;
          </label>
        </div>
      </div>

      {/* Output */}
      <textarea
        value={output}
        readOnly
        aria-label="Generated lorem ipsum"
        className="w-full min-h-[320px] p-4 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 resize-y font-serif text-base leading-relaxed"
      />

      {/* Actions */}
      <div className="mt-3 flex flex-wrap gap-3 items-center">
        <button
          type="button"
          onClick={() => setSeed((s) => s + 1)}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-transparent rounded-lg text-sm font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
        >
          ↻ Generate New
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-white transition-colors"
        >
          {copied ? "✓ Copied" : "Copy Text"}
        </button>
        <span className="text-xs text-gray-500 ml-auto">
          {paragraphs} paragraph{paragraphs === 1 ? "" : "s"} ·{" "}
          {output.split(/\s+/).filter(Boolean).length} words
        </span>
      </div>
    </section>
  );
}
