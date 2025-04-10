"use client";

import { useState } from "react";
import { Post } from "@/lib/api";
import { motion } from "framer-motion";
function BlogCard({
	title,
	date,
	content,
	slug,
}: {
	title: string;
	date: string;
	content: string;
	slug: string;
}) {
	return (
		<a href={`/blog/${slug}`} className="group block relative">
			<article className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-500 group-hover:bg-gray-700/50">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
				<h2 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
					{title}
				</h2>
				<time className="text-sm text-gray-400 mb-4 block">{date}</time>
				<div
					className="prose prose-lg prose-invert line-clamp-3 text-gray-300"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
				<div className="mt-6 flex items-center text-blue-400 font-medium group-hover:text-purple-400 transition-colors duration-300">
					Read Article
					<svg
						className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</div>
			</article>
		</a>
	);
}

function RecentPosts({
	posts,
}: {
	posts: Array<{ title: string; slug: string }>;
}) {
	return (
		<div className="relative">
			<h3 className="text-xl font-bold mb-6 text-transparent ">
				Recent Publications
			</h3>
			<div className="space-y-4">
				{posts.map((post, index) => (
					<motion.div
						key={post.slug}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						<a
							href={`/blog/${post.slug}`}
							className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
						>
							<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/20">
								<span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
									{index + 1}
								</span>
							</div>
							<div className="flex-grow">
								<h4 className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 line-clamp-2">
									{post.title}
								</h4>
							</div>
							<div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<svg
									className="w-5 h-5 text-blue-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</a>
					</motion.div>
				))}
			</div>
		</div>
	);
}

function TagCloud({
	tags,
	selectedTag,
	onTagClick,
}: {
	tags: string[];
	selectedTag: string | null;
	onTagClick: (tag: string) => void;
}) {
	return (
		<div>
			<h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Tags
			</h3>
			<div className="flex flex-wrap gap-2">
				{tags.map((tag) => (
					<button
						key={tag}
						onClick={() => onTagClick(tag)}
						className={`px-3 py-1 rounded-full text-sm transition-colors ${
							selectedTag === tag
								? "bg-blue-500 text-white"
								: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
						}`}
					>
						{tag}
					</button>
				))}
			</div>
		</div>
	);
}

export default function ClientBlogPage({
	initialPosts,
}: {
	initialPosts: Post[];
}) {
	const [selectedTag, setSelectedTag] = useState<string | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredPosts = initialPosts.filter((post) => {
		const matchesTag = !selectedTag || post.tags.includes(selectedTag);
		const matchesCategory =
			!selectedCategory || post.category === selectedCategory;
		return matchesTag && matchesCategory;
	});

	const recentPosts = initialPosts.slice(0, 5);
	const allTags = Array.from(
		new Set(initialPosts.flatMap((post) => post.tags)),
	);
	const allCategories = Array.from(
		new Set(initialPosts.map((post) => post.category)),
	);

	const handleTagClick = (tag: string) => {
		setSelectedTag(selectedTag === tag ? null : tag);
	};

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(selectedCategory === category ? null : category);
	};

	return (
		<div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-black text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Header with animated gradient text */}
				<div className="text-center mb-16 relative">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
					<h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
						Tech Insights
					</h1>
					<p className="text-lg text-gray-400">
						Exploring the frontiers of web development
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Category Navigation */}
					<nav className="lg:col-span-12 flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
						<button
							onClick={() => handleCategoryClick("")}
							className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
								!selectedCategory
									? "bg-blue-500/20 text-blue-400 before:absolute before:inset-0 before:rounded-full before:border before:border-blue-500/50 before:animate-ping-slow"
									: "text-gray-400 hover:text-white"
							}`}
						>
							All Posts
						</button>
						{allCategories.map((category) => (
							<button
								key={category}
								onClick={() => handleCategoryClick(category)}
								className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
									selectedCategory === category
										? "bg-blue-500/20 text-blue-400"
										: "text-gray-400 hover:text-white"
								}`}
							>
								{category}
							</button>
						))}
					</nav>

					{/* Main Content */}
					<div className="lg:col-span-8 space-y-8">
						{filteredPosts.map((post, index) => (
							<motion.div
								key={post.slug}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<BlogCard {...post} />
							</motion.div>
						))}
					</div>

					{/* Sidebar */}
					<aside className="lg:col-span-4 space-y-8">
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />
							<RecentPosts posts={recentPosts} />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
						>
							<TagCloud
								tags={allTags}
								selectedTag={selectedTag}
								onTagClick={handleTagClick}
							/>
						</motion.div>
					</aside>
				</div>
			</div>
		</div>
	);
}
