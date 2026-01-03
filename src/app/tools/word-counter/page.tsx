import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Free Word Counter Online - Count Words Instantly | Notepad AI",
  description: "Free online word counter tool. Count words, characters, sentences, and paragraphs instantly. Real-time word count as you type. No signup required.",
  keywords: "word counter, word count, count words online, free word counter, online word counter, word counting tool, words per page",
  alternates: {
    canonical: "https://www.notepad-ai.online/tools/word-counter"
  },
  openGraph: {
    title: "Free Word Counter Online - Count Words Instantly",
    description: "Free online word counter tool. Count words, characters, sentences, and paragraphs instantly.",
    url: "https://www.notepad-ai.online/tools/word-counter"
  }
};

export default function WordCounter() {
  const whatItCounts = [
    { icon: "📝", label: "Words", description: "Total word count" },
    { icon: "🔤", label: "Characters", description: "With and without spaces" },
    { icon: "📄", label: "Sentences", description: "Based on punctuation" },
    { icon: "📑", label: "Paragraphs", description: "Separated by line breaks" },
    { icon: "⏱️", label: "Reading Time", description: "Estimated read duration" },
    { icon: "🎤", label: "Speaking Time", description: "Estimated speech duration" }
  ];

  const commonLimits = [
    { platform: "Twitter/X Post", words: "~50-70", characters: "280" },
    { platform: "Instagram Caption", words: "~300-400", characters: "2,200" },
    { platform: "LinkedIn Post", words: "~200-300", characters: "3,000" },
    { platform: "Meta Description (SEO)", words: "~25-30", characters: "155-160" },
    { platform: "Essay (Standard Page)", words: "250-300", characters: "~1,500" },
    { platform: "Blog Post (Short)", words: "300-600", characters: "~3,000" },
    { platform: "Blog Post (Long)", words: "1,000-2,000", characters: "~10,000" },
    { platform: "College Essay", words: "500-650", characters: "~3,500" }
  ];

  const faqs = [
    {
      question: "How does the word counter work?",
      answer: "The word counter analyzes your text in real-time as you type. It counts words by detecting spaces between text, and provides additional metrics like character count, sentences, and estimated reading time."
    },
    {
      question: "Is the word count accurate?",
      answer: "Yes, our word counter uses reliable algorithms to count words accurately. It handles edge cases like multiple spaces, line breaks, and punctuation correctly."
    },
    {
      question: "Does it count characters with and without spaces?",
      answer: "Yes, Notepad AI displays both character counts — with spaces and without spaces — so you can meet any platform's requirements."
    },
    {
      question: "How is reading time calculated?",
      answer: "Reading time is estimated based on an average reading speed of 200-250 words per minute. Speaking time uses ~150 words per minute."
    },
    {
      question: "Is the word counter free?",
      answer: "Yes, the word counter is completely free with no limits. Count as many words as you need."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Word Counter", url: "https://www.notepad-ai.online/tools/word-counter" }
      ]} />
      <SoftwareApplicationSchema
        name="Notepad AI Word Counter"
        description="Free online word counter tool that counts words, characters, sentences, and paragraphs in real-time."
        features={[
          "Real-time word counting",
          "Character count with and without spaces",
          "Sentence and paragraph counting",
          "Reading time estimation",
          "Speaking time estimation",
          "Works offline",
          "Completely free"
        ]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Word Counter — Count Words Instantly
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Real-time word count as you type. Characters, sentences, paragraphs, and more.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI's word counter</strong> is a free, real-time tool that counts words, characters, sentences, and paragraphs as you type.
            Built into the notepad, you always know exactly how long your content is — perfect for meeting word limits, optimizing for SEO,
            or tracking your writing progress. No signup, no downloads, just instant word counting.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Counting Words →
          </Link>
        </section>

        {/* What This Tool Counts */}
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

        {/* Common Word & Character Limits */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Common Word & Character Limits
          </h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Platform/Type</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Words</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Characters</th>
                </tr>
              </thead>
              <tbody>
                {commonLimits.map((item, index) => (
                  <tr key={index} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800">{item.platform}</td>
                    <td className="p-4 text-center text-gray-400 border border-gray-800">{item.words}</td>
                    <td className="p-4 text-center text-gray-400 border border-gray-800">{item.characters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Word Counter FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Word Counter FAQ
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Count Words?</h2>
          <p className="text-gray-400 mb-6">Track your word count in real-time as you write.</p>
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
