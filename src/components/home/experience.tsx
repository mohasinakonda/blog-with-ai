"use client";
import { motion } from "framer-motion";
import { ExperienceTimeline } from "./experience-v2";

const metrics = [
	{
		value: "3+",
		label: "YEARS OF EXPERIENCE",
		description: "Building production-grade web applications.",
	},
	{
		value: "10+",
		label: "PROJECTS DELIVERED",
		description: "From data dashboards to full-scale web platforms.",
	},
	{
		value: "100%",
		label: "FOCUS",
		description: "On maintainable code, Core Web Vitals, and responsive UX.",
	},
];



export const Experience = () => {
	return (
		<section id="experience" className="border-b border-[#222222]">

			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="flex items-center justify-between h-16 border-b border-[#222222]">
					<span className="font-mono-ui text-[0.65rem] tracking-[0.2em] text-[#555555] uppercase">
						EXPERIENCE
					</span>
					<span className="font-mono-ui text-[0.65rem] text-[#333333]">→</span>
				</div>
			</div>
			<ExperienceTimeline />
			<div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-[#222222]">

				<div className="grid grid-cols-1 lg:grid-cols-3">

					{/* Left 3 columns — Metrics */}
					{metrics.map((metric, index) => (
						<motion.div
							key={metric.label}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
							className={`py-8 sm:py-12 px-2 sm:px-6 lg:px-8 border-b lg:border-b-0 lg:border-r last:border-b-0 lg:last:border-r-0 border-[#222222]`}
						>
							<div
								className="font-display text-[#EDEDED] leading-none mb-2"
								style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.02em" }}
							>
								{metric.value}
							</div>
							<div className="font-mono-ui text-[0.65rem] tracking-[0.2em] text-[#555555] mb-2 uppercase">
								{metric.label}
							</div>
							<p className="text-[#8E8E8E] text-[0.8125rem] leading-relaxed">
								{metric.description}
							</p>
						</motion.div>
					))}



				</div>

			</div>

		</section>
	);
};
