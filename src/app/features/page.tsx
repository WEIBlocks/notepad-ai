import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Features - AI Notepad with NLP, Offline Mode & Privacy | Notepad AI",
  description: "Explore Notepad AI features: AI-powered writing with NLP, real-time autosave, offline mode, local storage privacy, PDF export, note sharing, and more. All free.",
  keywords: "notepad features, AI notepad features, NLP notepad, autosave notepad, offline notepad, secure notepad, notepad AI features",
  alternates: {
    canonical: "https://www.notepad-ai.online/features"
  }
};

export default function Features() {
  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Writing with NLP",
      description: "Notepad AI uses advanced Natural Language Processing to enhance your writing experience.",
      details: [
        "Context Understanding: AI recognizes what you're writing about and adapts",
        "Pattern Detection: Learns your writing style and helps maintain consistency",
        "Intent Recognition: Understands whether you're listing, explaining, or brainstorming",
        "Smart Structuring: Helps organize notes into logical sections automatically",
        "Writing Flow: NLP adapts to your natural writing rhythm without interruption"
      ]
    },
    {
      icon: "💾",
      title: "Real-Time Autosave",
      description: "Never lose your work with intelligent autosaving.",
      details: [
        "Instant Saving: Every keystroke is saved in real-time",
        "No Manual Save: Forget about Ctrl+S — it's automatic",
        "Crash Protection: Browser crash? Device died? Your notes are safe",
        "Local Storage: All saves stored locally in your browser"
      ]
    },
    {
      icon: "📴",
      title: "Offline Mode",
      description: "Work without internet anywhere.",
      details: [
        "Full Offline Support: Write and edit without any connection",
        "Automatic Caching: App loads instantly even offline",
        "Travel Ready: Perfect for flights, trains, remote areas",
        "No Internet Required: After first load, works completely offline"
      ]
    },
    {
      icon: "🔒",
      title: "Privacy & Security",
      description: "Your notes stay private.",
      details: [
        "Local Storage Only: All data stored in your browser",
        "Zero Server Upload: Nothing sent to external servers",
        "No Tracking: Zero analytics, zero cookies, zero monitoring",
        "No Ads: Clean interface with no advertisements",
        "Password Protection: Encrypt notes with password when sharing"
      ]
    },
    {
      icon: "📄",
      title: "Export Options",
      description: "Take your notes anywhere.",
      details: [
        "Export to PDF: One-click PDF generation",
        "Export to Docs: Convert to editable document format",
        "Plain Text: Download as .txt file",
        "Copy All: Copy entire note to clipboard",
        "Print Ready: Formatted for direct printing"
      ]
    },
    {
      icon: "🔗",
      title: "Note Sharing",
      description: "Collaborate and share easily.",
      details: [
        "Unique Links: Generate shareable link for any note",
        "No Account Needed: Recipients view without signup",
        "Password Protection: Add password for sensitive notes",
        "Instant Access: Shared notes load immediately"
      ]
    },
    {
      icon: "📊",
      title: "Writing Tools",
      description: "Built-in tools to help you write.",
      details: [
        "Word Counter: Real-time word count display",
        "Character Counter: Track character count with/without spaces",
        "Sentence Counter: Count sentences for readability",
        "Reading Time: Estimated reading time for your note"
      ]
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description: "Works everywhere.",
      details: [
        "Any Browser: Chrome, Firefox, Safari, Edge, Opera",
        "Any Device: Desktop, laptop, tablet, smartphone",
        "Any OS: Windows, Mac, Linux, iOS, Android",
        "Responsive Design: Adapts to any screen size"
      ]
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Fast and lightweight.",
      details: [
        "Instant Load: Opens in under 2 seconds",
        "Minimal Resources: Light on CPU and memory",
        "No Bloat: Only essential features, no clutter",
        "Battery Friendly: Efficient for mobile use"
      ]
    }
  ];

  const comparisonData = [
    { feature: "Free", notepadAI: true, windowsNotepad: true, googleDocs: true, evernote: "Limited" },
    { feature: "AI/NLP", notepadAI: true, windowsNotepad: false, googleDocs: "Basic", evernote: false },
    { feature: "Offline Mode", notepadAI: true, windowsNotepad: true, googleDocs: "Limited", evernote: "Limited" },
    { feature: "No Login", notepadAI: true, windowsNotepad: true, googleDocs: false, evernote: false },
    { feature: "Local Storage", notepadAI: true, windowsNotepad: true, googleDocs: false, evernote: false },
    { feature: "PDF Export", notepadAI: true, windowsNotepad: false, googleDocs: true, evernote: true },
    { feature: "Note Sharing", notepadAI: true, windowsNotepad: false, googleDocs: true, evernote: true },
    { feature: "Password Protect", notepadAI: true, windowsNotepad: false, googleDocs: false, evernote: true },
    { feature: "Cross-Platform", notepadAI: true, windowsNotepad: false, googleDocs: true, evernote: true },
    { feature: "Zero Tracking", notepadAI: true, windowsNotepad: true, googleDocs: false, evernote: false },
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Features", url: "https://www.notepad-ai.online/features" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Notepad AI Features — Everything You Need to Write Smarter
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            AI-powered writing, offline mode, complete privacy, and more. All free.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            Notepad AI combines powerful features with simplicity. From AI-powered Natural Language Processing
            that understands your writing, to offline mode that works without internet, to privacy-first local
            storage — every feature is designed to make note-taking smarter, faster, and more secure.
            Explore all the features that make Notepad AI the best free online notepad.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Try Notepad AI Now →
          </Link>
        </section>

        {/* Features Grid */}
        <div className="space-y-12 mb-16">
          {features.map((feature, index) => (
            <section key={index} className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.title}</h2>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Feature</th>
                  <th className="p-4 text-center text-blue-400 border border-gray-800">Notepad AI</th>
                  <th className="p-4 text-center text-gray-400 border border-gray-800">Windows Notepad</th>
                  <th className="p-4 text-center text-gray-400 border border-gray-800">Google Docs</th>
                  <th className="p-4 text-center text-gray-400 border border-gray-800">Evernote</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800">{row.feature}</td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.notepadAI === true ? "✅" : row.notepadAI === false ? "❌" : `⚠️ ${row.notepadAI}`}
                    </td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.windowsNotepad === true ? "✅" : row.windowsNotepad === false ? "❌" : `⚠️ ${row.windowsNotepad}`}
                    </td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.googleDocs === true ? "✅" : row.googleDocs === false ? "❌" : `⚠️ ${row.googleDocs}`}
                    </td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.evernote === true ? "✅" : row.evernote === false ? "❌" : `⚠️ ${row.evernote}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience These Features?</h2>
          <p className="text-gray-400 mb-6">Start writing smarter with Notepad AI — completely free, no login required.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Writing Now →
          </Link>
        </section>
      </div>
    </>
  );
}
