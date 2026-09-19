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
		stack: ["REACT", "NEXT.JS", "TYPESCRIPT"],
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
		<div className="relative bg-noise px-12">
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
						<div className={`flex items-stretch ${isFirst ? "py-10" : "py-7"}`}>

							{/* Col 1 — Date + dim index */}
							<div className={`flex-shrink-0 flex flex-col justify-center pr-8  w-44}`}>
								<span
									className="font-display text-[#EDEDED] leading-none block"
									style={{
										fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
										letterSpacing: "-0.02em",
									}}
								>
									{entry.period}
								</span>

							</div>

							{/* Vertical 1px divider */}
							<div className="w-px bg-[#222222] self-stretch flex-shrink-0" />

							{/* Col 2 — Company · Role · Description */}
							<div className={`flex flex-col justify-center px-8 flex-1`}>
								<h3
									className="font-display text-[#EDEDED] uppercase leading-none mb-2"
									style={{
										fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
										letterSpacing: "-0.01em",
									}}
								>
									{entry.company}
								</h3>
								<p className="font-mono-ui text-[0.63rem] tracking-[0.2em] text-[#555555] uppercase mb-3">
									{entry.role}
								</p>
								<p className={`text-[#8E8E8E] leading-relaxed max-w-sm text-[0.825rem]`}>
									{entry.description}
								</p>
							</div>

							{/* Vertical 1px divider */}
							<div className="w-px bg-[#222222] self-stretch flex-shrink-0" />

							{/* Col 3 — Tech stack + arrow */}
							<div className={`flex flex-col justify-between pl-8 flex-shrink-0 w-44`}>
								<ul className="space-y-1.5 mt-1">
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

						{/* ── Half-width row separator ─────────────────── */}
						{i < timeline.length - 1 && (
							<div className="w-full h-px bg-[#222222]" />
						)}
					</motion.div>
				);
			})}


		</div>
	);
}
