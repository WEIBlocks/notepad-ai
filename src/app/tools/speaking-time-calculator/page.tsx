import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import SpeakingTimeTool from "@/components/tools/SpeakingTimeTool";

export const metadata: Metadata = {
  title: "Speaking Time Calculator — Free, No Login | Notepad AI",
  description: "Free online speaking time calculator. Estimate how long a speech or script takes to read aloud at 130 wpm — the conversational pace. Perfect for presentations, podcasts, voiceovers.",
  keywords: "speaking time calculator, speech time calculator, words per minute speaking, presentation time, how long to speak, voiceover length",
  alternates: { canonical: "https://www.notepad-ai.online/tools/speaking-time-calculator" },
  openGraph: {
    title: "Speaking Time Calculator — Free, No Login | Notepad AI",
    description: "Estimate how long any text takes to speak aloud. 130 wpm baseline.",
    url: "https://www.notepad-ai.online/tools/speaking-time-calculator",
  },
};

const faqs = [
  { question: "What speaking speed does the calculator use?", answer: "130 words per minute — the established conversational pace for clear, well-paced speech. Faster delivery (160 wpm) starts feeling rushed; slower (100 wpm) feels deliberate or formal. 130 is the sweet spot for presentations, podcasts, and voiceover work." },
  { question: "Is the speaking time calculator free?", answer: "Yes, completely free. No signup or login required. Estimate speaking time for speeches, podcast scripts, voiceover copy — any text length." },
  { question: "Why 130 wpm instead of 150?", answer: "Toastmasters and most professional voiceover guides cite 125-150 wpm as the comfortable conversational range. We use 130 as a conservative middle. Faster speakers should multiply by 0.8; slower or formal speakers by 1.2." },
  { question: "Is this useful for presentations?", answer: "Very. A common rule: don't write more than ~1,300 words for a 10-minute talk. The calculator tells you instantly if you've over-written your script." },
  { question: "Does it work offline?", answer: "Yes. After the page loads, the calculator runs entirely in your browser. Useful for editing scripts during travel." },
  { question: "Is the text I paste private?", answer: "Yes. Your text never leaves your browser. There is no server upload, no logging, no analytics on what you paste." },
  { question: "Speaking time vs reading time — what's the difference?", answer: "Reading silently is ~200 wpm. Speaking aloud is ~130 wpm. Speaking is slower because of articulation, breathing, and natural pauses. The same blog post takes ~50% longer to deliver as an audiobook than to silently read." },
  { question: "How long is a typical TED talk?", answer: "18 minutes — the famous TED format. That's roughly 2,340 words at 130 wpm. Most experienced speakers under-write and use the extra time for emphasis, pauses, and audience interaction." },
];

export default function SpeakingTimePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Speaking Time Calculator", url: "https://www.notepad-ai.online/tools/speaking-time-calculator" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Speaking Time Calculator"
        description="Free online speaking time calculator. Estimates spoken delivery duration at 130 wpm (conversational pace) in real-time."
        features={["Real-time speaking time estimation", "130 wpm conversational baseline", "Words, sentences, characters counted", "Works offline", "Privacy-first", "No login required"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Speaking Time Calculator — No Login Required
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Paste your speech, script, or voiceover copy and instantly see how long it takes to speak aloud at 130 wpm — conversational pace.
          </p>
        </section>

        <SpeakingTimeTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">speaking time calculator</strong> estimates how long it takes to read text aloud at a natural conversational pace. Notepad AI&apos;s calculator uses <strong className="text-white">130 words per minute</strong> — the Toastmasters / voiceover industry baseline. Updates live as you type. Runs entirely in your browser.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Speaking Speed Reference</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Speaking Style</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Speed (wpm)</th>
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Conversational (default)", "120–150", "Podcasts, talks, voiceover — our 130 wpm default"],
                  ["Auctioneer / commercial fast", "200+", "Specialist delivery"],
                  ["Newscaster", "150–170", "Authoritative but clear"],
                  ["Audiobook narration", "150–160", "Industry standard"],
                  ["Slow / formal", "100–120", "Ceremonies, eulogies, technical"],
                  ["Sermons / motivational", "110–140", "Builds rhythm and emphasis"],
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
              { icon: "🎤", title: "Presentation timing", desc: "Match script length to your time slot — fits 10-min talks, 18-min TED-style, 45-min keynotes." },
              { icon: "🎧", title: "Podcast scripting", desc: "Plan episode segments so you hit consistent runtime targets." },
              { icon: "🎬", title: "Voiceover / video scripts", desc: "Match narration to scene length, leaving room for visuals." },
              { icon: "💒", title: "Wedding / event speeches", desc: "Keep your toast or eulogy at the right length — usually 3-5 min." },
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
            <Link href="/tools/reading-time-calculator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Reading Time →</h3>
              <p className="text-gray-400 text-sm">Silent reading estimate @ 200 wpm</p>
            </Link>
            <Link href="/tools/word-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Word Counter →</h3>
              <p className="text-gray-400 text-sm">Count words and characters</p>
            </Link>
            <Link href="/tools/text-to-speech" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text to Speech →</h3>
              <p className="text-gray-400 text-sm">Hear your script read aloud</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Speaking Time Calculator FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Write Your Speech in Notepad AI</h2>
          <p className="text-gray-400 mb-6">Live word count, reading time, and speaking time as you write. Plus AI-assisted phrasing.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
