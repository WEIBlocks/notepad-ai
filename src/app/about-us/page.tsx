import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Us - The Story Behind Notepad AI | Notepad AI",
  description: "Learn about Notepad AI, our mission, and why we built a free AI-powered notepad focused on privacy, simplicity, and intelligent writing. Our story and values.",
  keywords: "about notepad ai, notepad ai team, who made notepad ai, notepad ai story, about us, our mission",
  alternates: {
    canonical: "https://www.notepad-ai.online/about-us"
  },
  openGraph: {
    title: "About Us - The Story Behind Notepad AI",
    description: "Learn about Notepad AI, our mission, and why we built a free AI-powered notepad.",
    url: "https://www.notepad-ai.online/about-us"
  }
};

export default function About() {
  const values = [
    {
      icon: "🔍",
      title: "Transparency",
      description: "We're clear about how things work. No hidden tracking, no secret data collection."
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "Free for everyone, works on any device."
    },
    {
      icon: "⭐",
      title: "Quality",
      description: "We'd rather have fewer features that work perfectly than many features that don't."
    },
    {
      icon: "🤝",
      title: "Respect",
      description: "We respect your time (fast, no bloat) and your privacy (no tracking)."
    }
  ];

  const beliefs = [
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Your notes are your business. We don't store them on our servers, we don't read them, we don't sell them. Everything stays on your device."
    },
    {
      icon: "✨",
      title: "Simplicity Matters",
      description: "No account creation, no complex settings, no learning curve. Open and write. That's it."
    },
    {
      icon: "🧠",
      title: "AI Should Help, Not Intrude",
      description: "Our NLP works silently in the background, understanding your writing and adapting to help you — without popups, suggestions you didn't ask for, or AI that takes over."
    },
    {
      icon: "🆓",
      title: "Free Means Free",
      description: "No hidden fees, no premium tiers for basic features, no \"free trial\" that expires. Notepad AI is free for everyone, forever."
    },
    {
      icon: "🌐",
      title: "Works Everywhere",
      description: "Desktop, mobile, tablet. Online, offline. Chrome, Safari, Firefox. We believe your notepad should work wherever you are."
    }
  ];

  const upcomingFeatures = [
    "Enhanced AI writing assistance",
    "More export formats",
    "Improved mobile experience",
    "Optional cloud sync (privacy-preserving)",
    "Collaboration features",
    "Browser extensions"
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "About Us", url: "https://www.notepad-ai.online/about-us" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Notepad AI — Our Mission and Story
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Building the future of simple, private, intelligent note-taking.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <div className="space-y-4 text-gray-300 max-w-4xl mx-auto">
            <p>
              <strong className="text-white">Notepad AI</strong> was created with a simple belief: note-taking should be effortless, private, and intelligent.
            </p>
            <p>
              We saw a world of note apps that were either too simple (like Windows Notepad) or too complex (like Evernote/Notion).
              Apps that required accounts, stored your data on their servers, and tracked your behavior.
            </p>
            <p>
              We wanted something different: <strong className="text-white">a notepad that respects your privacy, understands your writing, and just works.</strong>
            </p>
            <p className="text-center pt-4">
              That's why we built Notepad AI.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Try Notepad AI →
          </Link>
        </section>

        {/* What We Believe */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What We Believe
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.slice(0, 3).map((belief, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{belief.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{belief.title}</h3>
                <p className="text-gray-400">{belief.description}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {beliefs.slice(3).map((belief, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{belief.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{belief.title}</h3>
                <p className="text-gray-400">{belief.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center">
                <span className="text-2xl mb-2 block">{value.icon}</span>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What's Next
          </h2>
          <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 text-center">
              We're continuously improving Notepad AI based on user feedback. Upcoming features include:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {upcomingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400">
                  <span className="text-blue-400">→</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Get in Touch
          </h2>
          <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800 max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-6">
              We love hearing from users! Whether you have feedback, feature requests, or just want to say hi:
            </p>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="text-white font-semibold">Email:</span> hello@notepad-ai.online
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Twitter:</span> @notepadai
              </p>
            </div>
            <p className="text-gray-300 mt-6 pt-6 border-t border-gray-800">
              Thank you for using Notepad AI. We're honored to be part of your writing journey.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Writing?</h2>
          <p className="text-gray-400 mb-6">Experience intelligent, private note-taking — completely free.</p>
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
