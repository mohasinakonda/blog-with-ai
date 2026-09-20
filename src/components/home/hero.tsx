"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 14 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export const Hero = () => {
	return (
		<section
			id="hero"
			className="border-b border-[#353531] bg-noise relative min-h-[calc(100vh-70px)] flex items-center"
		>
			<div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-16 relative">
				{/* Main 2-column technical layout */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

					{/* Left Column: Primary Identity (7 Cols) */}
					<div className="lg:col-span-7 lg:border-r border-[#353531] lg:pr-14 flex flex-col justify-center pb-12 lg:pb-0">

						{/* Monospace Greeting */}

						<motion.p
							{...fadeUp(0.04)}
							className="font-mono text-[0.72rem] tracking-[0.24em] text-[#737373] mb-4 uppercase"
						>
							Hi, I&apos;m Hazrat Akonda
						</motion.p>

						{/* Display Headline */}
						<motion.h1
							{...fadeUp(0.08)}
							className="font-display font-black text-[#EDEDED] uppercase tracking-[-0.03em] select-none mb-6 tracking-1"
							style={{
								fontSize: "clamp(3.75rem, 10.5vw, 8.5rem)",
								lineHeight: "0.82",
							}}
						>
							FRONTEND
							<br />
							ENGINEER
						</motion.h1>

						{/* 1px Solid Divider Line */}
						<motion.div
							initial={{ scaleX: 0, originX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
							className="border-t border-[#353531] mb-6 w-full"
						/>

						{/* Narrative Pitch */}
						<motion.p
							{...fadeUp(0.2)}
							className="text-[#8E8E8E] text-[0.95rem] sm:text-[1rem] leading-relaxed  max-w-lg"
						>

							I have 3+ years of production experience, work on complex products, think about architecture and reusable systems, and care about performance/accessibility
						</motion.p>

						{/* CTA Button */}

					</div>

					{/* Right Column: Context & Metadata (5 Cols) */}
					<div className="lg:col-span-5 lg:pl-14 pt-10 lg:pt-0 flex flex-col gap-10 border-t lg:border-t-0 border-[#353531]">

						{/* Value Statement */}
						<motion.p
							{...fadeUp(0.12)}
							className="text-[#D4D4D4] text-[0.95rem] leading-relaxed font-normal max-w-sm"
						>
							I engineer scalable frontend systems that balance clean architecture, reusable design, performance, accessibility, and real-world product needs.
						</motion.p>

						{/* Structured Attribute Grid */}
						<motion.div
							{...fadeUp(0.18)}
							className="space-y-4"
						>
							{[
								{ key: "EXPERIENCE", value: "3.5+ Years in Frontend Development" },
								{
									key: "SPECIALIZATION",
									value: "React, Next.js, TypeScript, Frontend Architecture",
								},
								{
									key: "FOCUS",
									value: "Scalable Systems, Performance, Accessibility",
								},
							].map(({ key, value }) => (
								<div key={key} className="border-b border-[#353531] pb-3.5">
									<p className="font-mono text-[0.68rem] tracking-[0.2em] text-[#525252] mb-1 uppercase">
										{key}
									</p>
									<p className="text-[#EDEDED] text-[0.92rem] font-medium leading-snug">
										{value}
									</p>
								</div>
							))}
						</motion.div>

						{/* Social Links Row */}
						<motion.div {...fadeUp(0.24)} className="flex items-center gap-5">
							<Link
								href="https://github.com/mohasinakonda"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="text-[#525252] hover:text-[#EDEDED] transition-colors duration-150"
							>
								<FaGithub size={18} />
							</Link>
							<Link
								href="https://www.linkedin.com/in/hazrat-ali-akonda/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="text-[#525252] hover:text-[#EDEDED] transition-colors duration-150"
							>
								<FaLinkedin size={18} />
							</Link>
							<Link
								href="https://x.com/mohasinakonda1"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="X"
								className="text-[#525252] hover:text-[#EDEDED] transition-colors duration-150"
							>
								<FaXTwitter size={18} />
							</Link>
							{/* <Link
								href="mailto:mohasinakonda@gmail.com"
								aria-label="Email"
								className="text-[#525252] hover:text-[#EDEDED] transition-colors duration-150"
							>
								<FiMail size={18} />
							</Link> */}
						</motion.div>
					</div>
				</div>

				{/* Core Competencies / Technical Focus Grid */}
				<motion.div
					{...fadeUp(0.3)}
					className="mt-10 pt-10 lg:pt-14 border-t border-[#353531]"
				>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
						{CORE_PILLARS.map((item, index) => (
							<div
								key={item.label}
								className={`group shadow-lg relative flex flex-col items-center justify-center p-6 sm:p-7 md:p-8 rounded-2xl border border-[#222222]  hover:border-[#383838] hover:bg-[#121212] transition-all duration-300 ${index === 4 ? "col-span-2 sm:col-span-1" : ""
									}`}
							>
								<div className="text-[#E5E5E5] group-hover:text-white group-hover:scale-105 transition-all duration-300 mb-5 sm:mb-6">
									{item.icon}
								</div>
								<span className="font-mono text-[0.65rem] sm:text-[0.68rem] md:text-[0.72rem] tracking-[0.2em] text-[#8E8E8E] group-hover:text-[#EDEDED] transition-colors duration-300 text-center uppercase font-medium whitespace-nowrap">
									{item.label}
								</span>
							</div>
						))}
					</div>
				</motion.div>

			</div>
		</section>
	);
};

const CORE_PILLARS = [
	{
		label: "ARCHITECTURE",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="w-8 h-8 md:w-9 md:h-9"
			>
				<polygon points="12 2 2 7 12 12 22 7 12 2" />
				<polyline points="2 12 12 17 22 12" />
				<polyline points="2 17 12 22 22 17" />
			</svg>
		),
	},
	{
		label: "DESIGN SYSTEMS",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="w-8 h-8 md:w-9 md:h-9"
			>
				<rect x="3" y="3" width="7" height="7" rx="1.5" />
				<rect x="14" y="3" width="7" height="7" rx="1.5" />
				<rect x="14" y="14" width="7" height="7" rx="1.5" />
				<rect x="3" y="14" width="7" height="7" rx="1.5" />
			</svg>
		),
	},
	{
		label: "API INTEGRATION",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="w-8 h-8 md:w-9 md:h-9"
			>
				<path d="M6 9 2.5 12 6 15" />
				<path d="M18 9 21.5 12 18 15" />
				<g transform="rotate(-18 12 12)">
					<line x1="10.2" y1="5.5" x2="10.2" y2="8" />
					<line x1="13.8" y1="5.5" x2="13.8" y2="8" />
					<path d="M8.5 8h7v3a3.5 3.5 0 0 1-7 0v-3z" />
					<line x1="12" y1="14.5" x2="12" y2="19.5" />
				</g>
			</svg>
		),
	},
	{
		label: "PERFORMANCE",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="w-8 h-8 md:w-9 md:h-9"
			>
				<path d="M4.93 19.07A10 10 0 1 1 19.07 19.07" />
				<line x1="12" y1="12" x2="16.5" y2="7.5" />
				<circle cx="12" cy="12" r="1.5" />
			</svg>
		),
	},
	{
		label: "ACCESSIBILITY",
		icon: (
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="w-8 h-8 md:w-9 md:h-9"
			>
				<circle cx="12" cy="12" r="10" />
				<circle cx="12" cy="7.2" r="1.3" />
				<path d="M6 10.5c1.8-.7 3.8-1 6-1s4.2.3 6 1" />
				<path d="M12 10.5v3.8" />
				<path d="m9.3 18.5 2.7-4.2 2.7 4.2" />
			</svg>
		),
	},
];