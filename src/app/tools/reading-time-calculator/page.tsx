import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import ReadingTimeTool from "@/components/tools/ReadingTimeTool";

export const metadata: Metadata = {
  title: "Reading Time Calculator — Free, No Login | Notepad AI",
  description: "Free online reading time calculator. Estimate how long text takes to read at 200 wpm — the adult average. Works on any text length. No signup, no login, 100% private.",
  keywords: "reading time calculator, estimate reading time, words per minute, reading speed calculator, how long to read, time to read text",
  alternates: { canonical: "https://www.notepad-ai.online/tools/reading-time-calculator" },
  openGraph: {
    title: "Reading Time Calculator — Free, No Login | Notepad AI",
    description: "Estimate reading time of any text instantly. 200 wpm baseline.",
    url: "https://www.notepad-ai.online/tools/reading-time-calculator",
  },
};

const faqs = [
  { question: "What reading speed does the calculator use?", answer: "200 words per minute (wpm) — the well-established average for adult silent reading on screen. Range varies: leisure reading is ~180 wpm, technical/dense text is ~120 wpm, skim reading is 400+ wpm. Use the result as a baseline estimate." },
  { question: "Is the calculator free?", answer: "Yes, completely free with no signup or login. Estimate reading time for any text length." },
  { question: "Why 200 wpm?", answer: "200 wpm is the most-cited research benchmark for adult silent reading of standard prose. Brysbaert (2019) meta-analysis settled the academic debate around this number. Other tools use 200-250 wpm; we use the conservative end." },
  { question: "Does it work offline?", answer: "Yes. After the first page load, the calculator runs entirely in your browser. Use it without an internet connection." },
  { question: "What if my readers read slower or faster?", answer: "Mental conversion is easy. For technical audiences, multiply our estimate by 1.5–2×. For skim-readers, multiply by 0.4–0.5×. We may add adjustable wpm in a future update." },
  { question: "Is the text private?", answer: "Yes. Your text never leaves your browser — no servers, no logs, no analytics on input." },
  { question: "How long is the average blog post?", answer: "Most blog posts are 800–2,500 words = 4–13 minutes of reading at 200 wpm. SEO-targeted long-form posts often run 2,500–4,000 words = 13–20 minutes." },
  { question: "How is reading time used in SEO?", answer: "Some publishers display reading time on articles (Medium, Forbes) to set reader expectations. Studies suggest displayed reading time can reduce bounce rates by 10–15%. Useful metadata to add to your blog posts." },
];

export default function ReadingTimePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Reading Time Calculator", url: "https://www.notepad-ai.online/tools/reading-time-calculator" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Reading Time Calculator"
        description="Free online reading time calculator. Estimates reading duration at 200 wpm (adult average) in real-time."
        features={["Real-time reading time estimation", "200 wpm baseline (adult silent reading)", "Words, sentences, characters counted", "Works offline", "No login required", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Reading Time Calculator — No Login Required
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Paste your text and instantly see how long it takes to read at 200 words per minute — the adult silent reading average.
          </p>
        </section>

        <ReadingTimeTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">reading time calculator</strong> estimates how long it takes a typical adult reader to silently read a piece of text. Notepad AI&apos;s calculator uses <strong className="text-white">200 words per minute</strong>, the well-established research benchmark. Updates live as you type. Runs entirely in your browser — your text is never uploaded.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Reading Speed Reference</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Reader / Content Type</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Speed (wpm)</th>
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Adult silent reading (avg)", "200–250", "Brysbaert 2019 baseline — this calculator's default"],
                  ["Leisure / fiction", "180–220", "Slower, immersive pace"],
                  ["Technical / academic", "100–140", "Dense vocabulary, complex syntax"],
                  ["Skim reading", "400–700", "Headings + first sentences only"],
                  ["Speed reading (trained)", "500–700", "Reduced subvocalization"],
                  ["Audio narration", "150–160", "Audiobook industry standard"],
                  ["Children (Grade 5)", "150", "Average reading speed at age 10"],
                ].map((row) => (
                  <tr key={row[0]} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800 font-medium">{row[0]}</td>
                    <td className="p-4 text-center text-blue-400 border border-gray-800 font-mono">{row[1]}</td>
                    <td className="p-4 text-gray-400 text-sm border border-gray-800">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Common Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "📝", title: "Blog post metadata", desc: "Add '5 min read' badges to your articles — proven to reduce bounce rate." },
              { icon: "🎓", title: "Study planning", desc: "Estimate how long course readings will take so you can schedule them." },
              { icon: "📧", title: "Email length QA", desc: "Keep emails under 1 minute of reading — better response rates." },
              { icon: "📰", title: "Newsletter planning", desc: "Match content length to your audience's available reading time." },
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
            <Link href="/tools/speaking-time-calculator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Speaking Time →</h3>
              <p className="text-gray-400 text-sm">Estimate speech duration @ 130 wpm</p>
            </Link>
            <Link href="/tools/word-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Word Counter →</h3>
              <p className="text-gray-400 text-sm">Count words and characters</p>
            </Link>
            <Link href="/tools/syllable-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Syllable Counter →</h3>
              <p className="text-gray-400 text-sm">Useful for poetry meter</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Reading Time Calculator FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Write Smarter with Live Metrics</h2>
          <p className="text-gray-400 mb-6">Open Notepad AI for an editor with reading time, word count, and more — visible as you write.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
