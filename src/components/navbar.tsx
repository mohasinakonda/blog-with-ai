"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { Post } from "@/lib/api";

type Props = {
	posts: Post[];
};
export function Navbar({ posts }: Props) {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<Post[]>([]);
	const divRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		// TODO: Implement actual search logic here
		// This is just a placeholder for demonstration

		const results = posts.filter((post) =>
			post.title.toLowerCase().includes(query.toLowerCase()),
		);

		setSearchResults(results);
	};

	// close the search bar when user clicks outside of it
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node) &&
				divRef.current &&
				!divRef.current.contains(event.target as Node)
			) {
				setIsSearchOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
	return (
		<nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-8">
						<Link
							href="/"
							className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
						>
							<FaHome />
						</Link>
						<Link
							href="/blog"
							className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
						>
							Blogs
						</Link>

						<Link
							href="/resume"
							className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
						>
							Resume
						</Link>
					</div>
					<div className="flex items-center space-x-4">
						<div className="relative">
							<button
								onClick={() => setIsSearchOpen(true)}
								className="p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
								aria-label="Toggle search"
								ref={buttonRef}
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
							<AnimatePresence>
								{isSearchOpen && (
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.95 }}
										transition={{ duration: 0.2 }}
										className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 z-[9999]"
										ref={divRef}
									>
										<div className="p-2">
											<input
												type="text"
												value={searchQuery}
												onChange={(e) => handleSearch(e.target.value)}
												placeholder="Search blogs..."
												className="w-full px-4 py-2 text-sm text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										</div>
										{searchResults.length > 0 && (
											<div className="border-t border-gray-200 dark:border-gray-700">
												{searchResults.map((result, index) => (
													<Link
														onClick={() => {
															setSearchQuery("");
															setIsSearchOpen(false);
															setSearchResults([]);
														}}
														key={index}
														href={`/blog/${String(result.slug)}`}
														className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														{result.title}
													</Link>
												))}
											</div>
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
