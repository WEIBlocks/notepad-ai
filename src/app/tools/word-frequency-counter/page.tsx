import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import WordFrequencyTool from "@/components/tools/WordFrequencyTool";

export const metadata: Metadata = {
  title: "Word Frequency Counter Online — Free | Notepad AI",
  description: "Free online word frequency counter. See which words appear most often in your text. Stop-word filter, top 20 results, CSV export. No signup, browser-only.",
  keywords: "word frequency counter, most frequent words, word frequency analysis, keyword density, word count tool, repeated words",
  alternates: { canonical: "https://www.notepad-ai.online/tools/word-frequency-counter" },
  openGraph: {
    title: "Word Frequency Counter Online — Free | Notepad AI",
    description: "See your text's top words with one paste. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/word-frequency-counter",
  },
};

const faqs = [
  { question: "How does the word frequency counter work?", answer: "It tokenizes your text into words, normalizes them to lowercase, and counts occurrences. By default it filters common English stop words (the, a, is, etc.) so meaningful terms surface to the top. Toggle the filter off if you want raw counts including stop words." },
  { question: "What are stop words?", answer: "Stop words are extremely common words (the, a, an, is, are, of, in, etc.) that appear in almost every sentence but carry little semantic weight. Filtering them out shows you the words that actually characterize your text." },
  { question: "Is the word frequency counter free?", answer: "Yes — completely free, no signup, no login, no limits on text length." },
  { question: "Is my text private?", answer: "Yes. All analysis happens in your browser. Nothing is uploaded, logged, or tracked." },
  { question: "Can I export the results?", answer: "Yes. Click 'Copy as CSV' to get a comma-separated word-count list you can paste into Excel, Google Sheets, or any spreadsheet tool." },
  { question: "What's keyword density and how does this help SEO?", answer: "Keyword density is the percentage of times a target keyword appears relative to total word count. Most SEO guides suggest 1-2% for primary keywords. This tool shows raw counts — divide by total word count to compute density." },
  { question: "Why are some inflected words counted separately?", answer: "The counter doesn't stem words (so 'run', 'runs', and 'running' count separately). This is intentional — stemming requires language-specific rules and can confuse counts in technical or multilingual text." },
  { question: "How accurate is it for non-English text?", answer: "It works for any language that uses whitespace and Latin-character word separation. The stop-word filter is English-only — toggle it off for non-English text." },
];

export default function WordFrequencyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Word Frequency Counter", url: "https://www.notepad-ai.online/tools/word-frequency-counter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Word Frequency Counter"
        description="Free online word frequency counter. Shows the most frequent words in any text with optional stop-word filtering and CSV export."
        features={["Top 20 most frequent words", "Optional stop-word filter (English)", "Total + unique word counts", "CSV export", "Works offline", "No login required"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Word Frequency Counter Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Paste your text below to instantly see your top 20 most frequent words. Stop-word filter on by default. Export to CSV with one click.
          </p>
        </section>

        <WordFrequencyTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">word frequency counter</strong> shows which words appear most often in a piece of text. Notepad AI&apos;s counter ranks the top 20 words, filters common stop words (the, a, is) by default, and lets you export results as CSV. Everything runs in your browser — no uploads.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Common Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🔍", title: "SEO keyword analysis", desc: "Spot over-used or missing keywords in your blog post or page copy." },
              { icon: "📊", title: "Text characterization", desc: "Identify the central themes of any document by its top terms." },
              { icon: "✍️", title: "Writing style review", desc: "Detect overused crutch words you may want to vary." },
              { icon: "📚", title: "Academic / research", desc: "Quick frequency analysis for corpus studies or content audits." },
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
              <p className="text-gray-400 text-sm">Total word and character count</p>
            </Link>
            <Link href="/tools/text-sorter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Sorter →</h3>
              <p className="text-gray-400 text-sm">Sort lines alphabetically</p>
            </Link>
            <Link href="/tools/duplicate-line-remover" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Duplicate Line Remover →</h3>
              <p className="text-gray-400 text-sm">Strip repeated lines</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Word Frequency FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Edit + Analyze in One Place</h2>
          <p className="text-gray-400 mb-6">Notepad AI is a full editor with built-in metrics — write and refine without switching tools.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
