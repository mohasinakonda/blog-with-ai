"use client";

import { Hero } from "@/components/hero";
import { icons } from "@/components/icons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
	const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

	const handleSkillClick = (skillName: string) => {
		setSelectedSkill(selectedSkill === skillName ? null : skillName);
	};
	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<Hero />

			{/* Experience Section */}
			<section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900  to-black text-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
						<p className="text-xl text-gray-300">
							My journey in web development
						</p>
					</motion.div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{[
							{
								role: "Senior Frontend Developer",
								company: "Tech Solutions Inc.",
								period: "2022 - Present",
								description:
									"Led the development of enterprise-level React applications, improving performance by 40%",
								highlights: [
									"React",
									"Next.js",
									"TypeScript",
									"Performance Optimization",
								],
							},
							{
								role: "Frontend Developer",
								company: "Digital Innovations Ltd",
								period: "2020 - 2022",
								description:
									"Developed responsive web applications and implemented modern UI/UX practices",
								highlights: ["Vue.js", "Nuxt.js", "JavaScript", "UI/UX Design"],
							},
						].map((experience, index) => (
							<motion.div
								key={experience.role}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
							>
								<h3 className="text-2xl font-semibold mb-2">
									{experience.role}
								</h3>
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

			{/* Skills Section */}
			<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
						<p className="text-xl text-gray-300">Technologies I work with</p>
					</motion.div>
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="lg:col-span-12 space-y-8"
						>
							{[
								{
									category: "Frontend",
									skills: [
										{
											name: "React/Next.js",
											icon: "FaReact",
											experience: "4+ years",
											level: "Expert",
											projects: 15,
											description:
												"Built enterprise-grade apps with server-side rendering, API routes, and complex state management. Mastered advanced patterns and performance optimization in real-world projects.",
										},
										{
											name: "TypeScript",
											icon: "SiTypescript",
											experience: "3+ years",
											level: "Advanced",
											projects: 12,
											description:
												"Champion of type safety and maintainable architecture. Confident in building large-scale applications with predictable and scalable code.",
										},
										{
											name: "JavaScript",
											icon: "DiJavascript",
											level: "Advanced",
											blogCount: 4,
											description:
												"The foundation of everything I build. Proficient in modern ES standards, asynchronous programming, and deep JS internals.",
										},
										{
											name: "Redux",
											icon: "SiRedux",
											level: "Advanced",
											blogCount: 4,
											description:
												"Managed complex application states like a pro using Redux, Redux Toolkit, and middleware for scalable and predictable apps.",
										},
										{
											name: "Tailwind CSS",
											icon: "SiTailwindcss",
											level: "Advanced",
											blogCount: 2,
											description:
												"Crafted sleek, responsive UIs rapidly with utility-first styling. Clean, maintainable designs with custom themes and animations.",
										},
										{
											name: "Git/GitHub",
											icon: "FaGithub",
											level: "Advanced",
											blogCount: 3,
											description:
												"Version control wizard. Collaborative development with PRs, branching strategies, and GitHub Actions for automation.",
										},
										{
											name: "Docker",
											icon: "FaDocker",
											level: "Intermediate",
											blogCount: 2,
											description:
												"Containerized development environments and production deployments for consistency and scalability across teams.",
										},
										{
											name: "CI/CD",
											icon: "FaCodeBranch",
											level: "Intermediate",
											blogCount: 1,
											description:
												"Automated testing and deployment pipelines using GitHub Actions and other tools to streamline delivery and ensure reliability.",
										},
										{
											name: "Testing",
											icon: "FaVial",
											level: "Intermediate",
											blogCount: 2,
											description:
												"Ensured code quality with unit, integration, and end-to-end testing using tools like Jest, React Testing Library, and Cypress.",
										},
										{
											name: "Node.js",
											icon: "FaNodeJs",
											level: "Intermediate",
											blogCount: 4,
											description:
												"Built fast, scalable backends and RESTful APIs using Express and modern JavaScript practices on Node.js.",
										},
										{
											name: "Express",
											icon: "SiExpress",
											level: "Intermediate",
											blogCount: 2,
											description:
												"Crafted lightweight, flexible server-side logic and middleware-driven APIs with clean architecture and validation.",
										},
										{
											name: "MongoDB",
											icon: "SiMongodb",
											level: "Intermediate",
											blogCount: 1,
											description:
												"Designed dynamic NoSQL schemas and optimized data queries with Mongoose for performance and flexibility.",
										},

										{
											name: "GraphQL",
											icon: "SiGraphql",
											level: "Intermediate",
											blogCount: 1,
											description:
												"Crafted flexible, efficient APIs with GraphQL, enabling clients to fetch exactly what they need—nothing more, nothing less.",
										},
									],
								},
							].map((category) => (
								<motion.div
									key={category.category}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
									viewport={{ once: true }}
									className="space-y-4"
								>
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
										{category.skills.map((skill) => {
											const IconComponent =
												icons[skill.icon as keyof typeof icons];
											return (
												<motion.button
													key={skill.name}
													whileHover={{
														scale: 1.05,
														boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
													}}
													whileTap={{ scale: 0.95 }}
													onClick={() => handleSkillClick(skill.name)}
													className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-700/50 transition-all duration-300 flex flex-col items-center justify-between gap-3 min-h-[200px] group"
												>
													<div
														className={`absolute top-0 right-0 px-2 py-1 rounded-bl-lg rounded-tr-lg text-xs font-medium ${
															skill.level === "Expert"
																? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-pink-200"
																: skill.level === "Advanced"
																? "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-200"
																: "bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-emerald-200"
														}`}
													>
														{skill.level}
													</div>
													{IconComponent && (
														<div className="relative">
															<IconComponent className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
															<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
														</div>
													)}
													<div className="text-center space-y-2">
														<h3 className="text-sm font-semibold">
															{skill.name}
														</h3>
														<p className="text-xs text-gray-400">
															{skill.experience}
														</p>
														<p className="text-sm text-gray-500 line-clamp-2">
															{skill.description}
														</p>
													</div>
												</motion.button>
											);
										})}
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* <motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="lg:col-span-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 min-h-[600px]"
						>
							{selectedSkill && blogPosts[selectedSkill] ? (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
									className="space-y-6"
								>
									<h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
										<span>{selectedSkill}</span>
										<span className="text-sm px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full">
											{blogPosts[selectedSkill].length} Posts
										</span>
									</h3>
									<div className="grid gap-6">
										{blogPosts[selectedSkill].map((post, index) => (
											<motion.div
												key={post.title}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.3, delay: index * 0.1 }}
												className="p-6 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300 group cursor-pointer"
											>
												<h4 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
													{post.title}
												</h4>
												<p className="text-sm text-gray-300 mb-3">{post.date}</p>
												<p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
												<div className="mt-4 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
													Read More
													<svg
														className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</div>
											</motion.div>
										))}
									</div>
								</motion.div>
							) : (
								<div className="flex flex-col items-center justify-center h-full text-center text-gray-400 space-y-4">
									<svg
										className="w-16 h-16 mb-4 text-gray-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
										/>
									</svg>
									<p className="text-xl font-semibold">Select a skill to explore</p>
									<p className="max-w-md">Click on any skill to view related blog posts and learn more about my expertise in that area.</p>
								</div>
							)}
						</motion.div> */}
					</div>
				</div>
			</section>

			{/* Featured Blog Posts Section */}
			<section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold mb-4">Featured Blog Posts</h2>
						<p className="text-xl text-gray-300">
							Insights & Technical Articles
						</p>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: "Advanced React Patterns for Enterprise Applications",
								excerpt:
									"Exploring advanced React patterns and best practices for building scalable enterprise applications",
								date: "March 15, 2024",
								readTime: "8 min read",
								category: "React",
								image: "/blog/react-patterns.jpg",
							},
							{
								title: "Building High-Performance Next.js Applications",
								excerpt:
									"A comprehensive guide to optimizing Next.js applications for maximum performance",
								date: "March 10, 2024",
								readTime: "10 min read",
								category: "Next.js",
								image: "/blog/nextjs-performance.jpg",
							},
							{
								title: "TypeScript Best Practices in 2024",
								excerpt:
									"Latest TypeScript features and patterns for writing maintainable code",
								date: "March 5, 2024",
								readTime: "6 min read",
								category: "TypeScript",
								image: "/blog/typescript-2024.jpg",
							},
						].map((post, index) => (
							<motion.div
								key={post.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								viewport={{ once: true }}
								className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
							>
								<div className="aspect-video bg-gray-700 relative overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
									<div className="absolute bottom-4 left-4">
										<span className="px-3 py-1 bg-blue-500 rounded-full text-sm font-medium">
											{post.category}
										</span>
									</div>
								</div>
								<div className="p-6">
									<div className="flex items-center text-sm text-gray-400 mb-4">
										<span>{post.date}</span>
										<span className="mx-2">•</span>
										<span>{post.readTime}</span>
									</div>
									<h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
										{post.title}
									</h3>
									<p className="text-gray-300 mb-4 line-clamp-2">
										{post.excerpt}
									</p>
									<div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
										Read More
										<svg
											className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold mb-4">
							Frequently Asked Questions
						</h2>
						<p className="text-xl text-gray-300">
							Common questions about my services and expertise
						</p>
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
						{[
							{
								question: "What type of projects do you specialize in?",
								answer:
									"I specialize in building modern web applications using React, Next.js, and TypeScript. My focus is on creating performant, scalable, and user-friendly solutions for businesses and startups.",
							},
							{
								question: "How do you ensure project quality?",
								answer:
									"I follow industry best practices including test-driven development, continuous integration, and code reviews. I use modern tools and frameworks to ensure high-quality, maintainable code.",
							},
							{
								question: "What is your development process?",
								answer:
									"My development process involves understanding requirements, creating detailed specifications, iterative development with regular client feedback, thorough testing, and continuous deployment.",
							},
							{
								question: "Do you provide ongoing support?",
								answer:
									"Yes, I offer ongoing support and maintenance services to ensure your application continues to perform optimally. This includes bug fixes, updates, and feature enhancements.",
							},
							{
								question: "How do you handle project communication?",
								answer:
									"I maintain clear and regular communication through scheduled meetings, progress reports, and project management tools. I'm always available for questions and updates via email or chat.",
							},
							{
								question: "What is your approach to responsive design?",
								answer:
									"I prioritize mobile-first, responsive design ensuring applications work seamlessly across all devices. I use modern CSS frameworks and testing tools to guarantee consistent experiences.",
							},
						].map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
							>
								<h3 className="text-xl font-semibold mb-4 text-blue-400">
									{faq.question}
								</h3>
								<p className="text-gray-300">{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
