import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Script from "next/script";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";
import dynamic from "next/dynamic";

// Lazy load heavy background animations to improve LCP
const AnimatedBackground = dynamic(() => import("@/components/AnimatedBackground"), {
	ssr: false,
	loading: () => <div className="fixed inset-0 -z-10 bg-[#0a0a0a]" />
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
	preload: true,
});

export const metadata: Metadata = {
	title: "Free Online Notepad for Quick Notes – Secure, Simple & Fast",
	description: "Take notes online with our free notepad. No sign-up, autosave enabled, fast and private. Perfect for writing, editing, and storing notes on the go.",
	keywords: "online notepad, notepad online, notes online, write notes online, free online notepad, notepad AI, free online notepad with save feature, online notepad without login, secure AI-powered notepad online, AI note-taking tool, online notepad that auto saves, AI notepad for daily notes, fast online notepad for writing, minimal notepad web app, lightweight online notepad tool, AI writing assistant, smart note editor, online text editor with AI, GPT-powered notepad, intelligent online notebook, machine learning note app, context-aware note taking, Notepad AI online, notepad-ai.online, notepad-ai tool, notepad AI web app",
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/icon.png', type: 'image/png' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-icon.png',
	},
	alternates: {
		canonical: "https://www.notepad-ai.online/"
	}
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<head>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
					`}
				</Script>
			</head>
			<body className="min-h-full relative">
				{/* Lazy-loaded animated background for better LCP */}
				<AnimatedBackground />

				<AppWrapper>
					<Navigation />
					<main className="h-screen relative ">
						<div className=" px-8 lg:px-12  backdrop-blur-[3px]">
							{children}
							<Footer />
						</div>
					</main>
				</AppWrapper>
			</body>
		</html>
	);
}
