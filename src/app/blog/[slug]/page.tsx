import { notFound } from "next/navigation";
import Link from "next/link";

import { getAllPosts, getPostBySlug, Post } from "@/lib/api";
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/styles/github-dark.css";
import { Metadata } from "next";
import { SlCalender } from "react-icons/sl";

//dynamic meta data
type Props = {
	params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	return {
		title: `${post?.title}`,
		description: `${post?.excerpt}`,
		keywords: post?.keywords,
		authors: [{ name: "Hazrat akonda" }],
	};
};

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function BlogPost({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	// First, add this function at the top of the file after imports
	function getNextAndPrevPosts(currentSlug: string) {
		const posts = getAllPosts();
		const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

		return {
			prev: currentIndex > 0 ? posts[currentIndex - 1] : null,
			next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
		};
	}

	// In your BlogPost component, add this before the return statement
	const { prev, next } = getNextAndPrevPosts(slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="relative h-full	 bg-gradient-to-b from-gray-900 to-black text-white py-16">
			<div className="fixed top-16 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
			{/* Next and prev link */}
			<NextPost next={next} />
			<PrevPost prev={prev} />

			<article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10"></div>
				<div className="space-y-8 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
					<header className="space-y-4">
						<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
							{post.title}
						</h1>
						<div className="flex md:flex-row flex-col items-center gap-4 text-gray-400">
							<time className="text-sm whitespace-nowrap flex gap-1 items-center">
								<SlCalender />
								{post.date}
							</time>
							{post.tags && (
								<div className="flex gap-2 overflow-auto w-full">
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs whitespace-nowrap px-2 py-1 rounded-full bg-gray-800/50 border border-gray-700"
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</div>
					</header>
					<div
						className="prose prose-lg prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-code:text-blue-300 prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-700/50 max-w-none"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
					<div className="mt-8 flex justify-end">
						<Link
							href={`https://www.linkedin.com/sharing/share-offsite/?url=https://hazrat.vercel.app/blog/${post.slug}&title=${post.title}`}
							target="_blank"
							className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] hover:bg-[#006399] text-white rounded-lg transition-colors duration-300"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
							Share on LinkedIn
						</Link>
					</div>
				</div>
			</article>
		</div>
	);
}

type NextProps = {
	next: Post | null;
};
const NextPost = ({ next }: NextProps) => {
	return (
		<div className="fixed inset-y-0 right-0 flex items-center z-50">
			{next && (
				<Link
					href={`/blog/${next.slug}`}
					title={next.title}
					className="group bg-gray-800/20 hover:bg-gray-800/40 backdrop-blur-sm p-3 rounded-l-lg border-l border-y border-gray-700/50 transition-all duration-300"
				>
					<div className="flex items-center gap-2">
						<span className="w-0 group-hover:w-32 overflow-hidden transition-all duration-300 text-gray-400 text-sm">
							<span className="truncate">{next.title}</span>
						</span>
						<svg
							className="w-6 h-6 text-gray-400 group-hover:text-blue-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</Link>
			)}
		</div>
	);
};

type PrevProps = {
	prev: Post | null;
};
const PrevPost = ({ prev }: PrevProps) => {
	return (
		<div className="fixed inset-y-0 left-0 flex items-center z-50">
			{prev && (
				<Link
					href={`/blog/${prev.slug}`}
					title={prev.title}
					className="group bg-gray-800/20 hover:bg-gray-800/40 backdrop-blur-sm p-3 rounded-r-lg border-r border-y border-gray-700/50 transition-all duration-300"
				>
					<div className="flex items-center gap-2">
						<svg
							className="w-6 h-6 text-gray-400 group-hover:text-blue-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						<span className="w-0 group-hover:w-32 overflow-hidden transition-all duration-300 text-gray-400 text-sm">
							<span className="truncate">{prev.title}</span>
						</span>
					</div>
				</Link>
			)}
		</div>
	);
};
