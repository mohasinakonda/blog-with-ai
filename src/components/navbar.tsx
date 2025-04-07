"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		// TODO: Implement actual search logic here
		// This is just a placeholder for demonstration
		const demoResults = [
			"Understanding React Hooks",
			"Next.js Fundamentals",
			"TypeScript Essentials",
		].filter((title) => title.toLowerCase().includes(query.toLowerCase()));
		setSearchResults(demoResults);
	};

	if (!mounted) {
		return (
			<nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-8">
							<Link
								href="/blog"
								className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
							>
								Blogs
							</Link>
							<Link
								href="/about-me"
								className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
							>
								About Me
							</Link>
							<Link
								href="/resume"
								className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
							>
								Resume
							</Link>
						</div>
						<div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
							<span className="sr-only">Loading theme</span>
							🌙
						</div>
					</div>
				</div>
			</nav>
		);
	}

	return (
		<nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-8">
						<Link
							href="/blog"
							className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
						>
							Blogs
						</Link>
						<Link
							href="/about-me"
							className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
						>
							About Me
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
								onClick={() => setIsSearchOpen(!isSearchOpen)}
								className="p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
								aria-label="Toggle search"
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
														key={index}
														href={`/blog/${result
															.toLowerCase()
															.replace(/ /g, "-")}`}
														className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
													>
														{result}
													</Link>
												))}
											</div>
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
							aria-label="Toggle theme"
						>
							{theme === "dark" ? "🌞" : "🌙"}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
