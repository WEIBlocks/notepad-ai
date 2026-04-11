import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Blog — Note Taking, AI Tools & App Comparisons | Notepad AI",
  description: "Guides, comparisons, and tips for note-taking. Best online notepads, Evernote alternatives, Google Keep alternatives, NLP note taking, and more — all free.",
  keywords: "notepad ai blog, note taking tips, evernote alternative, google keep alternative, notion alternative, best online notepad, NLP note taking, notepad for students",
  alternates: {
    canonical: "https://www.notepad-ai.online/blog"
  },
  openGraph: {
    title: "Blog — Note Taking, AI Tools & App Comparisons",
    description: "Guides, comparisons, and tips for note-taking. Best online notepads, Evernote alternatives, Google Keep alternatives, NLP note taking, and more.",
    url: "https://www.notepad-ai.online/blog"
  }
};

export default function Blog() {
  const blogPosts = [
    {
      slug: "online-notepad-for-students",
      title: "Best Free Online Notepad for Students — No Login Required",
      excerpt: "The best free notepad for students that works on any school computer — no account, offline support, AI writing assistance, and PDF export at zero cost.",
      date: "April 2026",
      readTime: "7 min read",
      category: "Comparisons",
      featured: true
    },
    {
      slug: "evernote-alternative-free",
      title: "Free Evernote Alternative — No Login, No Subscription",
      excerpt: "Evernote now costs $14.99/month. Here's why Notepad AI is the best free Evernote alternative — no account, full offline support, AI features included.",
      date: "April 2026",
      readTime: "8 min read",
      category: "Comparisons",
      featured: true
    },
    {
      slug: "notion-alternative-simple",
      title: "Simple Notion Alternative — Free, No Login, Instant Notes",
      excerpt: "Notion is powerful but slow and complex. Notepad AI opens instantly, requires no login, works offline, and includes free AI writing assistance.",
      date: "April 2026",
      readTime: "7 min read",
      category: "Comparisons",
      featured: true
    },
    {
      slug: "best-online-notepad-2026",
      title: "Best Free Online Notepad 2026 — No Login, Works Offline",
      excerpt: "We tested the top free online notepads in 2026 and ranked them by privacy, offline support, AI features, and no-login access.",
      date: "April 2026",
      readTime: "10 min read",
      category: "Comparisons",
      featured: false
    },
    {
      slug: "google-keep-alternative",
      title: "Google Keep Alternative — Free, No Login, Works Offline",
      excerpt: "Google Keep requires a Google account and stores everything on Google's servers. Here's why Notepad AI is the best private Google Keep alternative.",
      date: "April 2026",
      readTime: "7 min read",
      category: "Comparisons",
      featured: false
    },
    {
      slug: "what-is-nlp-note-taking",
      title: "What is NLP Note Taking? Complete Guide 2026",
      excerpt: "Natural Language Processing is transforming how we take notes. Learn how NLP-powered note taking works and why it makes writing faster and smarter.",
      date: "April 2026",
      readTime: "8 min read",
      category: "AI & Technology",
      featured: false
    },
    {
      slug: "what-is-ai-notepad",
      title: "What is an AI Notepad and How Does It Help You Write?",
      excerpt: "Discover how AI-powered notepads use Natural Language Processing to enhance your writing experience without compromising privacy.",
      date: "January 2026",
      readTime: "5 min read",
      category: "AI & Technology",
      featured: false
    },
    {
      slug: "note-taking-tips",
      title: "10 Tips for Better Note-Taking",
      excerpt: "Improve your note-taking skills with these proven techniques. From the Cornell method to digital strategies for the modern writer.",
      date: "January 2026",
      readTime: "7 min read",
      category: "Productivity",
      featured: false
    },
    {
      slug: "offline-note-taking",
      title: "Offline Note Taking: Why It Matters",
      excerpt: "Learn why offline-capable note-taking apps are essential for productivity, and how to ensure your notes are always accessible.",
      date: "January 2026",
      readTime: "4 min read",
      category: "Productivity",
      featured: false
    }
  ];

  const categories = [
    { name: "All Posts", count: 9 },
    { name: "Comparisons", count: 5 },
    { name: "AI & Technology", count: 2 },
    { name: "Productivity", count: 2 }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Blog", url: "https://www.notepad-ai.online/blog" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Notepad AI Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Comparisons, guides, and tips for note-taking — covering the best online notepads, app alternatives, AI features, and offline writing.
          </p>
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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <section className="space-y-6">
              {blogPosts.map((post, index) => (
                <article key={index} className={`bg-[#1A1A1A] p-6 rounded-2xl border transition-colors ${post.featured ? 'border-purple-500/30 hover:border-purple-500/60' : 'border-gray-800 hover:border-purple-500/30'}`}>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="text-xs text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">New</span>
                    )}
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between text-gray-400 text-sm">
                    <span>{category.name}</span>
                    <span className="text-gray-600">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-4">About This Blog</h3>
              <p className="text-gray-400 text-sm mb-4">
                The Notepad AI blog shares tips, insights, and ideas for better note-taking and writing productivity.
              </p>
              <Link
                href="/about-us"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Learn more about us →
              </Link>
            </div>
          </aside>
        </div>

        {/* Final CTA */}
        <section className="mt-16 text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Write Smarter?</h2>
          <p className="text-gray-400 mb-6">Try the AI-powered notepad that respects your privacy.</p>
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
