import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Free Sentence Counter Online — Count Sentences Instantly",
  description: "Free online sentence counter. Count sentences, words, characters, and paragraphs in real-time. No login, no signup. Works in any browser instantly.",
  keywords: "sentence counter, count sentences online, free sentence counter, online sentence counter, sentence count tool, count sentences in text",
  alternates: {
    canonical: "https://www.notepad-ai.online/tools/sentence-counter"
  },
  openGraph: {
    title: "Free Sentence Counter Online — Count Sentences Instantly",
    description: "Free online sentence counter. Instantly count sentences, words, characters, and paragraphs. No login required.",
    url: "https://www.notepad-ai.online/tools/sentence-counter"
  }
};

export default function SentenceCounter() {
  const whatItCounts = [
    { icon: "📝", label: "Sentences", description: "Detected by punctuation (.!?)" },
    { icon: "🔤", label: "Words", description: "Total word count" },
    { icon: "🔡", label: "Characters", description: "With and without spaces" },
    { icon: "📑", label: "Paragraphs", description: "Separated by line breaks" },
    { icon: "⏱️", label: "Reading Time", description: "Estimated read duration" },
    { icon: "🎤", label: "Speaking Time", description: "Estimated speech duration" }
  ];

  const sentenceLimits = [
    { format: "Tweet / X Post", sentences: "1–3", note: "Short, punchy — max 280 chars" },
    { format: "Email subject line", sentences: "1", note: "One clear sentence only" },
    { format: "Short paragraph", sentences: "3–5", note: "Standard paragraph length" },
    { format: "Blog post intro", sentences: "3–6", note: "Hook, context, thesis" },
    { format: "LinkedIn post", sentences: "5–10", note: "~200–300 word limit" },
    { format: "Short-form essay", sentences: "15–25", note: "~300–500 words" },
    { format: "College application essay", sentences: "30–50", note: "~650 words typical limit" },
    { format: "Long-form blog post", sentences: "80–150", note: "~1,500–2,500 words" },
  ];

  const faqs = [
    {
      question: "How does the sentence counter work?",
      answer: "The sentence counter scans your text for sentence-ending punctuation marks — periods (.), exclamation marks (!), and question marks (?). Each punctuation-terminated segment of text counts as one sentence. The tool processes your text in real-time as you type, with zero delay."
    },
    {
      question: "Is the sentence counter free?",
      answer: "Yes, completely free. There are no limits, no ads, no login required, and no signup needed. Count as many sentences as you like in any browser."
    },
    {
      question: "Does it count sentences accurately?",
      answer: "Yes. The counter uses reliable punctuation-based detection (.!?) to count sentences. It correctly handles abbreviations, ellipses, and edge cases. For standard prose — essays, blog posts, emails — it is highly accurate."
    },
    {
      question: "Can I count sentences without copying to another tool?",
      answer: "Exactly — that is the point. The sentence counter is built directly into Notepad AI, so you see your sentence count in real-time as you write. No need to paste text into a separate tool."
    },
    {
      question: "How many sentences is a paragraph?",
      answer: "A standard paragraph contains 3–5 sentences. Academic paragraphs are often 5–8 sentences. Short-form content paragraphs (blog posts, social media) often use 1–3 sentences for readability."
    },
    {
      question: "How many sentences is 500 words?",
      answer: "At an average of 15–20 words per sentence, 500 words contains approximately 25–33 sentences. The exact count depends on your writing style — short, punchy sentences will give more sentences, while complex academic sentences will give fewer."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Sentence Counter", url: "https://www.notepad-ai.online/tools/sentence-counter" }
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Sentence Counter"
        description="Free online sentence counter that counts sentences, words, characters, and paragraphs in real-time. No login required."
        features={[
          "Real-time sentence counting",
          "Word and character counting",
          "Paragraph counting",
          "Reading time estimation",
          "Speaking time estimation",
          "Works offline",
          "Completely free",
          "No login required"
        ]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Sentence Counter — Count Sentences Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Instantly count sentences, words, characters, and paragraphs in real-time. No login. No signup. Works offline.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI&apos;s sentence counter</strong> is a free, real-time tool built into your browser notepad.
            As you write, it instantly counts your sentences (detected by punctuation), along with words, characters, paragraphs, and estimated reading time.
            No copy-pasting into separate tools — just open Notepad AI and start writing.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Open Sentence Counter →
          </Link>
        </section>

        {/* What It Counts */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What This Tool Counts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatItCounts.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex items-center gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How Sentence Detection Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How Sentence Detection Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-3">Punctuation-based detection</h3>
              <p className="text-gray-400 leading-relaxed">
                The counter identifies sentences by detecting ending punctuation: <strong className="text-gray-300">periods (.)</strong>, <strong className="text-gray-300">exclamation marks (!)</strong>, and <strong className="text-gray-300">question marks (?)</strong>.
                Each punctuated segment is counted as one sentence. Sentences without punctuation at the end of the text are also detected as an incomplete sentence.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-3">What counts as one sentence?</h3>
              <p className="text-gray-400 leading-relaxed">
                Any sequence of words ending in a period, exclamation point, or question mark is one sentence.
                Ellipses (...) count as one sentence-ending mark. Lists and bullet points are counted individually
                if they end in appropriate punctuation.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-semibold mb-3">Real-time counting</h3>
              <p className="text-gray-400 leading-relaxed">
                All counting happens instantly in your browser — no server required, no delay, no data sent anywhere.
                The count updates with every keystroke so you always know where you stand.
              </p>
            </div>
          </div>
        </section>

        {/* Sentence Count Reference */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Sentence Count Reference Guide
          </h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Format / Use Case</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Typical Sentences</th>
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Notes</th>
                </tr>
              </thead>
              <tbody>
                {sentenceLimits.map((item, index) => (
                  <tr key={index} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800 font-medium">{item.format}</td>
                    <td className="p-4 text-center text-blue-400 border border-gray-800 font-mono">{item.sentences}</td>
                    <td className="p-4 text-gray-400 text-sm border border-gray-800">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Use Notepad AI vs Separate Tool */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Why Count Sentences in Notepad AI?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "⚡", title: "Count as you write", desc: "No more switching tabs or copying text. The sentence count is always visible as you type — exactly like a built-in word processor metric." },
              { icon: "🔒", title: "100% private", desc: "Your text never leaves your browser. Unlike online tools that send your text to servers for processing, Notepad AI counts everything locally." },
              { icon: "📴", title: "Works offline", desc: "Need to count sentences on a plane or without WiFi? Notepad AI works fully offline after the first load — counting included." },
              { icon: "🆓", title: "Completely free", desc: "No subscriptions, no limits, no ads. The sentence counter — and every other metric — is free forever with no account required." },
            ].map((item, i) => (
              <div key={i} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
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
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <Link href="/tools/word-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Free Word Counter →</h3>
              <p className="text-gray-400 text-sm">Count words and characters instantly</p>
            </Link>
            <Link href="/tools/character-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Free Character Counter →</h3>
              <p className="text-gray-400 text-sm">Count characters with and without spaces</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Sentence Counter FAQ
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Count Sentences?</h2>
          <p className="text-gray-400 mb-6">Open Notepad AI and see your sentence count in real-time as you write.</p>
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
