"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BugEaterText } from "./title-masking";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
	initial: { opacity: 0, y: 14 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export const Hero = () => {
	return (
		<section
			id="hero"
			className="border-b border-[#1F1F1F] bg-noise relative min-h-[calc(100vh-70px)] flex items-center"
		>
			<div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-0 relative">
				{/* Main 2-column technical layout */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

					{/* Left Column: Primary Identity (7 Cols) */}
					<div className="lg:col-span-7 lg:border-r border-[#1F1F1F] lg:pr-14 flex flex-col justify-center pb-12 lg:pb-0">

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
							className="border-t border-[#1F1F1F] mb-6 w-full"
						/>

						{/* Narrative Pitch */}
						<motion.p
							{...fadeUp(0.2)}
							className="text-[#8E8E8E] text-[0.95rem] sm:text-[1rem] leading-relaxed mb-8 max-w-lg"
						>
							I build fast, scalable, and accessible web applications with{" "}
							<span className="text-[#EDEDED] font-medium">React</span>,{" "}
							<span className="text-[#EDEDED] font-medium">Next.js</span>, and{" "}
							<span className="text-[#EDEDED] font-medium">TypeScript</span>.
						</motion.p>

						{/* CTA Button */}
						<motion.div {...fadeUp(0.26)}>
							<Link
								href="/projects"
								className="btn-underline inline-flex  items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.2em] uppercase text-[#EDEDED] hover:text-[#A3A3A3] transition-colors duration-150 group"
							>
								EXPLORE MY WORK
								<span className="inline-block transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
									↗
								</span>
							</Link>
						</motion.div>
					</div>

					{/* Right Column: Context & Metadata (5 Cols) */}
					<div className="lg:col-span-5 lg:pl-14 pt-10 lg:pt-0 flex flex-col justify-between border-t lg:border-t-0 border-[#1F1F1F]">

						{/* Value Statement */}
						<motion.p
							{...fadeUp(0.12)}
							className="text-[#D4D4D4] text-[0.95rem] leading-relaxed font-normal mb-8 lg:mb-10 max-w-sm"
						>
							I care about clean architecture, exceptional developer experience,
							and engineering production systems that solve real problems.
						</motion.p>

						{/* Structured Attribute Grid */}
						<motion.div
							{...fadeUp(0.18)}
							className="space-y-4 mb-8 lg:mb-10"
						>
							{[
								{ key: "BASED IN", value: "Bangladesh" },
								{ key: "AVAILABLE FOR", value: "Frontend Opportunities" },
								{
									key: "CURRENTLY",
									value: "Building products and writing about frontend engineering.",
								},
							].map(({ key, value }) => (
								<div key={key} className="border-b border-[#1F1F1F] pb-3.5">
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


			</div>
		</section>
	);
};