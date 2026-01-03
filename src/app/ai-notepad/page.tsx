import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "AI Notepad - Smart Note Taking with NLP | Notepad AI",
  description: "AI-powered notepad with Natural Language Processing. Smart writing assistance, text analysis, and intelligent features. Free AI notepad with privacy focus.",
  keywords: "ai notepad, ai notes, smart notepad, nlp notepad, intelligent notepad, ai writing assistant, ai note taking, smart notes",
  alternates: {
    canonical: "https://www.notepad-ai.online/ai-notepad"
  },
  openGraph: {
    title: "AI Notepad - Smart Note Taking with NLP",
    description: "AI-powered notepad with Natural Language Processing. Smart writing assistance and text analysis.",
    url: "https://www.notepad-ai.online/ai-notepad"
  }
};

export default function AINotepad() {
  const aiFeatures = [
    {
      icon: "🧠",
      title: "Natural Language Processing",
      description: "Advanced NLP analyzes your writing to understand context, intent, and patterns"
    },
    {
      icon: "📊",
      title: "Smart Text Analysis",
      description: "Automatic detection of lists, key points, and document structure"
    },
    {
      icon: "✨",
      title: "Writing Enhancement",
      description: "Subtle suggestions to improve clarity and flow without interrupting"
    },
    {
      icon: "🎯",
      title: "Context Awareness",
      description: "Understands whether you're brainstorming, drafting, or polishing"
    },
    {
      icon: "🔒",
      title: "Privacy-First AI",
      description: "All AI processing happens locally — your writing never leaves your device"
    },
    {
      icon: "⚡",
      title: "Real-Time Processing",
      description: "AI works instantly as you type, no waiting for responses"
    }
  ];

  const howAIHelps = [
    { step: "1", title: "Understands Context", description: "Recognizes the type of content you're writing" },
    { step: "2", title: "Detects Patterns", description: "Identifies lists, headings, and structure" },
    { step: "3", title: "Adapts Interface", description: "Adjusts features based on your writing style" },
    { step: "4", title: "Provides Insights", description: "Shows word count, reading time, and metrics" },
    { step: "5", title: "Stays Silent", description: "Works in background without popups or interruptions" }
  ];

  const comparedToOthers = [
    { feature: "Local AI Processing", notepadAI: true, others: false },
    { feature: "No Cloud Required", notepadAI: true, others: false },
    { feature: "Privacy Preserved", notepadAI: true, others: false },
    { feature: "Real-Time Analysis", notepadAI: true, others: true },
    { feature: "Non-Intrusive", notepadAI: true, others: false },
    { feature: "Free Forever", notepadAI: true, others: false },
    { feature: "No Account Needed", notepadAI: true, others: false }
  ];

  const faqs = [
    {
      question: "What makes this an 'AI' notepad?",
      answer: "Notepad AI uses Natural Language Processing (NLP) to understand your writing. It analyzes text patterns, detects document structure, and adapts to your writing style — all in real-time and locally on your device."
    },
    {
      question: "Is my writing sent to AI servers?",
      answer: "No. All AI processing happens locally in your browser. Your writing never leaves your device, ensuring complete privacy."
    },
    {
      question: "How is this different from ChatGPT or other AI tools?",
      answer: "Unlike chatbots that you interact with, Notepad AI's AI works silently in the background. It analyzes and enhances your writing experience without requiring prompts or conversations."
    },
    {
      question: "Does the AI write content for me?",
      answer: "No, Notepad AI doesn't generate content for you. It enhances your own writing by providing insights, metrics, and a smart editing experience."
    },
    {
      question: "Is the AI notepad free?",
      answer: "Yes, all AI/NLP features are completely free. There's no premium tier or paid upgrade for AI features."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "AI Notepad", url: "https://www.notepad-ai.online/ai-notepad" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Notepad — Smart Note Taking with NLP
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Intelligent writing assistance powered by Natural Language Processing. Private and free.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI</strong> is an AI-powered notepad that uses Natural Language Processing (NLP) to enhance your writing experience.
            Unlike traditional notepads, it understands your text, detects patterns, and provides intelligent features — all while keeping your data completely private.
            The AI runs locally in your browser, meaning your writing never leaves your device.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Try AI Notepad →
          </Link>
        </section>

        {/* AI/NLP Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            AI/NLP Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How AI Helps Your Writing */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How AI Helps Your Writing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howAIHelps.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy-First AI */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Privacy-First AI
          </h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Feature</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Notepad AI</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Other AI Tools</th>
                </tr>
              </thead>
              <tbody>
                {comparedToOthers.map((row, index) => (
                  <tr key={index} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800">{row.feature}</td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.notepadAI ? "✅" : "❌"}
                    </td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.others ? "✅" : "❌"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AI Notepad FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            AI Notepad FAQ
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready for Smarter Writing?</h2>
          <p className="text-gray-400 mb-6">Experience AI-powered note taking with complete privacy.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Open Notepad AI →
          </Link>
        </section>
      </div>
    </>
  );
}
