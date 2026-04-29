"use client";

import Image, { StaticImageData } from "next/image";
import { useMemo, useState } from "react";
import Basalagbe from '../../project-images/basa-lagbe-desktop.png'
import DevHelperz from '../../project-images/dev-helperz.png'
import Wanderlust from '../../project-images/wanderlust.png'
import HealthHero from '../../project-images/healthcare-hero.png'
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";


type Project = {
	id: string;
	title: string;
	description: string;
	highlights: string[];
	skills: string[];

	coverDataUri: StaticImageData;
	link: string

};



export default function Projects() {
	const projects = useMemo<Project[]>(
		() => [
			{
				id: "p1",
				title: "Basa-Lagbe - Map-based House Rental Platform",
				description:
					"A modern house rental platform that enables users to explore and discover properties through an interactive map interface. Built with Next.js and Supabase, the app focuses on real-time data visualization, seamless user experience, and scalable property management.",
				link: "https://basa-lagbe-beta.vercel.app/",
				highlights: [
					"Integrated Google Maps for real-time property discovery and location-based search",
					"Implemented secure authentication and user session management using Supabase",
					"Designed a mobile-first, fully responsive UI optimized for usability across devices",
					"Built dynamic property listing and management system with real-time updates",
					"Developed reusable and scalable component system using Tailwind CSS",
				],
				skills: [
					"Next.js",
					"TypeScript",
					"Tailwind CSS",
					"Supabase",
					"Google Maps API",
					"UI Design",
					"UX Writing",
					"Accessibility",
				],
				coverDataUri: Basalagbe,
			},

			{
				id: "p2",
				title: "DevHelperz - All-in-One Developer Toolkit",
				description:
					"A productivity-focused utility platform designed to streamline everyday developer tasks such as JSON formatting, QR code generation, and unit conversion. The project emphasizes speed, simplicity, and a clean dashboard experience.",
				link: "https://dev-helperz.vercel.app/",
				highlights: [
					"Built a modular tool system allowing multiple utilities to run within a single interface",
					"Designed a clean and intuitive dashboard UI for quick access to tools",
					"Implemented robust error handling and loading states for better UX",
					"Structured the app using component-driven architecture for scalability",
					"Optimized performance for fast interactions and minimal load time",
				],
				skills: [
					"Next.js",
					"TypeScript",
					"State Management",
					"UI/UX Design",
				],
				milestones: [
					"Designed overall UI architecture and routing system",
					"Developed reusable components and tool modules",
					"Implemented real-time preview and output generation flows",
				],
				coverDataUri: DevHelperz,
			},

			{
				id: "p3",
				title: "Trip Planner AI - Intelligent Travel Assistant",
				description:
					"An AI-powered travel planning application that generates personalized trip itineraries based on user preferences. Leveraging OpenAI, the platform transforms user inputs into structured travel plans with a smooth and engaging interface.",
				link: "https://wanderlust-xi-silk.vercel.app/",
				highlights: [
					"Integrated OpenAI to generate personalized travel plans dynamically",
					"Built a structured itinerary system based on user inputs and preferences",
					"Designed smooth UI interactions using Framer Motion for better engagement",
					"Focused on user-centric design for intuitive planning experience",
				],
				skills: [
					"Next.js",
					"TypeScript",
					"OpenAI API",
					"Tailwind CSS",
					"Framer Motion",
					"UI Design",
					"Accessibility",
				],
				coverDataUri: Wanderlust,
			},

			{
				id: "p4",
				title: "Healthcare Landing Page - High-Converting UI",
				description:
					"A modern and performance-optimized healthcare landing page designed to deliver a clean user experience and strong visual hierarchy. Built with a focus on responsiveness, accessibility, and smooth animations.",
				link: "https://healthcare-six-gules.vercel.app/",
				highlights: [
					"Designed a visually appealing and conversion-focused layout",
					"Implemented smooth animations using Framer Motion",
					"Built fully responsive, mobile-first interface",
					"Optimized performance for fast load times and better user experience",
				],
				skills: [
					"Next.js",
					"TypeScript",
					"Tailwind CSS",
					"UI Design",
					"Accessibility",
				],
				coverDataUri: HealthHero,
			},
		],
		[]
	);
	const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
		null
	);

	const selectedProject =
		selectedProjectId === null
			? null
			: projects.find((p) => p.id === selectedProjectId) ?? null;



	return (
		<div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 py-10 sm:py-14">
			<div className="fixed inset-0 pointer-events-none opacity-70 dark:opacity-40 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(59,130,246,0.20),transparent_60%),radial-gradient(700px_circle_at_90%_30%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(650px_circle_at_40%_95%,rgba(34,197,94,0.14),transparent_60%)]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
							Projects
						</h1>
						<p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl">
							A collection of projects focused on building scalable, user-centric web applications with modern technologies and thoughtful design.
						</p>
					</div>
				</div>

				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{projects.map((project) => (
						<button
							key={project.id}
							type="button"
							onClick={() => setSelectedProjectId(project.id)}
							className="group text-left rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 backdrop-blur transition-transform hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/60"
						>
							<div className="p-3">
								<div className="relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 aspect-[4/3]">
									<Image
										src={project.coverDataUri.src}
										alt=""
										unoptimized
										fill
										priority={false}
										sizes="(max-width: 1024px) 50vw, 25vw"
										className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
									/>


								</div>

								<div className="mt-3">
									<div className="flex items-start justify-between gap-3">

										<h3 className="font-semibold leading-tight text-base">
											{project.title}
										</h3>



									</div>

									<div className="mt-3 flex flex-wrap gap-2">
										{project.skills.slice(0, 3).map((skill) => (
											<span
												key={skill}
												className="text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 px-2.5 py-1"
											>
												{skill}
											</span>
										))}
										{project.skills.length > 3 ? (
											<span className="text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 px-2.5 py-1">
												+{project.skills.length - 3}
											</span>
										) : null}
									</div>
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			{selectedProject ? (
				<div className="fixed inset-0 z-50">
					<div
						className="absolute inset-0 bg-black/50 backdrop-blur-sm"
						onClick={() => setSelectedProjectId(null)}
						aria-hidden="true"
					/>

					<div className="absolute inset-0 overflow-y-auto p-4 sm:p-6">
						<div
							role="dialog"
							aria-modal="true"
							aria-label="Project details"
							className="mx-auto w-full max-w-4xl rounded-3xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xl overflow-hidden"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="relative">
								<div className="relative w-full h-52 sm:h-64">
									<Image
										src={selectedProject.coverDataUri}
										alt=""
										unoptimized
										fill
										priority={false}
										className="object-cover"
									/>
								</div>
								<button
									type="button"
									onClick={() => setSelectedProjectId(null)}
									aria-label="Close"
									className="absolute right-4 top-4 rounded-xl bg-white/90 dark:bg-zinc-800/90 border border-white/30 dark:border-zinc-700 p-2 text-zinc-900 dark:text-zinc-100 hover:scale-[1.02] transition"
								>
									<svg
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-5 w-5"
									>
										<path d="M18 6 6 18" />
										<path d="M6 6l12 12" />
									</svg>
								</button>

							</div>

							<div className="p-6 sm:p-7">
								<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
									<div className="flex gap-4 items-center">
										<h2 className="text-2xl sm:text-3xl font-bold leading-tight">
											{selectedProject.title}
										</h2>
										<Link href={selectedProject.link} target="_blank"><IoMdOpen size={24} /></Link>
									</div>
								</div>

								<p className="mt-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
									{selectedProject.description}
								</p>

								<div className="mt-6 grid gap-4 sm:grid-cols-2">
									<div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 p-4">
										<div className="text-sm font-semibold">Highlights</div>
										<ul className="mt-3 space-y-2">
											{selectedProject.highlights.map((h) => (
												<li key={h} className="text-sm flex gap-2">
													<span className="mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
														<svg
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
															className="h-3.5 w-3.5"
														>
															<path d="M20 6 9 17l-5-5" />
														</svg>
													</span>
													<span>{h}</span>
												</li>
											))}
										</ul>
									</div>

									<div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 p-4">
										<div className="text-sm font-semibold">Skills</div>
										<div className="mt-3 flex flex-wrap gap-2">
											{selectedProject.skills.map((skill) => (
												<span
													key={skill}
													className="text-xs rounded-full bg-white/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-700 px-2.5 py-1 text-zinc-700 dark:text-zinc-200"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
