"use client";
import { motion } from "framer-motion";

type TimelineEntry = {
	index: string;
	period: string;
	company: string;
	role: string;
	description: string;
	stack: string[];
};

const timeline: TimelineEntry[] = [
	{
		index: "01",
		period: "2024—2026",
		company: "CRONIX LLC",
		role: "FRONTEND ENGINEER",
		description:
			"Building production-grade web applications with a focus on performance, scalability, and usability.",
		stack: ["REACT", "NEXT.JS", "TYPESCRIPT",],
	},
	{
		index: "02",
		period: "2022—2024",
		company: "TECHNOPERS",
		role: "FRONTEND DEVELOPER",
		description:
			"Developed responsive web interfaces and internal tools that improved workflow and user efficiency.",
		stack: ["REACT", "JAVASCRIPT", "UI SYSTEMS"],
	},
	{
		index: "03",
		period: "2021—2022",
		company: "FREELANCE",
		role: "FRONTEND DEVELOPER",
		description:
			"Worked with startups and businesses to build fast, responsive, and accessible web experiences.",
		stack: ["HTML / CSS", "JAVASCRIPT", "RESPONSIVE UI"],
	},
];

export function ExperienceTimeline() {
	return (
		<div className="relative bg-noise max-w-7xl mx-auto px-6 lg:px-12">
			{timeline.map((entry, i) => {
				const isFirst = i === 0;

				return (
					<motion.div
						key={entry.company}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
						className="relative"
					>
						{/* ── Row content ─────────────────────────────── */}
						<div
							className={`flex flex-col md:flex-row md:items-stretch py-8 md:py-7 lg:${
								isFirst ? "py-10" : "py-8"
							} gap-5 md:gap-0`}
						>
							{/* Col 1 — Period & Index */}
							<div className="flex items-center justify-between md:flex-col md:justify-center md:items-start md:pr-8 md:w-44 md:flex-shrink-0">
								<span
									className="font-display text-[#EDEDED] leading-none block"
									style={{
										fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
										letterSpacing: "-0.02em",
									}}
								>
									{entry.period}
								</span>
								<span className="md:hidden font-mono text-[0.65rem] tracking-[0.2em] text-[#555555]">
									{entry.index}
								</span>
							</div>

							{/* Vertical 1px divider (desktop only) */}
							<div className="hidden md:block w-px bg-[#222222] self-stretch flex-shrink-0" />

							{/* Col 2 — Company · Role · Description */}
							<div className="flex flex-col justify-center md:px-8 flex-1">
								<h3
									className="font-display text-[#EDEDED] uppercase leading-none mb-1.5"
									style={{
										fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
										letterSpacing: "-0.01em",
									}}
								>
									{entry.company}
								</h3>
								<p className="font-mono-ui text-[0.65rem] tracking-[0.2em] text-[#666666] uppercase mb-3">
									{entry.role}
								</p>
								<p className="text-[#8E8E8E] leading-relaxed text-[0.875rem] max-w-xl">
									{entry.description}
								</p>
							</div>

							{/* Vertical 1px divider (desktop only) */}
							<div className="hidden md:block w-px bg-[#222222] self-stretch flex-shrink-0" />

							{/* Col 3 — Tech stack */}
							<div className="flex flex-col justify-center md:pl-8 md:flex-shrink-0 md:w-44">
								{/* Mobile: horizontal tags */}
								<div className="flex flex-wrap gap-2 md:hidden">
									{entry.stack.map((tech) => (
										<span
											key={tech}
											className="font-mono-ui text-[0.68rem] tracking-[0.12em] text-[#D4D4D4] bg-[#121212] border border-[#262626] px-2.5 py-1 rounded"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Desktop: vertical list */}
								<ul className="hidden md:block space-y-1.5">
									{entry.stack.map((tech) => (
										<li
											key={tech}
											className="font-mono-ui text-[0.72rem] tracking-[0.12em] text-[#EDEDED]"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* ── Row separator ─────────────────── */}
						{i < timeline.length - 1 && (
							<div className="w-full h-px bg-[#222222]" />
						)}
					</motion.div>
				);
			})}
		</div>
	);
}
