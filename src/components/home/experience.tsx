"use client";
import { motion } from "framer-motion";

import { SectionTittle } from "../shared/title";

const experiences = [
	{
		role: "Frontend Developer",
		company: "Cronix LLC.",
		period: "2024 - Present",
		description:
			"Led the development of enterprise-level React applications, improving performance by 40%, Mentor and guide junior developers",
		highlights: [
			"React",
			"Next.js",
			"Headless CMS",
			"BigCommerce",
			"TypeScript",
			"PWA",
		],
	},
	{
		role: "Frontend Developer",
		company: "Technopers",
		period: "2022 - 2024",
		description:
			"Developed responsive web applications and implemented modern UI/UX practices",
		highlights: [
			"React",
			"Next.js",
			"Wordpress theme development",
			"JavaScript",
			"UI/UX Design",
		],
	},
];
export const Experience = () => {
	return (
		<section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900  to-black text-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					{/* <h2 className="text-4xl font-bold mb-4">Professional Experience</h2> */}
					<SectionTittle>Professional Experience</SectionTittle>
					<p className="text-xl text-gray-300">My journey in web development</p>
				</motion.div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{experiences.map((experience, index) => (
						<motion.div
							key={experience.role + index}
							initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="bg-gray-800/50 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
						>
							<h3 className="text-2xl font-semibold mb-2">{experience.role}</h3>
							<div className="text-blue-400 mb-4">{experience.company}</div>
							<div className="text-gray-400 mb-4">{experience.period}</div>
							<p className="text-gray-300 mb-6">{experience.description}</p>
							<div className="flex flex-wrap gap-2">
								{experience.highlights.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-gray-600 bg-opacity-20 border border-blue-500 rounded-full text-sm text-white"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
