import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Free Online Text Editor - Simple & Fast | Notepad AI",
  description: "Free online text editor with autosave. Simple, fast, and distraction-free. Write and edit text without signup. Works offline. Export to PDF and Docs.",
  keywords: "text editor, online text editor, free text editor, simple text editor, plain text editor, web text editor, browser text editor",
  alternates: {
    canonical: "https://www.notepad-ai.online/text-editor"
  },
  openGraph: {
    title: "Free Online Text Editor - Simple & Fast",
    description: "Free online text editor with autosave. Simple, fast, and distraction-free.",
    url: "https://www.notepad-ai.online/text-editor"
  }
};

export default function TextEditor() {
  const features = [
    {
      icon: "⚡",
      title: "Instant Start",
      description: "No loading, no login — just open and type"
    },
    {
      icon: "💾",
      title: "Autosave",
      description: "Never lose work — saves automatically as you type"
    },
    {
      icon: "🌐",
      title: "Works Offline",
      description: "Use without internet after first visit"
    },
    {
      icon: "📤",
      title: "Easy Export",
      description: "Export to PDF, Docs, or copy to clipboard"
    },
    {
      icon: "🔒",
      title: "Private",
      description: "All data stored locally on your device"
    },
    {
      icon: "🆓",
      title: "100% Free",
      description: "No ads, no premium tier, free forever"
    }
  ];

  const comparisonData = [
    { feature: "No Login Required", textEditor: true, wordProcessor: false, noteApp: false },
    { feature: "Works Offline", textEditor: true, wordProcessor: "Partial", noteApp: "Partial" },
    { feature: "Autosave", textEditor: true, wordProcessor: true, noteApp: true },
    { feature: "Distraction-Free", textEditor: true, wordProcessor: false, noteApp: false },
    { feature: "Fast Loading", textEditor: true, wordProcessor: false, noteApp: false },
    { feature: "Export to PDF", textEditor: true, wordProcessor: true, noteApp: "Partial" },
    { feature: "Local Storage Only", textEditor: true, wordProcessor: false, noteApp: false },
    { feature: "AI/NLP Features", textEditor: true, wordProcessor: false, noteApp: "Partial" },
    { feature: "Free Forever", textEditor: true, wordProcessor: "Partial", noteApp: "Partial" }
  ];

  const useCases = [
    { icon: "📝", title: "Quick Notes", description: "Jot down ideas instantly without friction" },
    { icon: "✍️", title: "Draft Writing", description: "Write first drafts without formatting distractions" },
    { icon: "💻", title: "Code Snippets", description: "Store code or config files quickly" },
    { icon: "📋", title: "Copy/Paste Work", description: "Clean up text from other sources" },
    { icon: "📚", title: "Study Notes", description: "Take lecture or reading notes efficiently" },
    { icon: "💡", title: "Brainstorming", description: "Capture ideas in freeform text" }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Text Editor", url: "https://www.notepad-ai.online/text-editor" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Online Text Editor — Simple & Fast
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            A distraction-free text editor that works instantly. No signup, no bloat.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI</strong> is a free online text editor designed for speed and simplicity.
            Unlike heavy word processors, it loads instantly, requires no account, and focuses on what matters: your writing.
            With autosave, offline support, and easy export options, it's the perfect tool for quick notes, drafts, and distraction-free writing.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Open Text Editor →
          </Link>
        </section>

        {/* Text Editor Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Text Editor Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Text Editor vs Word Processor */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Text Editor vs Word Processor
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Feature</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Notepad AI<br /><span className="text-xs text-gray-500">(Text Editor)</span></th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Word Processor<br /><span className="text-xs text-gray-500">(Google Docs)</span></th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Note App<br /><span className="text-xs text-gray-500">(Evernote)</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800">{row.feature}</td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.textEditor === true ? "✅" : row.textEditor === false ? "❌" : row.textEditor}
                    </td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.wordProcessor === true ? "✅" : row.wordProcessor === false ? "❌" : row.wordProcessor}
                    </td>
                    <td className="p-4 text-center border border-gray-800">
                      {row.noteApp === true ? "✅" : row.noteApp === false ? "❌" : row.noteApp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Perfect For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex items-start gap-3">
                <span className="text-2xl">{useCase.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Write?</h2>
          <p className="text-gray-400 mb-6">Experience the simplest, fastest text editor online.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Writing →
          </Link>
        </section>
      </div>
    </>
  );
}
