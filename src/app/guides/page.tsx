import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Guides - Note Taking Tips & Tutorials | Notepad AI",
  description: "Helpful guides for better note-taking. Learn productivity tips, writing techniques, and how to get the most from Notepad AI. Free tutorials and tips.",
  keywords: "notepad guides, note taking guides, how to take notes, notepad tutorials, writing guides, productivity guides, note taking tips",
  alternates: {
    canonical: "https://www.notepad-ai.online/guides"
  },
  openGraph: {
    title: "Guides - Note Taking Tips & Tutorials",
    description: "Helpful guides for better note-taking. Learn productivity tips and writing techniques.",
    url: "https://www.notepad-ai.online/guides"
  }
};

export default function Guides() {
  const guideCategories = [
    {
      title: "Getting Started Guides",
      icon: "🚀",
      guides: [
        { title: "Your First Note in Notepad AI", description: "Learn how to create, save, and organize your first note in under 2 minutes." },
        { title: "Keyboard Shortcuts", description: "Speed up your writing with essential keyboard shortcuts for Notepad AI." },
        { title: "Setting Up Offline Mode", description: "How to ensure Notepad AI works offline for use anywhere." }
      ]
    },
    {
      title: "Productivity Guides",
      icon: "⚡",
      guides: [
        { title: "The Cornell Note-Taking Method", description: "Learn the proven Cornell method for effective lecture and meeting notes." },
        { title: "Bullet Journaling in Notepad AI", description: "How to create a digital bullet journal for tasks and goals." },
        { title: "Daily Note-Taking Routine", description: "Establish a simple daily practice for capturing ideas and staying organized." }
      ]
    },
    {
      title: "Export & Sharing Guides",
      icon: "📤",
      guides: [
        { title: "Creating Professional PDFs", description: "Tips for generating clean, well-formatted PDF documents from your notes." },
        { title: "Sharing Notes Securely", description: "Best practices for sharing sensitive notes with password protection." },
        { title: "Converting Notes to Documents", description: "How to export notes to Word/Docs format for further editing." }
      ]
    },
    {
      title: "Writing Guides",
      icon: "✍️",
      guides: [
        { title: "Overcoming Writer's Block", description: "Techniques to start writing when you're stuck." },
        { title: "Organizing Long Documents", description: "How to structure and outline longer writing projects." },
        { title: "Editing and Revising Notes", description: "Tips for polishing your notes into finished content." }
      ]
    },
    {
      title: "Privacy Guides",
      icon: "🔒",
      guides: [
        { title: "Understanding Local Storage", description: "How Notepad AI keeps your notes private with local storage." },
        { title: "Deleting Your Data", description: "How to completely remove notes and clear your data." },
        { title: "Password-Protecting Sensitive Notes", description: "When and how to use password protection for private information." }
      ]
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Guides", url: "https://www.notepad-ai.online/guides" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Guides — Master Note Taking with Notepad AI
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Tips, tutorials, and techniques for better writing and productivity.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            The <strong className="text-white">Notepad AI Guides</strong> section provides helpful tutorials, tips, and techniques for effective note-taking.
            Whether you're a student, professional, or creative writer, these guides will help you write better, stay organized,
            and get the most from your notepad.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Writing Now →
          </Link>
        </section>

        {/* Guide Categories */}
        <div className="space-y-12">
          {guideCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span>{category.icon}</span>
                {category.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.guides.map((guide, guideIndex) => (
                  <div key={guideIndex} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors cursor-pointer group">
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{guide.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="mt-16 text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Learn. Apply. Write.</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Stay ahead of the curve with practical, NLP-informed advice. Start reading, start writing — and let the language work for you.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Try Notepad AI →
          </Link>
        </section>
      </div>
    </>
  );
}
