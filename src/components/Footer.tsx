import Link from "next/link";
// import { FaGithub, FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const productLinks = [
    { name: 'Features', href: '/features' },
    { name: 'AI Notepad', href: '/ai-notepad' },
    { name: 'Text Editor', href: '/text-editor' },
    { name: 'Mobile', href: '/mobile' },
    { name: 'Offline', href: '/offline' },
  ];

  const toolsLinks = [
    { name: 'Text to PDF', href: '/text-to-pdf' },
    { name: 'Text to Docs', href: '/text-to-docs' },
    { name: 'Word Counter', href: '/tools/word-counter' },
    { name: 'Character Counter', href: '/tools/character-counter' },
    { name: 'Share Notes', href: '/share' },
    { name: 'Password Protect', href: '/password-protect' },
  ];

  const resourcesLinks = [
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Guides', href: '/guides' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Privacy', href: '/privacy' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ];

  const languageLinks = [
    { name: 'Español', href: '/es' },
    { name: 'Português', href: '/pt' },
    { name: 'Français', href: '/fr' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white border-t mt-5 border-[#2a2f3d]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">N</span>
              </div>
              <span className="text-xl font-bold text-white">Notepad AI</span>
            </div>
            <p className="text-gray-200 text-sm">
              Free AI-powered online notepad with NLP. Take notes with autosave, offline mode, and complete privacy. No login required.
            </p>
            {/* Social Links */}
            {/* <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Visit our GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/notepadai"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://discord.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Join our Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:hello@notepad-ai.online"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Email us"
              >
                <FaEnvelope className="w-5 h-5" aria-hidden="true" />
              </a>
            </div> */}
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-blue-300 uppercase tracking-wider">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-blue-300 uppercase tracking-wider">Tools</h3>
            <ul className="space-y-2">
              {toolsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-blue-300 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-blue-300 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Languages */}
            <h3 className="text-sm font-semibold mt-6 mb-4 text-blue-300 uppercase tracking-wider">Languages</h3>
            <ul className="space-y-2">
              {languageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2f3d]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Notepad AI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
