import { motion } from "framer-motion";
import { icons } from "../icons";
import { SectionTittle } from "../shared/title";

const skills = [
	{
		category: "Frontend",
		skills: [
			{
				name: "React/Next.js",
				icon: "FaReact",
				experience: "3+ years",
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
				experience: "3+ years",
				blogCount: 4,
				description:
					"The foundation of everything I build. Proficient in modern ES standards, asynchronous programming, and deep JS internals.",
			},
			{
				name: "Redux",
				icon: "SiRedux",
				level: "Advanced",
				experience: "3+ years",
				blogCount: 4,
				description:
					"Managed complex application states like a pro using Redux, Redux Toolkit, and middleware for scalable and predictable apps.",
			},
			{
				name: "Tailwind CSS",
				icon: "SiTailwindcss",
				experience: "3+ years",
				level: "Advanced",
				blogCount: 2,
				description:
					"Crafted sleek, responsive UIs rapidly with utility-first styling. Clean, maintainable designs with custom themes and animations.",
			},
			{
				name: "Git/GitHub",
				experience: "3+ years",
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
				experience: "2+ years",
				blogCount: 1,
				description:
					"Crafted flexible, efficient APIs with GraphQL, enabling clients to fetch exactly what they need—nothing more, nothing less.",
			},
		],
	},
];
export const Skills = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<SectionTittle>Technical Skills</SectionTittle>
					<p className="text-xl text-gray-300">Technologies I work with</p>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 lg:grid-cols-12 gap-8"
				>
					<motion.div
						variants={{
							visible: {
								transition: {
									staggerChildren: 0.1,
								},
							},
						}}
						className="lg:col-span-12 space-y-8"
					>
						{skills.map((category) => (
							<motion.div key={category.category} className="space-y-4">
								<motion.div
									variants={{
										hidden: {
											opacity: 0,
										},
										visible: {
											opacity: 1,
											transition: {
												staggerChildren: 0.05,
											},
										},
									}}
									className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
								>
									{category.skills.map((skill) => {
										const IconComponent =
											icons[skill.icon as keyof typeof icons];
										return (
											<motion.button
												suppressHydrationWarning
												key={skill.name}
												variants={{
													hidden: {
														opacity: "0",
														x: Math.random() * 100 - 50,
														y: Math.random() * 100 - 50,
														scale: 0.8,
														rotate: Math.random() * 30 - 15,
													},
													visible: {
														opacity: 1,
														x: 0,
														y: 0,
														scale: 1,
														rotate: 0,
														transition: {
															type: "spring",
															bounce: 0.4,
															duration: 0.8,
														},
													},
												}}
												whileHover={{
													scale: 1.05,
													boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
												}}
												whileTap={{ scale: 0.95 }}
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
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
