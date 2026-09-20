"use client";
import { motion } from "framer-motion";
import { Post } from "@/lib/api";
import { getReadTime } from "@/utils/get-readtime";
import Link from "next/link";

type Props = {
	featuredPost: Post[];
};

export const FeaturedBlog = ({ featuredPost }: Props) => {
	// If fewer posts than 4, we show what we have
	const displayPosts = featuredPost.slice(0, 4);

	return (
		<section id="writing" className="border-b border-[#222222]">
			{/* Section Header */}
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between border-b border-[#222222]">
				<span className="font-mono-ui text-[0.65rem] tracking-[0.25em] text-[#555555] uppercase">
					RECENT WRITING
				</span>
				<Link
					href="/blog"
					className="font-mono-ui text-[0.65rem] tracking-widest text-[#555555] hover:text-[#EDEDED] transition-colors duration-150 flex items-center gap-1 group"
				>
					VIEW ALL ARTICLES
					<span className="inline-block group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-150">→</span>
				</Link>
			</div>

			{/* 4-Column Card Grid */}
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
					{displayPosts.map((post, index) => (
						<motion.article
							key={post.slug}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
							className={`p-6 border-b border-[#222222] hover:bg-[#101010] transition-colors duration-150 flex flex-col group ${
								index < 3 ? "lg:border-r border-r-[#222222]" : ""
							}`}
						>
							{/* Index */}
							<p className="font-mono-ui text-[0.65rem] tracking-[0.2em] text-[#555555] mb-4 uppercase">
								0{index + 1}
							</p>

							{/* Title */}
							<h3 className="text-[#EDEDED] text-[0.9375rem] font-semibold leading-snug mb-4 flex-1 group-hover:text-[#8E8E8E] transition-colors duration-150">
								<Link href={`/blog/${post.slug}`}>{post.title}</Link>
							</h3>

							{/* Footer */}
							<div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1a1a1a]">
								<div className="flex items-center gap-2 flex-wrap">
									{post.category && (
										<span className="font-mono-ui text-[0.6rem] tracking-[0.15em] text-[#555555] uppercase">
											{post.category}
										</span>
									)}
									<span className="font-mono-ui text-[0.6rem] text-[#333333]">+</span>
									<span className="font-mono-ui text-[0.6rem] tracking-widest text-[#555555]">
										{getReadTime(post.content)} MIN READ
									</span>
								</div>
								<Link
									href={`/blog/${post.slug}`}
									className="font-mono-ui text-[0.75rem] text-[#555555] hover:text-[#EDEDED] transition-colors duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] inline-block transition-transform"
									aria-label={`Read ${post.title}`}
								>
									↗
								</Link>
							</div>
						</motion.article>
					))}

					{/* Fill empty slots if less than 4 posts */}
					{displayPosts.length < 4 &&
						Array.from({ length: 4 - displayPosts.length }).map((_, i) => (
							<div
								key={`empty-${i}`}
								className={`p-6 border-b border-[#222222] ${
									displayPosts.length + i < 3 ? "lg:border-r border-r-[#222222]" : ""
								}`}
							/>
						))}
				</div>
			</div>
		</section>
	);
};
