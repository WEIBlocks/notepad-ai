import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import ParagraphCounterTool from "@/components/tools/ParagraphCounterTool";

export const metadata: Metadata = {
  title: "Paragraph Counter Online — Free, No Login | Notepad AI",
  description:
    "Free online paragraph counter. Paste text, see paragraph count instantly. Also shows words, sentences, characters. No login, works offline, 100% private.",
  keywords:
    "paragraph counter, paragraph counter online, free paragraph counter, count paragraphs, online paragraph counter, paragraph count tool, how many paragraphs",
  alternates: {
    canonical: "https://www.notepad-ai.online/tools/paragraph-counter",
  },
  openGraph: {
    title: "Paragraph Counter Online — Free, No Login | Notepad AI",
    description:
      "Free online paragraph counter. Paste text, count paragraphs instantly. Plus words, sentences, characters. No login required.",
    url: "https://www.notepad-ai.online/tools/paragraph-counter",
  },
};

export default function ParagraphCounterPage() {
  const paragraphLengthReference = [
    { docType: "News article", length: "1–2 sentences", note: "Very short for skimmability" },
    { docType: "Business email", length: "1–3 sentences", note: "Concise, scannable" },
    { docType: "Blog post", length: "2–4 sentences", note: "Web readability sweet spot" },
    { docType: "Academic essay", length: "5–8 sentences", note: "MLA/APA/Chicago standard" },
    { docType: "Research paper", length: "6–10 sentences", note: "Complex arguments need depth" },
    { docType: "Novel", length: "1–20+ sentences", note: "Varies by scene, dialog, pacing" },
  ];

  const whatItDoes = [
    { icon: "📑", label: "Paragraphs", description: "Detected by blank-line separation" },
    { icon: "📝", label: "Sentences", description: "Punctuation-based count (.!?)" },
    { icon: "🔤", label: "Words", description: "Whitespace-separated tokens" },
    { icon: "🔡", label: "Characters", description: "Total length including spaces" },
    { icon: "⚡", label: "Real-time", description: "Updates with every keystroke" },
    { icon: "🔒", label: "Private", description: "Nothing leaves your browser" },
  ];

  const faqs = [
    {
      question: "How does the paragraph counter detect paragraphs?",
      answer:
        "It splits your text on blank lines. Any block of text separated from another by one or more empty lines counts as a paragraph. This matches the standard convention used in MLA, APA, and Chicago style guides for paragraph detection.",
    },
    {
      question: "Is the paragraph counter free?",
      answer:
        "Yes — completely free, with no signup, no login, no ads on the tool itself, and no limits on text length. Count paragraphs in essays, articles, novels, or anything else without restrictions.",
    },
    {
      question: "Does this paragraph counter work offline?",
      answer:
        "Yes. After the page loads the first time, all counting happens in your browser. You can use it without an internet connection — on a plane, on a train, anywhere.",
    },
    {
      question: "Is my text private when using this tool?",
      answer:
        "Yes. Your text never leaves your browser. There is no server upload, no logging of what you paste, and no analytics on your input. The counter runs entirely on your device.",
    },
    {
      question: "How long should a paragraph be?",
      answer:
        "It depends on the context. Academic paragraphs typically run 5–8 sentences. Blog posts and web copy work best at 2–4 sentences for readability. Business emails are often 1–3 sentences. News articles use very short paragraphs (1–2 sentences) for skimmability.",
    },
    {
      question: "Can the counter handle very long documents?",
      answer:
        "Yes. The counter is efficient even on documents of 50,000+ words. Performance scales linearly with text length, so even book-length documents count instantly.",
    },
    {
      question: "Does the counter ignore single line breaks?",
      answer:
        "Yes. Single line breaks (one Enter press) are treated as line breaks within the same paragraph. Two or more line breaks (a blank line between text blocks) create a new paragraph.",
    },
    {
      question: "Why does my paragraph count differ from Microsoft Word's?",
      answer:
        "Word uses different paragraph detection logic — it counts every Enter press as a new paragraph, even within the same logical block of text. This counter uses the web-standard blank-line method, which more accurately reflects how paragraphs appear to readers in published content.",
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.notepad-ai.online/" },
          { name: "Tools", url: "https://www.notepad-ai.online/tools" },
          { name: "Paragraph Counter", url: "https://www.notepad-ai.online/tools/paragraph-counter" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Paragraph Counter"
        description="Free online paragraph counter that counts paragraphs, sentences, words, and characters in real-time. No login required. Works offline."
        features={[
          "Real-time paragraph counting",
          "Sentence, word, and character counting",
          "Web-standard blank-line detection",
          "Works offline after first load",
          "No data sent to servers",
          "Completely free, no login",
          "Handles documents of 50,000+ words",
        ]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Paragraph Counter Online — No Login Required
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Paste text below and see your paragraph count instantly. Plus words, sentences, and characters — all real-time, all in your browser, never uploaded.
          </p>
        </section>

        {/* The Tool (embedded above the fold) */}
        <ParagraphCounterTool />

        {/* Quick Answer / Entity Definition — GEO Law 1 */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">paragraph counter</strong> counts the number of paragraphs in a piece of text by detecting paragraph breaks
            (typically blank lines between blocks of text). Notepad AI&apos;s free paragraph counter shows your paragraph count live as you type, along
            with word, sentence, and character counts. Everything runs in your browser — no uploads, no login, no signup. Works offline after first load.
          </p>
        </section>

        {/* How to Use */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How to Use the Paragraph Counter
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { step: 1, title: "Paste or type your text", body: "Drop your essay, article, email, or any block of text into the box above." },
              { step: 2, title: "Watch the count update live", body: "The paragraph count updates instantly with every keystroke — no button needed." },
              { step: 3, title: "Copy or clear when done", body: "Hit Copy to grab your text, or Clear to start fresh. Nothing is saved." },
            ].map((s) => (
              <div key={s.step} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Counts as a Paragraph */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">What Counts as a Paragraph?</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-3">Blank-line separation</h3>
              <p className="text-gray-400 leading-relaxed">
                A paragraph is a block of text separated by one or more blank lines from other blocks. Single line breaks (within a paragraph) do not
                create a new paragraph. This matches MLA, APA, and Chicago style conventions for paragraph detection.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-3">Real-time, no copy-paste shuffle</h3>
              <p className="text-gray-400 leading-relaxed">
                Most paragraph counters online require you to paste your text into their tool, click a button, then copy it back to your document.
                This counter updates as you write — same as a built-in word processor metric.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-3">100% in-browser</h3>
              <p className="text-gray-400 leading-relaxed">
                All counting happens on your device. No text is sent to a server. No logs are kept. No analytics track what you paste. This is the
                same privacy guarantee Notepad AI applies to your notes themselves.
              </p>
            </div>
          </div>
        </section>

        {/* What This Tool Tracks */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">What This Tool Tracks</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatItDoes.map((item) => (
              <div key={item.label} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex items-center gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Paragraph Length Reference */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Paragraph Length Reference</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Document Type</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Typical Paragraph Length</th>
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Note</th>
                </tr>
              </thead>
              <tbody>
                {paragraphLengthReference.map((row) => (
                  <tr key={row.docType} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800 font-medium">{row.docType}</td>
                    <td className="p-4 text-center text-blue-400 border border-gray-800 font-mono">{row.length}</td>
                    <td className="p-4 text-gray-400 text-sm border border-gray-800">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Common Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🎓", title: "Essay assignment compliance", desc: "Make sure your essay hits the paragraph-count guidance from your instructor or assignment brief." },
              { icon: "✍️", title: "Blog post structure check", desc: "Web copy reads better with short paragraphs. Quick check before publishing." },
              { icon: "💼", title: "Copywriting QA", desc: "Short paragraphs convert better. Verify your email or landing page paragraph rhythm." },
              { icon: "📐", title: "Word-count → paragraph estimate", desc: "Translate a word-count requirement into an estimate of how many paragraphs you'll need." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/word-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Word Counter →</h3>
              <p className="text-gray-400 text-sm">Count words and characters instantly</p>
            </Link>
            <Link href="/tools/sentence-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Sentence Counter →</h3>
              <p className="text-gray-400 text-sm">Real-time sentence detection</p>
            </Link>
            <Link href="/tools/character-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Character Counter →</h3>
              <p className="text-gray-400 text-sm">With and without spaces</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Paragraph Counter FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Need More Than a Counter?</h2>
          <p className="text-gray-400 mb-6">Open Notepad AI — write, save, and export your notes with paragraph, sentence, word, and character counts always visible.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              Open Notepad AI — Free →
            </Link>
            <Link
              href="/features"
              className="inline-block border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-medium hover:border-purple-500/50 transition-all duration-300"
            >
              See All Features
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
