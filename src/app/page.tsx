import { Experience } from "@/components/home/experience";
import { FAQ } from "@/components/home/faq";
import { FeaturedBlog } from "@/components/home/featured-blog";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skill";
import { Footer } from "@/components/home/footer";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/api";
export const metadata: Metadata = {
	title: "Hazrat",
	description:
		"Hazrat is a full stack developer who specializes in building scalable and high-performance web applications. He has a passion for creating intuitive and user-friendly interfaces, and he is always looking for new challenges to tackle.",
	authors: [{ name: "Hazrat" }],
	keywords: [
		"Hazrat",
		"mohasinakonda",
		"Next.js",
		"React",
		"Tailwind CSS",
		"TypeScript",
	],
};
export default function Home() {
	const posts = getAllPosts();
	const featuredPost = posts.slice(0, 3);
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<Hero />

			{/* Experience Section */}
			<Experience />

			{/* Skills Section */}
			<Skills />

			{/* Featured Blog Posts Section */}
			<FeaturedBlog featuredPost={featuredPost} />

			{/* FAQ Section */}
			<FAQ />

			{/* Footer Section */}
			<Footer />
		</main>
	);
}
