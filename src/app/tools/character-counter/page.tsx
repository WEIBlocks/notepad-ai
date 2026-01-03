import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Free Character Counter Online - Count Characters Instantly | Notepad AI",
  description: "Free online character counter tool. Count characters with and without spaces in real-time. Perfect for Twitter, Instagram, SMS, and more. No signup required.",
  keywords: "character counter, character count, count characters online, free character counter, online character counter, letter counter, character limit checker",
  alternates: {
    canonical: "https://www.notepad-ai.online/tools/character-counter"
  },
  openGraph: {
    title: "Free Character Counter Online - Count Characters Instantly",
    description: "Free online character counter tool. Count characters with and without spaces in real-time.",
    url: "https://www.notepad-ai.online/tools/character-counter"
  }
};

export default function CharacterCounter() {
  const whatItCounts = [
    { icon: "🔤", label: "Characters (with spaces)", description: "Every character including spaces" },
    { icon: "📝", label: "Characters (no spaces)", description: "Letters and symbols only" },
    { icon: "📊", label: "Words", description: "Total word count" },
    { icon: "📄", label: "Sentences", description: "Based on punctuation" },
    { icon: "📑", label: "Paragraphs", description: "Separated by line breaks" },
    { icon: "⏱️", label: "Reading Time", description: "Estimated read duration" }
  ];

  const characterLimits = [
    { platform: "Twitter/X", limit: "280 characters" },
    { platform: "Instagram Caption", limit: "2,200 characters" },
    { platform: "Instagram Bio", limit: "150 characters" },
    { platform: "Facebook Post", limit: "63,206 characters" },
    { platform: "LinkedIn Post", limit: "3,000 characters" },
    { platform: "LinkedIn Headline", limit: "220 characters" },
    { platform: "YouTube Title", limit: "100 characters" },
    { platform: "YouTube Description", limit: "5,000 characters" },
    { platform: "TikTok Caption", limit: "2,200 characters" },
    { platform: "SMS Text Message", limit: "160 characters" },
    { platform: "Meta Title (SEO)", limit: "60 characters" },
    { platform: "Meta Description (SEO)", limit: "155-160 characters" }
  ];

  const faqs = [
    {
      question: "How does the character counter work?",
      answer: "The character counter analyzes your text in real-time as you type. It counts every character including letters, numbers, punctuation, and optionally spaces."
    },
    {
      question: "Does it count spaces as characters?",
      answer: "We show both counts — characters with spaces and characters without spaces — so you can meet any platform's specific requirements."
    },
    {
      question: "Why do I need a character counter?",
      answer: "Many platforms have character limits (Twitter 280, Instagram 2,200, SMS 160). A character counter helps you stay within limits without guessing."
    },
    {
      question: "Is the character count accurate?",
      answer: "Yes, our character counter accurately counts all characters including special characters, emojis, and unicode symbols."
    },
    {
      question: "Is the character counter free?",
      answer: "Yes, the character counter is completely free with no limits. Count as many characters as you need."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Character Counter", url: "https://www.notepad-ai.online/tools/character-counter" }
      ]} />
      <SoftwareApplicationSchema
        name="Notepad AI Character Counter"
        description="Free online character counter tool that counts characters with and without spaces in real-time."
        features={[
          "Real-time character counting",
          "Count with and without spaces",
          "Word count included",
          "Sentence and paragraph counting",
          "Reading time estimation",
          "Works offline",
          "Completely free"
        ]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Character Counter — Count Characters Instantly
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Real-time character count with and without spaces. Perfect for social media limits.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI's character counter</strong> is a free, real-time tool that counts every character in your text as you type.
            It displays both characters with spaces and without spaces, plus word count and other metrics.
            Perfect for staying within Twitter's 280 character limit, Instagram's 2,200 character limit, or any platform with character restrictions.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Counting Characters →
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

        {/* Character Limit Reference */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Character Limit Reference
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {characterLimits.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex justify-between items-center">
                <span className="text-gray-300">{item.platform}</span>
                <span className="text-blue-400 font-semibold text-sm">{item.limit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Character Counter FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Character Counter FAQ
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Count Characters?</h2>
          <p className="text-gray-400 mb-6">Track your character count in real-time as you write.</p>
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
