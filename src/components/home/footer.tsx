"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const contactLinks = [
	// {
	// 	id: "email",
	// 	label: "mohasinakonda@gmail.com",
	// 	href: "mailto:mohasinakonda@gmail.com",
	// 	copyable: true,
	// 	copyValue: "mohasinakonda@gmail.com",
	// 	icon: <IconMail />,
	// },
	{
		id: "github",
		label: "github.com/mohasinakonda",
		href: "https://github.com/mohasinakonda",
		icon: <FaGithub size={14} />,
	},
	{
		id: "linkedin",
		label: "linkedin.com/in/hazrat-ali-akonda",
		href: "https://www.linkedin.com/in/hazrat-ali-akonda/",
		icon: <FaLinkedin size={14} />,
	},
	{
		id: "resume",
		label: "Download Resume",
		href: "/resume",
		icon: <FiDownload size={14} />,
	},
];

export const Footer = () => {
	const [copiedId, setCopiedId] = useState<string | null>(null);

	const handleCopy = async (value: string, id: string) => {
		try {
			await navigator.clipboard.writeText(value);
			setCopiedId(id);
			setTimeout(() => setCopiedId(null), 1800);
		} catch {
			// fallback silently
		}
	};

	return (
		<footer id="contact" className="border-t border-[#222222]">
			{/* ── Top CTA Grid ──────────────────────────────────────────── */}
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 border-b border-[#222222]">

					{/* Col 1 — Headline */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
						className="py-16 lg:border-r border-[#222222] lg:pr-5"
					>
						<h2
							className="font-display text-[#EDEDED] uppercase leading-[0.88]"
							style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", letterSpacing: "-0.02em" }}
						>
							HAVE A PROBLEM
							<br />
							WORTH SOLVING?
						</h2>
					</motion.div>

					{/* Col 2 — Narrative + CTA */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
						className="py-16 px-0 lg:px-10 flex flex-col justify-center lg:border-r border-[#222222]"
					>
						<p className="text-[#8E8E8E] text-[0.9375rem] leading-relaxed mb-8 max-w-xs">
							I&apos;m currently available for freelance and full-time opportunities.
						</p>
						<Link
							href="mailto:mohasinakonda@gmail.com"
							className="inline-flex items-center gap-2 font-mono-ui text-[0.7rem] tracking-widest text-[#EDEDED] border border-[#333333] px-5 py-3 hover:bg-[#EDEDED] hover:text-[#080808] transition-all duration-150 w-fit group"
						>
							LET&apos;S TALK
							<span className="inline-block group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-150">↗</span>
						</Link>
					</motion.div>

					{/* Col 3 — Contact Links */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
						className="py-16 lg:pl-10 flex flex-col justify-center space-y-3"
					>
						{contactLinks.map((link) => (
							<div key={link.id}>
								{
									<Link
										href={link.href}
										target={link.href.startsWith("http") ? "_blank" : undefined}
										rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
										className="flex items-center gap-2 font-mono-ui text-[0.75rem] tracking-wide text-[#8E8E8E] hover:text-[#EDEDED] transition-colors duration-150 group"
									>
										<span className="text-[#555555] flex-shrink-0">{link.icon}</span>
										<span className="group-hover:underline decoration-[#333333] underline-offset-2">
											{link.label}
										</span>
									</Link>
								}
							</div>
						))}
					</motion.div>
				</div>

				{/* ── Sub-footer Bar ───────────────────────────────────── */}
				<div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
					<p className="font-mono-ui text-[0.65rem] tracking-wider text-[#333333]">
						© 2026 Hazrat Akonda. All rights reserved.
					</p>

					<p className="font-mono-ui text-[0.65rem] tracking-wider text-[#333333]">
						Designed &amp; Developed by Hazrat Akonda
					</p>
				</div>
			</div>
		</footer>
	);
};
