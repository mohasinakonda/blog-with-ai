import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";
import { getAllPosts } from "@/lib/api";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
	variable: "--font-bebas-neue",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Hazrat Akonda — Senior Frontend Engineer",
	description:
		"Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Building fast, scalable, and accessible web applications.",
	authors: [{ name: "Hazrat Akonda" }],
	keywords: [
		"Hazrat Akonda",
		"Frontend Engineer",
		"React",
		"Next.js",
		"TypeScript",
		"Web Development",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const posts = getAllPosts();
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
			>
				<Navbar posts={posts} />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
