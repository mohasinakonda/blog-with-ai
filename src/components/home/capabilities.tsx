"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const capabilities = [
	{
		index: "01",
		title: "PRODUCT INTERFACES",
		description:
			"Fluid component architecture, design system engineering, and micro-interactions. Building intuitive, fast and responsive user interfaces with React & Next.js.",

	},
	{
		index: "02",
		title: "DATA & WORKFLOWS",
		description:
			"Server-state caching, optimistic mutations, and real-time streaming pipelines. Handling complex data, server state, caching and real-time updates.",

	},
	{
		index: "03",
		title: "PERFORMANCE",
		description:
			"Core Web Vitals optimization, bundle tree-shaking, and SSR/SSG caching strategies. Optimizing rendering, reducing bundle size and improving Core Web Vitals.",

	},
	{
		index: "04",
		title: "ACCESSIBILITY",
		description:
			"Full keyboard navigation ergonomics, ARIA roles, and WCAG AA compliance. Building inclusive interfaces that work for everyone, everywhere.",

	},
];

export function Capabilities() {
	return (
		<section id="approach" className="border-b border-[#222222]">
			{/* Section Header */}
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between border-b border-[#222222] ">
				<span className="font-mono-ui text-[0.65rem] tracking-[0.25em] text-[#555555] uppercase">
					WHAT I BUILD
				</span>
				<Link
					href="#approach"
					className="font-mono-ui text-[0.65rem] tracking-widest text-[#555555] hover:text-[#EDEDED] transition-colors duration-150 flex items-center gap-1 group"
				>
					APPROACH
					<span className="inline-block group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-150">→</span>
				</Link>
			</div>

			{/* 4-Column Grid */}
			<div className="max-w-7xl mx-auto px-6 lg:px-12 bg-noise">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#222222]">
					{capabilities.map((cap, index) => (
						<motion.div
							key={cap.index}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
							className={`py-10 ${index < 3 ? "lg:border-r border-[#222222]" : ""
								} ${index % 2 === 0 ? "sm:border-r sm:border-[#222222] lg:border-r-0" : ""} ${index < 2 ? "border-b sm:border-b-0 border-[#222222]" : ""
								} px-6 lg:px-2 flex flex-col gap-5`}
							style={{
								borderRight: index < 3 ? "1px solid #222222" : undefined,
							}}
						>
							{/* Index + Title */}
							<div>
								<p className="font-mono-ui text-[0.65rem] tracking-[0.2em] text-[#555555] mb-2 uppercase">
									{cap.index}
								</p>
								<h3
									className="font-display text-[#EDEDED] uppercase leading-tight"
									style={{ fontSize: "1.25rem", letterSpacing: "0.01em" }}
								>
									{cap.title}
								</h3>
							</div>

							{/* Description */}
							<p className="text-[#8E8E8E] text-[0.8125rem] leading-relaxed flex-1">
								{cap.description}
							</p>


						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

/* ── Visual Micro-elements ───────────────────────────────────────────── */
