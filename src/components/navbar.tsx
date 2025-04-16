"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaSearch } from "react-icons/fa";
import { Post } from "@/lib/api";

type Props = {
	posts: Post[];
};

export function Navbar({ posts }: Props) {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<Post[]>([]);
	// const [isDark, setIsDark] = useState(false);
	const divRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		const results = posts.filter(
			(post) =>
				post.title.toLowerCase().includes(query.toLowerCase()) ||
				post.tags?.some((tag) =>
					tag.toLowerCase().includes(query.toLowerCase()),
				),
		);
		setSearchResults(results);
	};

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
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);
	const links = ["Blog", "Resume", "Projects"];
	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 sticky top-0 z-50"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-8">
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Link
								href="/"
								className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
							>
								<FaHome className="w-6 h-6" />
							</Link>
						</motion.div>
						{links.map((item) => (
							<motion.div
								key={item}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									href={`/${item.toLowerCase()}`}
									className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
								>
									{item}
								</Link>
							</motion.div>
						))}
					</div>

					<div className="flex items-center space-x-6">
						{/* <motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => setIsDark(!isDark)}
							className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
						>
							{isDark ? (
								<FaSun className="w-5 h-5" />
							) : (
								<FaMoon className="w-5 h-5" />
							)}
						</motion.button> */}

						<div className="relative">
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={() => setIsSearchOpen(true)}
								className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
								aria-label="Toggle search"
								ref={buttonRef}
							>
								<FaSearch className="w-5 h-5" />
							</motion.button>

							<AnimatePresence>
								{isSearchOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										transition={{ duration: 0.2 }}
										className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
										ref={divRef}
									>
										<div className="p-3">
											<input
												type="text"
												value={searchQuery}
												onChange={(e) => handleSearch(e.target.value)}
												placeholder="Search posts..."
												className="w-full px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
											/>
										</div>
										{searchResults.length > 0 && (
											<div className="border-t border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto">
												{searchResults.map((result) => (
													<Link
														key={result.slug}
														href={`/blog/${result.slug}`}
														onClick={() => {
															setSearchQuery("");
															setIsSearchOpen(false);
															setSearchResults([]);
														}}
														className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
													>
														<div className="font-medium">{result.title}</div>
														{result.tags && (
															<div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
																{result.tags.join(" • ")}
															</div>
														)}
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
		</motion.nav>
	);
}
