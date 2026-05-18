import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import LineCounterTool from "@/components/tools/LineCounterTool";

export const metadata: Metadata = {
  title: "Line Counter Online — Free, No Login | Notepad AI",
  description: "Free online line counter. Count total lines and non-empty lines instantly. Works in any browser. No signup, no login, 100% private — text never leaves your device.",
  keywords: "line counter online, count lines in text, free line counter, lines counter, how many lines, online line count tool",
  alternates: { canonical: "https://www.notepad-ai.online/tools/line-counter" },
  openGraph: {
    title: "Line Counter Online — Free, No Login | Notepad AI",
    description: "Count lines in text instantly. Free, browser-only, no signup.",
    url: "https://www.notepad-ai.online/tools/line-counter",
  },
};

const faqs = [
  { question: "How does the line counter work?", answer: "The tool splits your text on newline characters (the Enter key). Every newline creates a new line — even empty ones. You'll see both total lines and non-empty lines so you can distinguish between visual spacing and actual content lines." },
  { question: "Is the line counter free?", answer: "Yes, completely free. No signup, no login, no limits on text length. Count lines in lists, CSV data, code, log files — anything." },
  { question: "Does it work offline?", answer: "Yes. After the page loads once, all counting happens in your browser. Use it on a plane or wherever you don't have internet." },
  { question: "Is my text private?", answer: "Yes. Nothing is uploaded. The counter runs entirely on your device — no servers, no logging, no analytics on your input." },
  { question: "What's the difference between total lines and non-empty lines?", answer: "Total lines includes every newline-terminated row, including blank ones. Non-empty lines only counts rows that contain at least one non-whitespace character. Use non-empty for actual content, total for layout/spacing checks." },
  { question: "Can I use this to count lines in CSV or code?", answer: "Yes — it's especially useful for CSV row counts and source code line counts. Just paste in and see the total." },
  { question: "Does the counter handle very large files?", answer: "Yes. It can handle hundreds of thousands of lines instantly. Performance scales linearly with text length." },
  { question: "Why is the count off by one from my IDE?", answer: "Some editors count the last newline as starting a new (empty) line — this tool reports the actual line count including any trailing empty line, matching what tools like `wc -l` produce when there's a trailing newline." },
];

export default function LineCounterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Line Counter", url: "https://www.notepad-ai.online/tools/line-counter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Line Counter"
        description="Free online line counter — counts total and non-empty lines in real-time. No login, works offline."
        features={["Real-time line counting", "Total vs non-empty lines", "Works offline", "No login required", "Privacy-first — no data sent to servers", "Handles large files"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Line Counter Online — No Login Required
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Paste text below and instantly see total lines plus non-empty lines. Works for plain text, code, CSV, logs — anything line-based.
          </p>
        </section>

        <LineCounterTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">line counter</strong> counts the number of lines (newline-separated rows) in a block of text. Notepad AI&apos;s free line counter shows both <strong className="text-white">total lines</strong> (every newline) and <strong className="text-white">non-empty lines</strong> (rows with actual content), updating live as you type. Everything runs in your browser — no uploads, no login.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">How to Use the Line Counter</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { step: 1, title: "Paste your text", body: "Drop in your text, CSV rows, code, or log content into the input above." },
              { step: 2, title: "Read the live count", body: "Total lines and non-empty lines update with every keystroke — no button needed." },
              { step: 3, title: "Copy or clear", body: "Hit Copy to grab your text, Clear to start over. Nothing is saved anywhere." },
            ].map((s) => (
              <div key={s.step} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">{s.step}</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Common Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "📊", title: "CSV row counts", desc: "Paste in CSV data to quickly verify how many rows you have." },
              { icon: "💻", title: "Code line counts", desc: "Count lines of code in a snippet without opening an IDE." },
              { icon: "📋", title: "List sizing", desc: "Check how many items are in a list (to-dos, names, URLs)." },
              { icon: "📜", title: "Log analysis", desc: "Quickly see how many log entries you're working with." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/word-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Word Counter →</h3>
              <p className="text-gray-400 text-sm">Count words and characters</p>
            </Link>
            <Link href="/tools/duplicate-line-remover" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Duplicate Line Remover →</h3>
              <p className="text-gray-400 text-sm">Strip repeated lines</p>
            </Link>
            <Link href="/tools/text-sorter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Sorter →</h3>
              <p className="text-gray-400 text-sm">Sort lines alphabetically</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Line Counter FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Need More Than Line Counting?</h2>
          <p className="text-gray-400 mb-6">Open Notepad AI for full editing with line, word, sentence, paragraph, and character counts always visible.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
