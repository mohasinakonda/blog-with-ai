import { Metadata } from "next";
import { getAllPosts } from "@/lib/api";

import { Hero } from "@/components/home/hero";
import { ProjectStack } from "@/components/home/project-stack";
import { Capabilities } from "@/components/home/capabilities";
import { Experience } from "@/components/home/experience";
import { FeaturedBlog } from "@/components/home/featured-blog";
import { Footer } from "@/components/home/footer";

export const metadata: Metadata = {
	title: "Hazrat Akonda — Senior Frontend Engineer",
	description:
		"Senior Frontend Engineer specializing in React, Next.js, and TypeScript. Building fast, scalable, and accessible web applications.",
	authors: [{ name: "Hazrat Akonda" }],
	keywords: [
		"Hazrat Akonda",
		"mohasinakonda",
		"Frontend Engineer",
		"Next.js",
		"React",
		"TypeScript",
		"React developer",
		"next js developer",
		"frontend developer",
		"senior frontend developer",
		"senior react developer",
		"senior next js developer",
		"experienced frontend developer",
		"experienced react developer",
		"experienced next js developer",
	],
};

export default function Home() {
	const posts = getAllPosts();
	const featuredPost = posts.slice(0, 4);

	return (
		<main className="min-h-screen bg-[#080808] max-w-5xl mx-auto shadow-[0_0_0_1px_#1f1f1f]">
			{/* 3.2 — Hero */}
			<Hero />

			{/* 3.3 — Scroll-Driven Sticky Stacking Project Showcase */}
			<ProjectStack />

			{/* 3.4 — Engineering Capabilities */}
			<Capabilities />

			{/* 3.5 — Metrics & Experience Timeline */}
			<Experience />

			{/* 3.6 — Engineering Notes & Writing */}
			<FeaturedBlog featuredPost={featuredPost} />

			{/* 3.7 — Contact Footer */}
			<Footer />
		</main>
	);
}
