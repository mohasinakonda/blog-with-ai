"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BugEaterText } from "./title-masking";

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
							<a
								href="https://github.com/mohasinakonda"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="text-[#525252] hover:text-[#EDEDED] transition-colors duration-150"
							>
								<GithubIcon />
							</a>
							<a
								href="https://www.linkedin.com/in/hazrat-ali-akonda/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="text-[#525252] hover:text-[#EDEDED] transition-colors duration-150"
							>
								<LinkedInIcon />
							</a>
							<a
								href="https://x.com/mohasinakonda1"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="X"
								className="text-[#525252] hover:text-[#EDEDED] transition-colors duration-150"
							>
								<XIcon />
							</a>
							<a
								href="mailto:mohasinakonda@gmail.com"
								aria-label="Email"
								className="text-[#525252] hover:text-[#EDEDED] transition-colors duration-150"
							>
								<MailIcon />
							</a>
						</motion.div>
					</div>
				</div>


			</div>
		</section>
	);
};

/* Flat Monochrome SVGs */
function GithubIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
		</svg>
	);
}

function LinkedInIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
			<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
		</svg>
	);
}

function MailIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
			<rect x="2" y="4" width="20" height="16" rx="0" />
			<path d="M2 4l10 9 10-9" />
		</svg>
	);
}

const XIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 1024 1024"><path fillRule="evenodd" d="M823.111 912H200.89C151.8 912 112 872.2 112 823.111V200.89C112 151.8 151.8 112 200.889 112H823.11C872.2 112 912 151.8 912 200.889V823.11C912 872.2 872.2 912 823.111 912M286 291L457.772805 536.277658L286 735H331.296885L477.865892 564.968959L596.942 735H740L555.891306 472.107691L715 289H670.330417L535.793156 443.40916L429.058 291zm69.053 37.65 258.935 368.699h56.96L412.013 328.65h-56.96z" />
		</svg>
	);
}