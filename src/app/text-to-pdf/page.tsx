import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, HowToSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Text to PDF - Convert Notes to PDF Free | Notepad AI",
  description: "Convert text to PDF instantly for free. One-click PDF generation from your notes. No upload to servers, complete privacy. Professional PDF output every time.",
  keywords: "text to pdf, convert text to pdf, notepad to pdf, notes to pdf, text to pdf converter, free pdf converter, pdf generator",
  alternates: {
    canonical: "https://www.notepad-ai.online/text-to-pdf"
  },
  openGraph: {
    title: "Text to PDF - Convert Notes to PDF Free",
    description: "Convert text to PDF instantly. One-click PDF generation with complete privacy.",
    url: "https://www.notepad-ai.online/text-to-pdf"
  }
};

export default function TextToPdfPage() {
  const howToSteps = [
    { name: "Create Your Note", text: "Write or paste your content into Notepad AI. Format as needed." },
    { name: "Click Export to PDF", text: "Find the export button and select PDF format. Conversion is instant." },
    { name: "Download Your PDF", text: "Your browser downloads the PDF file. Open, print, or share as needed." }
  ];

  const whyChooseFeatures = [
    { icon: "🔒", title: "100% Private", description: "Conversion in browser — nothing uploaded anywhere" },
    { icon: "⚡", title: "Instant Generation", description: "PDF ready in seconds, no waiting" },
    { icon: "✨", title: "Professional Output", description: "Clean, well-formatted PDFs every time" },
    { icon: "♾️", title: "Free & Unlimited", description: "No conversion limits, completely free" },
    { icon: "🚫", title: "No Account Needed", description: "Convert without signup" },
    { icon: "📴", title: "Offline Capable", description: "Generate PDFs even without internet" }
  ];

  const pdfFeatures = [
    { icon: "📐", text: "Clean Formatting: Professional layout with proper margins" },
    { icon: "🔤", text: "Readable Fonts: Standard fonts for universal compatibility" },
    { icon: "📄", text: "Page Numbers: Automatic page numbering for multi-page notes" },
    { icon: "🖨️", text: "Print Ready: Optimized for printing on any printer" },
    { icon: "📦", text: "Small File Size: Efficient PDFs that are easy to share" }
  ];

  const useCases = [
    { icon: "💼", title: "Business", description: "Convert meeting notes to shareable PDF reports" },
    { icon: "🎓", title: "Education", description: "Create PDF study guides from class notes" },
    { icon: "⚖️", title: "Legal", description: "Generate document records in PDF format" },
    { icon: "👤", title: "Personal", description: "Archive important notes as permanent PDFs" },
    { icon: "📧", title: "Sharing", description: "Send notes as PDF attachments via email" }
  ];

  const faqs = [
    {
      question: "Is my text uploaded to a server?",
      answer: "No. The PDF conversion happens entirely in your browser. Your text never leaves your device."
    },
    {
      question: "Is there a page limit?",
      answer: "No, you can convert notes of any length to PDF. Long notes automatically paginate."
    },
    {
      question: "Can I customize the PDF appearance?",
      answer: "Currently, PDFs use a clean default format. Custom styling options are coming soon."
    },
    {
      question: "What PDF viewers can open the file?",
      answer: "Any PDF reader works: Adobe Acrobat, Chrome, Firefox, Preview (Mac), Edge, and all mobile PDF apps."
    },
    {
      question: "Is the PDF converter free?",
      answer: "Yes, the Text to PDF feature is completely free with no limits on conversions."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Text to PDF", url: "https://www.notepad-ai.online/text-to-pdf" }
      ]} />
      <HowToSchema
        name="How to Convert Text to PDF"
        description="Convert your notes to PDF format with Notepad AI in three simple steps."
        steps={howToSteps}
        totalTime="PT1M"
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Text to PDF — Convert Notes to PDF Instantly Free
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            One-click PDF generation. No upload, complete privacy.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI's Text to PDF feature</strong> converts your notes into professional PDF documents with one click.
            The conversion happens entirely in your browser — no data is uploaded to any server, ensuring complete privacy.
            Generate clean, printable PDFs from any note instantly, ready for sharing, printing, or archiving.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Convert to PDF Now →
          </Link>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How to Convert Text to PDF
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {howToSteps.map((step, index) => (
              <div key={index} className="relative bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800">
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mt-4 mb-3">{step.name}</h3>
                <p className="text-gray-400 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Notepad AI */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Why Choose Notepad AI for PDF Conversion?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PDF Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            PDF Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pdfFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#1A1A1A] p-4 rounded-xl border border-gray-800">
                <span className="text-xl">{feature.icon}</span>
                <p className="text-gray-300 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Text to PDF Use Cases
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center hover:border-purple-500/30 transition-colors">
                <span className="text-2xl mb-2 block">{useCase.icon}</span>
                <h3 className="text-white font-semibold mb-1 text-sm">{useCase.title}</h3>
                <p className="text-gray-400 text-xs">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Text to PDF FAQ
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Create Your PDF?</h2>
          <p className="text-gray-400 mb-6">Convert your notes to professional PDFs — completely free, no upload required.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Generate PDF Now →
          </Link>
        </section>
      </div>
    </>
  );
}
