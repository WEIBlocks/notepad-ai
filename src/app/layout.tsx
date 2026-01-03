import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Script from "next/script";
import Footer from "@/components/Footer";
import AppWrapper from "@/components/AppWrapper";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { OrganizationSchema, WebApplicationSchema, FAQSchema, homepageFAQs } from "@/components/seo/SchemaMarkup";

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
	metadataBase: new URL("https://www.notepad-ai.online"),
	title: "Free AI-Powered Online Notepad - NLP Note Taking | Notepad AI",
	description: "Free AI-powered online notepad with Natural Language Processing. Write, organize, and save notes with autosave, offline mode, and complete privacy. No login required.",
	keywords: "online notepad, free notepad, AI notepad, NLP notepad, notepad online, AI note taking, smart notepad, secure notepad, offline notepad, notepad AI, free online notepad, notepad without login, AI writing tool",
	authors: [{ name: "Notepad AI" }],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/icon.png', type: 'image/png' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-icon.png',
	},
	alternates: {
		canonical: "https://www.notepad-ai.online/",
		languages: {
			"en": "https://www.notepad-ai.online/",
			"es": "https://www.notepad-ai.online/es",
			"pt": "https://www.notepad-ai.online/pt",
			"fr": "https://www.notepad-ai.online/fr",
			"x-default": "https://www.notepad-ai.online/",
		},
	},
	openGraph: {
		type: "website",
		url: "https://www.notepad-ai.online/",
		title: "Free AI-Powered Online Notepad - NLP Note Taking",
		description: "Free AI-powered online notepad with NLP. Autosave, offline mode, complete privacy. No login required.",
		siteName: "Notepad AI",
		locale: "en_US",
		images: [
			{
				url: "https://www.notepad-ai.online/og-image.png",
				width: 1200,
				height: 630,
				alt: "Notepad AI - Free AI-Powered Online Notepad",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI-Powered Online Notepad - NLP Note Taking",
		description: "Free AI-powered online notepad with NLP. Autosave, offline mode, complete privacy.",
		images: ["https://www.notepad-ai.online/twitter-image.png"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<head>
				{/* Schema.org structured data */}
				<OrganizationSchema />
				<WebApplicationSchema />
				<FAQSchema faqs={homepageFAQs} />

				{/* Defer GA until after page is fully loaded to improve LCP */}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
					strategy="lazyOnload"
				/>
				<Script id="google-analytics" strategy="lazyOnload">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
					`}
				</Script>
			</head>
			<body className="min-h-full relative">
				{/* Scroll progress indicator */}
				<ScrollProgress />

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
