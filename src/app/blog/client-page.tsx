"use client";

import { useState } from "react";
import { Post } from "@/lib/api";

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
		<a href={`/blog/${slug}`} className="block h-full">
			<div className="h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
				<h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
					{title}
				</h2>
				<time className="text-sm text-gray-600 dark:text-gray-400 mb-4 block">
					{date}
				</time>
				<div
					className="prose prose-sm dark:prose-invert line-clamp-3"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
		</a>
	);
}

function RecentPosts({
	posts,
}: {
	posts: Array<{ title: string; slug: string }>;
}) {
	return (
		<div className="mb-8">
			<h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
				Recent Posts
			</h3>
			<ul className="space-y-2">
				{posts.map((post) => (
					<li key={post.slug}>
						<a
							href={`/blog/${post.slug}`}
							className="text-blue-600 dark:text-blue-400 hover:underline"
						>
							{post.title}
						</a>
					</li>
				))}
			</ul>
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

export default function ClientBlogPage({ initialPosts }: { initialPosts: Post[] }) {
	const [selectedTag, setSelectedTag] = useState<string | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredPosts = initialPosts.filter((post) => {
		const matchesTag = !selectedTag || post.tags.includes(selectedTag);
		const matchesCategory =
			!selectedCategory || post.category === selectedCategory;
		return matchesTag && matchesCategory;
	});

	const recentPosts = initialPosts.slice(0, 5);
	const allTags = Array.from(new Set(initialPosts.flatMap((post) => post.tags)));
	const allCategories = Array.from(
		new Set(initialPosts.map((post) => post.category))
	);

	const handleTagClick = (tag: string) => {
		setSelectedTag(selectedTag === tag ? null : tag);
	};

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(selectedCategory === category ? null : category);
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
				<div className="lg:col-span-3">
					<div>
						<div className="mb-6">
							<select
								value={selectedCategory || ""}
								onChange={(e) =>
									handleCategoryClick(e.target.value || "")
								}
								className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
							>
								<option value="">All Categories</option>
								{allCategories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredPosts.map((post) => (
								<BlogCard
									key={post.slug}
									title={post.title}
									date={post.date}
									content={post.content}
									slug={post.slug}
								/>
							))}
						</div>
					</div>
					<aside className="space-y-8">
						<RecentPosts posts={recentPosts} />
						<TagCloud
							tags={allTags}
							selectedTag={selectedTag}
							onTagClick={handleTagClick}
						/>
					</aside>
				</div>
			</div>
		</div>
	);
}