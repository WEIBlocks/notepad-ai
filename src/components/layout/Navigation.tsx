"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Bars3Icon,
	XMarkIcon
} from "@heroicons/react/24/outline";

export default function Navigation() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				setMobileMenuOpen(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const toggleMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/features", label: "Features" },
		{ href: "/docs", label: "Docs" },
		{ href: "/about-us", label: "About" },
	];

	return (
		<div ref={navRef}>
			<nav className={`sticky top-0 left-0 right-0 z-20 transition-all duration-300 ${
				scrolled
					? 'glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
					: 'bg-transparent'
			}`}>
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
									{/* Glow effect on hover */}
									<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								<span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
									NotepadAI
								</span>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-8">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="relative text-gray-300 hover:text-white transition-colors duration-200 animated-underline py-1"
								>
									{link.label}
								</Link>
							))}
							<button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-medium group magnetic-btn">
								{/* Shimmer effect */}
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
							{mobileMenuOpen ? (
								<XMarkIcon className="h-6 w-6" />
							) : (
								<Bars3Icon className="h-6 w-6" />
							)}
						</button>
					</div>

					{/* Mobile Menu */}
					<div
						className={`md:hidden absolute left-0 right-0 glass-strong shadow-lg transition-all duration-300 ease-in-out ${
							mobileMenuOpen
								? 'opacity-100 translate-y-0'
								: 'opacity-0 -translate-y-full pointer-events-none'
						}`}
					>
						<div className="px-4 py-3 space-y-1">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block text-gray-300 hover:text-white hover:bg-white/5 py-3 px-3 rounded-lg transition-all duration-200"
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<div className="pt-3 pb-2">
								<button
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
									onClick={() => setMobileMenuOpen(false)}
								>
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Overlay for mobile menu */}
			{mobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black/50 md:hidden z-40"
					onClick={() => setMobileMenuOpen(false)}
				/>
			)}
		</div>
	);
}
