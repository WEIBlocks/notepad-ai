"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

// Tools grouped by category for the dropdown.
// Source of truth for the navigation menu — keep in sync with footer + sitemap.
const toolCategories = [
	{
		heading: "Counters",
		items: [
			{ href: "/tools/word-counter", label: "Word Counter" },
			{ href: "/tools/character-counter", label: "Character Counter" },
			{ href: "/tools/sentence-counter", label: "Sentence Counter" },
			{ href: "/tools/paragraph-counter", label: "Paragraph Counter" },
			{ href: "/tools/line-counter", label: "Line Counter" },
			{ href: "/tools/syllable-counter", label: "Syllable Counter" },
			{ href: "/tools/word-frequency-counter", label: "Word Frequency" },
		],
	},
	{
		heading: "Time Calculators",
		items: [
			{ href: "/tools/reading-time-calculator", label: "Reading Time" },
			{ href: "/tools/speaking-time-calculator", label: "Speaking Time" },
		],
	},
	{
		heading: "Case Converters",
		items: [
			{ href: "/tools/text-case-converter", label: "All-in-One Case Converter" },
			{ href: "/tools/uppercase-converter", label: "UPPERCASE" },
			{ href: "/tools/lowercase-converter", label: "lowercase" },
			{ href: "/tools/title-case-converter", label: "Title Case" },
			{ href: "/tools/sentence-case-converter", label: "Sentence case" },
		],
	},
	{
		heading: "Text Cleaners",
		items: [
			{ href: "/tools/remove-line-breaks", label: "Remove Line Breaks" },
			{ href: "/tools/remove-extra-spaces", label: "Remove Extra Spaces" },
			{ href: "/tools/text-reverser", label: "Text Reverser" },
			{ href: "/tools/duplicate-line-remover", label: "Duplicate Line Remover" },
			{ href: "/tools/text-sorter", label: "Text Sorter" },
			{ href: "/tools/find-and-replace", label: "Find & Replace" },
			{ href: "/tools/text-diff", label: "Text Diff Checker" },
		],
	},
	{
		heading: "Generators & Encoders",
		items: [
			{ href: "/tools/lorem-ipsum-generator", label: "Lorem Ipsum Generator" },
			{ href: "/tools/password-generator", label: "Password Generator" },
			{ href: "/tools/base64-encoder-decoder", label: "Base64 Encode/Decode" },
			{ href: "/tools/text-to-speech", label: "Text to Speech" },
			{ href: "/tools/uuid-generator", label: "UUID Generator" },
			{ href: "/tools/markdown-to-html", label: "Markdown to HTML" },
		],
	},
];

const primaryNavLinks = [
	{ href: "/", label: "Home" },
	{ href: "/features", label: "Features" },
];

const tailNavLinks = [
	{ href: "/docs", label: "Docs" },
	{ href: "/about-us", label: "About" },
];

export default function Navigation() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
	const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);
	const toolsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);

		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setMobileMenuOpen(false);
			}
			if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
				setToolsDropdownOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

	const closeAllMenus = () => {
		setMobileMenuOpen(false);
		setMobileToolsOpen(false);
		setToolsDropdownOpen(false);
	};

	return (
		<div ref={navRef}>
			<nav
				className={`sticky top-0 left-0 right-0 z-20 transition-all duration-300 ${
					scrolled ? "glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<div className="flex-shrink-0 flex items-center">
							<Link href="/" className="flex items-center gap-2 group">
								<div className="relative">
									<Image
										src="/logo.webp"
										alt="NotepadAI"
										width={56}
										height={56}
										priority
										className="transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								<span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
									NotepadAI
								</span>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-8">
							{primaryNavLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="relative text-gray-300 hover:text-white transition-colors duration-200 animated-underline py-1"
								>
									{link.label}
								</Link>
							))}

							{/* Tools dropdown */}
							<div ref={toolsRef} className="relative">
								<button
									type="button"
									onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
									onMouseEnter={() => setToolsDropdownOpen(true)}
									aria-expanded={toolsDropdownOpen}
									aria-haspopup="true"
									className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-200 animated-underline py-1"
								>
									Tools
									<ChevronDownIcon
										className={`h-4 w-4 transition-transform duration-200 ${
											toolsDropdownOpen ? "rotate-180" : ""
										}`}
									/>
								</button>

								{/* Dropdown panel */}
								<div
									onMouseLeave={() => setToolsDropdownOpen(false)}
									className={`absolute top-full right-0 mt-2 w-[640px] glass-strong rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-200 origin-top-right ${
										toolsDropdownOpen
											? "opacity-100 scale-100 pointer-events-auto"
											: "opacity-0 scale-95 pointer-events-none"
									}`}
								>
									<div className="p-6 grid grid-cols-2 gap-x-8 gap-y-4">
										{toolCategories.map((cat) => (
											<div key={cat.heading}>
												<h3 className="text-xs font-semibold mb-2 text-blue-300 uppercase tracking-wider">
													{cat.heading}
												</h3>
												<ul className="space-y-1">
													{cat.items.map((item) => (
														<li key={item.href}>
															<Link
																href={item.href}
																onClick={closeAllMenus}
																className="block text-sm text-gray-300 hover:text-white py-1 transition-colors"
															>
																{item.label}
															</Link>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</div>
							</div>

							{tailNavLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="relative text-gray-300 hover:text-white transition-colors duration-200 animated-underline py-1"
								>
									{link.label}
								</Link>
							))}

							<button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-medium group magnetic-btn">
								<span className="absolute inset-0 w-full h-full">
									<span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />
								</span>
								<span className="relative flex items-center gap-1">
									Get Started
									<svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</span>
							</button>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden p-2 text-gray-300 hover:text-[#4d9fff]"
							onClick={toggleMenu}
							aria-label="Toggle menu"
						>
							{mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
						</button>
					</div>

					{/* Mobile Menu */}
					<div
						className={`md:hidden absolute left-0 right-0 glass-strong shadow-lg transition-all duration-300 ease-in-out ${
							mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
						}`}
					>
						<div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto">
							{primaryNavLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-gray-300 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-all duration-200"
									onClick={closeAllMenus}
								>
									{link.label}
								</Link>
							))}

							{/* Mobile Tools accordion */}
							<button
								type="button"
								onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
								className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-all duration-200"
							>
								<span>Tools</span>
								<ChevronDownIcon
									className={`h-4 w-4 transition-transform duration-200 ${
										mobileToolsOpen ? "rotate-180" : ""
									}`}
								/>
							</button>
							{mobileToolsOpen && (
								<div className="pl-3 space-y-3 pb-2">
									{toolCategories.map((cat) => (
										<div key={cat.heading}>
											<h3 className="text-xs font-semibold mb-1 text-blue-300 uppercase tracking-wider mt-2">
												{cat.heading}
											</h3>
											{cat.items.map((item) => (
												<Link
													key={item.href}
													href={item.href}
													className="block text-sm text-gray-300 hover:text-white py-1.5 px-2 rounded transition-colors"
													onClick={closeAllMenus}
												>
													{item.label}
												</Link>
											))}
										</div>
									))}
								</div>
							)}

							{tailNavLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-gray-300 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-all duration-200"
									onClick={closeAllMenus}
								>
									{link.label}
								</Link>
							))}

							<div className="pt-3 pb-2">
								<button
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
									onClick={closeAllMenus}
								>
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{mobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black/50 md:hidden z-40"
					onClick={() => setMobileMenuOpen(false)}
				/>
			)}
		</div>
	);
}
