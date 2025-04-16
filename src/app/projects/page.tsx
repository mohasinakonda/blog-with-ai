"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
	{
		title: "AI Chat Application",
		description:
			"A real-time chat application with AI-powered responses using OpenAI's GPT model.",
		tech: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
		image: "/projects/ai-chat.png",
		link: "https://github.com/yourusername/ai-chat",
		status: "Completed",
	},
	{
		title: "Personal Blog Platform",
		description:
			"A markdown-based blog platform with syntax highlighting and dark mode support.",
		tech: ["Next.js", "MDX", "TypeScript", "Tailwind CSS"],
		image: "/projects/blog.png",
		link: "https://github.com/yourusername/blog",
		status: "In Progress",
	},
	{
		title: "E-commerce Dashboard",
		description:
			"An admin dashboard for managing products, orders, and customers.",
		tech: ["React", "Redux", "Node.js", "MongoDB"],
		image: "/projects/dashboard.png",
		link: "https://github.com/yourusername/dashboard",
		status: "Completed",
	},
];

export default function Projects() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
			{/* Spotlight effect */}
			<div
				className="pointer-events-none fixed inset-0 z-30 transition-transform duration-300"
				style={{
					background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 78, 216, 0.15), transparent 80%)`,
				}}
			/>

			<div className="fixed top-16 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
						My Projects
					</h1>
					<p className="mt-4 text-xl text-gray-400">
						A collection of my recent work and side projects
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
							className="backdrop-blur-sm bg-white/5 rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 relative group"
							style={{
								boxShadow: "0 0 30px rgba(29, 78, 216, 0.1)",
							}}
						>
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								style={{
									background:
										"radial-gradient(circle at center, rgba(29, 78, 216, 0.15), transparent 70%)",
								}}
							/>

							<div className="aspect-video relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
								{/* Replace with actual project images */}
								<div className="h-full flex items-center justify-center text-4xl text-gray-600">
									{project.title[0]}
								</div>
							</div>

							<div className="p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-xl font-semibold text-gray-100">
										{project.title}
									</h3>
									<span
										className={`px-2 py-1 text-xs rounded-full ${
											project.status === "Completed"
												? "bg-green-500/20 text-green-400"
												: "bg-yellow-500/20 text-yellow-400"
										}`}
									>
										{project.status}
									</span>
								</div>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
										>
											{tech}
										</span>
									))}
								</div>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
								>
									View Project
									<svg
										className="w-4 h-4 ml-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
