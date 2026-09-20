"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Post } from "@/lib/api";

type Props = {
	posts: Post[];
};

const navLinks = [
	{ label: "WORK", href: "/projects" },
	// { label: "EXPERIENCE", href: "#experience" },
	{ label: "WRITING", href: "/blog" },
	{ label: "ABOUT", href: "/resume" },
];

export function Navbar({ posts }: Props) {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<Post[]>([]);
	const [scrolled, setScrolled] = useState(false);
	const divRef = useRef<HTMLDivElement | null>(null);
	const searchInputRef = useRef<HTMLInputElement | null>(null);

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
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				divRef.current &&
				!divRef.current.contains(event.target as Node)
			) {
				setIsSearchOpen(false);
				setSearchQuery("");
				setSearchResults([]);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	useEffect(() => {
		if (isSearchOpen && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [isSearchOpen]);

	return (
		<motion.header
			initial={{ y: -60, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
			className={`sticky top-0 z-50 border-b border-[#222222] transition-colors duration-300 ${scrolled ? "bg-[#080808]" : "bg-[#080808]/95"
				}`}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="flex items-center justify-between h-14">

					{/* ── Left: Brand Mark ─────────────────────────────── */}
					<Link href="/" className="flex items-center gap-3 group">
						<span
							className="font-mono-ui text-xs tracking-widest text-[#EDEDED] border border-[#333333] px-2 py-1 group-hover:border-[#EDEDED] transition-colors duration-150"
							style={{ letterSpacing: "0.15em" }}
						>
							HA
						</span>
						<span className="font-mono-ui text-xs tracking-widest text-[#8E8E8E] group-hover:text-[#EDEDED] transition-colors duration-150 hidden sm:block">
							HAZRAT AKONDA
						</span>
					</Link>

					{/* ── Center: Nav Links (Desktop) ───────────────────── */}
					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="font-mono-ui btn-underline text-[0.7rem] tracking-widest text-[#555555] hover:text-[#EDEDED] transition-colors duration-150"
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* ── Right: CTA + Search ───────────────────────────── */}
					<div className="flex items-center gap-4">
						{/* Search */}
						<div className="relative" ref={divRef}>
							<button
								onClick={() => setIsSearchOpen((v) => !v)}
								aria-label="Search posts"
								className="font-mono-ui text-[2rem] tracking-widest text-[#555555] hover:text-[#EDEDED] transition-colors shrink-0 duration-150 p-1"
							>
								{isSearchOpen ? "✕" : "⌕"}
							</button>

							<AnimatePresence>
								{isSearchOpen && (
									<motion.div
										initial={{ opacity: 0, y: 8 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 8 }}
										transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
										className="absolute right-0 top-0 mt-2 w-72 bg-[#101010] border border-[#222222]"
									>
										<div className="p-3 border-b border-[#222222]">
											<input
												ref={searchInputRef}
												type="text"
												value={searchQuery}
												onChange={(e) => handleSearch(e.target.value)}
												placeholder="Search posts..."
												className="w-full bg-transparent font-mono-ui text-xs text-[#EDEDED] placeholder-[#555555] outline-none tracking-wider"
											/>
										</div>
										{searchResults.length > 0 && (
											<div className="max-h-64 overflow-y-auto">
												{searchResults.map((result) => (
													<Link
														key={result.slug}
														href={`/blog/${result.slug}`}
														onClick={() => {
															setSearchQuery("");
															setIsSearchOpen(false);
															setSearchResults([]);
														}}
														className="block px-4 py-3 border-b border-[#1a1a1a] hover:bg-[#171717] transition-colors duration-150"
													>
														<div className="font-mono-ui text-[0.7rem] tracking-wider text-[#EDEDED]">
															{result.title}
														</div>
														{result.tags && (
															<div className="font-mono-ui text-[0.65rem] text-[#555555] mt-1 tracking-widest">
																{result.tags.join(" · ")}
															</div>
														)}
													</Link>
												))}
											</div>
										)}
										{searchQuery && searchResults.length === 0 && (
											<div className="px-4 py-3 font-mono-ui text-[0.7rem] text-[#555555] tracking-wider">
												No results found.
											</div>
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						{/* CTA */}
						<Link
							href="mailto:hazrataliakonda@gmail.com"
							className="hidden btn-underline sm:flex items-center gap-2 font-mono-ui text-[0.7rem] tracking-widest text-[#EDEDED] hover:text-[#8E8E8E] transition-colors duration-150 group"
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
							</span>
							LET&apos;S TALK
							<span className="inline-block group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-150">
								↗
							</span>
						</Link>
					</div>
				</div>
			</div>
		</motion.header>
	);
}
