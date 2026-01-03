import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Notepad AI",
  description: "Contact Notepad AI team. Send feedback, report bugs, request features, or just say hello. We'd love to hear from you.",
  keywords: "contact notepad ai, notepad ai support, notepad ai feedback, notepad ai help, report bug, feature request",
  alternates: {
    canonical: "https://www.notepad-ai.online/contact"
  },
  openGraph: {
    title: "Contact Us - Get in Touch",
    description: "Contact Notepad AI team. Send feedback, report bugs, or request features.",
    url: "https://www.notepad-ai.online/contact"
  }
};

export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "For general inquiries and feedback",
      contact: "hello@notepad-ai.online",
      action: "mailto:hello@notepad-ai.online"
    },
    {
      icon: "🐦",
      title: "Twitter / X",
      description: "For quick questions and updates",
      contact: "@notepadai",
      action: "https://twitter.com/notepadai"
    }
  ];

  const feedbackTypes = [
    {
      icon: "💡",
      title: "Feature Requests",
      description: "Have an idea for a new feature? We'd love to hear it! Tell us what would make Notepad AI better for you."
    },
    {
      icon: "🐛",
      title: "Bug Reports",
      description: "Found something that doesn't work right? Please let us know so we can fix it. Include your browser and device if possible."
    },
    {
      icon: "💬",
      title: "General Feedback",
      description: "Love it? Hate it? Want to share your experience? All feedback helps us improve."
    },
    {
      icon: "❓",
      title: "Questions",
      description: "Have a question that's not in our FAQ? Reach out and we'll help you out."
    }
  ];

  const responseInfo = [
    "We read every message personally",
    "Response time is typically within 24-48 hours",
    "We prioritize bug reports and accessibility issues",
    "Feature requests are tracked and considered for future updates"
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Contact", url: "https://www.notepad-ai.online/contact" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact Us — We'd Love to Hear From You
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Feedback, questions, feature requests, or just saying hello — we're listening.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Get in Touch
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith("http") ? "_blank" : undefined}
                rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors block"
              >
                <span className="text-4xl mb-4 block">{method.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                <p className="text-blue-400 font-medium">{method.contact}</p>
              </a>
            ))}
          </div>
        </section>

        {/* What You Can Contact Us About */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What You Can Contact Us About
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {feedbackTypes.map((type, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <span className="text-3xl mb-3 block">{type.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Response Info */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What to Expect
          </h2>
          <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800 max-w-2xl mx-auto">
            <ul className="space-y-3">
              {responseInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <span className="text-green-400 mt-1">✓</span>
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="mb-16 text-center">
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-3">Looking for Answers?</h3>
            <p className="text-gray-400 mb-4">
              Check our FAQ for answers to common questions.
            </p>
            <Link
              href="/faq"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              View FAQ →
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Thank You</h2>
          <p className="text-gray-400 mb-6">
            We appreciate you taking the time to reach out. Your feedback helps make Notepad AI better for everyone.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Back to Notepad AI →
          </Link>
        </section>
      </div>
    </>
  );
}
