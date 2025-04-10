"use client";
import { Experience } from "@/components/home/experience";
import { FAQ } from "@/components/home/faq";
import { FeaturedBlog } from "@/components/home/featured-blog";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skill";
import { Footer } from "@/components/home/footer";

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<Hero />

			{/* Experience Section */}
			<Experience />

			{/* Skills Section */}
			<Skills />

			{/* Featured Blog Posts Section */}
			<FeaturedBlog />

			{/* FAQ Section */}
			<FAQ />

			{/* Footer Section */}
			<Footer />
		</main>
	);
}
