"use client";
import { motion } from "framer-motion";
import { SectionTittle } from "../shared/title";
import { Post } from "@/lib/api";
import { getReadTime } from "@/utils/get-readtime";
import Link from "next/link";

type Props = {
	featuredPost: Post[];
};
export const FeaturedBlog = ({ featuredPost }: Props) => {
	return (
		<section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					{/* <h2 className="text-4xl font-bold mb-4">Featured Blog Posts</h2> */}
					<SectionTittle>Featured Blog Posts</SectionTittle>
					<p className="text-xl text-gray-300">Insights & Technical Articles</p>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredPost.map((post, index) => {
						return (
							<motion.div
								key={post.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								viewport={{ once: true }}
								className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
							>
								<div className="aspect-video bg-gray-700 relative overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
									<div className="absolute bottom-4 left-4">
										<span className="px-3 py-1 bg-blue-500 rounded-full text-sm font-medium">
											{post.category}
										</span>
									</div>
								</div>
								<div className="p-6">
									<div className="flex items-center text-sm text-gray-400 mb-4">
										<span>{post.date}</span>
										<span className="mx-2">•</span>
										<span>{getReadTime(post.content)} mins to read</span>
									</div>
									<h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
										{post.title}
									</h3>
									<p className="text-gray-300 mb-4 line-clamp-2">
										{post.excerpt}
									</p>
									<Link
										href={`/blog/${post.slug}`}
										className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
									>
										Read More
										<svg
											className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
									</Link>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
