import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import TextToSpeechTool from "@/components/tools/TextToSpeechTool";

export const metadata: Metadata = {
  title: "Text to Speech Online — Free | Notepad AI",
  description: "Free online text-to-speech tool. Hear any text read aloud with your browser's built-in voices. Adjustable speed and pitch, multiple languages. No signup.",
  keywords: "text to speech, free text to speech, online tts, read text aloud, voice synthesis, speech generator, text reader online",
  alternates: { canonical: "https://www.notepad-ai.online/tools/text-to-speech" },
  openGraph: {
    title: "Text to Speech Online — Free | Notepad AI",
    description: "Hear text read aloud using browser voices. Free, no signup.",
    url: "https://www.notepad-ai.online/tools/text-to-speech",
  },
};

const faqs = [
  { question: "How does the text-to-speech tool work?", answer: "It uses the Web Speech API (built into modern browsers — Chrome, Edge, Safari) to synthesize speech from your text. The voices come from your operating system, so they're high-quality and free. No audio is uploaded or generated on our servers." },
  { question: "Is the text-to-speech tool free?", answer: "Yes — completely free, no signup, no login, no character limits, no time limits." },
  { question: "What voices are available?", answer: "Whatever voices your OS provides. macOS, Windows, and Chrome all ship with multiple language voices (English, Spanish, French, German, Japanese, etc.). Mobile browsers usually have fewer voices." },
  { question: "Can I adjust the speed?", answer: "Yes — the Rate slider ranges from 0.5x (slow) to 2x (fast). 1x is the natural speaking pace for the selected voice." },
  { question: "Can I adjust the pitch?", answer: "Yes — the Pitch slider ranges from 0.5 (lower) to 2.0 (higher). 1.0 is the default voice pitch. Useful for stylistic experimentation." },
  { question: "Is my text private?", answer: "Yes. The Web Speech API runs entirely on your device — your text never goes to any server. Your audio output is generated locally and never uploaded." },
  { question: "Does it work on mobile?", answer: "Yes — Safari on iOS and Chrome on Android both support the Web Speech API. Available voices vary by device and OS version." },
  { question: "Can I download the audio?", answer: "Not in this version. The Web Speech API plays audio but doesn't expose it as a downloadable file. For downloadable TTS, you'd need a server-based service (which would require uploading your text)." },
];

export default function TextToSpeechPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Text to Speech", url: "https://www.notepad-ai.online/tools/text-to-speech" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Text to Speech"
        description="Free online text-to-speech tool using the browser's Web Speech API. Adjustable rate and pitch, multiple voice options."
        features={["Web Speech API (built into your browser)", "Multiple voice options (depends on OS)", "Adjustable rate (0.5x - 2x)", "Adjustable pitch (0.5 - 2.0)", "Pause / resume / stop controls", "Browser-only — no upload"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Text-to-Speech Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear any text read aloud using your browser&apos;s built-in voices. Adjustable speed and pitch. No signup, no upload, completely private.
          </p>
        </section>

        <TextToSpeechTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Text-to-speech (TTS)</strong> converts written text into spoken audio. Notepad AI&apos;s TTS uses the browser&apos;s built-in <strong className="text-white">Web Speech API</strong> — your text is synthesized on-device using OS-provided voices, so nothing is uploaded. Adjust rate and pitch, pick from your installed voices, and listen instantly.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Common Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🎤", title: "Speech rehearsal", desc: "Hear your speech or presentation script read aloud to catch awkward phrasing before delivering it." },
              { icon: "📚", title: "Proofreading by ear", desc: "Listening to text reveals typos and missing words that the eye glides over. Powerful editing technique." },
              { icon: "♿", title: "Accessibility", desc: "Listen to long articles instead of reading. Useful for visual fatigue, dyslexia support, or multitasking." },
              { icon: "🎓", title: "Language learning", desc: "Hear pronunciation of foreign-language text using a native-accent voice from your OS." },
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
              <p className="text-gray-400 text-sm">Estimate spoken duration</p>
            </Link>
            <Link href="/tools/syllable-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Syllable Counter →</h3>
              <p className="text-gray-400 text-sm">Useful for cadence checks</p>
            </Link>
            <Link href="/tools/word-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Word Counter →</h3>
              <p className="text-gray-400 text-sm">Count words and characters</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Text to Speech FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Write Your Script in Notepad AI</h2>
          <p className="text-gray-400 mb-6">Draft, edit, and rehearse — Notepad AI gives you live counters and AI-assisted writing.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
