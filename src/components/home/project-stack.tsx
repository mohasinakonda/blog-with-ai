"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BasalagbeImage from "../../project-images/basa-lagbe-app.png"
import BasalagbeDashboard from "../../project-images/basa-lagbe-dashboard.jpeg"
import ToylandImage from "../../project-images/toyland-app.png"
import ToylandImage2 from "../../project-images/toyland-2.jpeg"
import HealthCareImage from '../../project-images/halthcare-app.png'
import HealthCareImage2 from '../../project-images/healthcare2.jpeg'
import Wonderlust1 from '../../project-images/wonderlust-1.jpeg'
import Wonderlust2 from '../../project-images/wonderlust-2.jpeg'


type Project = {
	id: string;
	index: string;
	badge: string;
	title: string;
	description: string;
	stack: string[];
	cta: string;
	ctaHref: string;
	mockup: React.ReactNode;
};

const projects: Project[] = [
	{
		id: "rental",
		index: "01",
		badge: "FEATURED PROJECT",
		title: "MAP-BASED PROPERTY RENTAL",
		description:
			"Location-based property visualization with real-time map filters and a dynamic dashboard. Handles complex geospatial queries and real-time listing updates.",
		stack: ["React / TypeScript", "Mapbox GL JS", "RestAPI / PostgreSQL", "React Query"],
		cta: "VIEW LIVE",
		ctaHref: "https://basa-lagbe-beta.vercel.app/",
		mockup: <BasaLagbe />,
	},
	{
		id: "toyland",
		index: "02",
		badge: "FEATURED PROJECT",
		title: "TOYLAND E-COMMERCE",
		description:
			"A toy store e-commerce platform with a modern design, product filtering, and an admin dashboard for managing products and orders.",
		stack: ["Next.js / TypeScript", "Redux Toolkit", "Tailwind CSS"],
		cta: "VIEW LIVE",
		ctaHref: "https://toyland-dusky.vercel.app/",
		mockup: <Toyland />,
	},
	{
		id: "wanderlust",
		index: "03",
		badge: "FEATURED PROJECT",
		title: "WANDERLUST AI TRIP PLANNER",
		description:
			"Interactive multi-day trip itinerary planner with AI-assisted suggestions, intelligent caching layers, and custom map viewports for location-based travel planning.",
		stack: ["Next.js / TypeScript", "OpenAI API", "Mapbox GL JS", "MongoDB"],
		cta: "VIEW LIVE",
		ctaHref: "https://wanderlust-xi-silk.vercel.app/",
		mockup: <TripPlanner />,
	},
	{
		id: "healthcare",
		index: "04",
		badge: "FEATURED PROJECT",
		title: "HEALTHCARE LANDING PAGE",
		description:
			"A landing page for a healthcare system with modern design, fast loading speed, and SEO optimization.",
		stack: ["Next.js / TypeScript", "Tailwind CSS"],
		cta: "VIEW LIVE",
		ctaHref: "https://healthcare-six-gules.vercel.app/",
		mockup: <HealthCare />,
	},

];

const TOTAL = projects.length; // 4

export function ProjectStack() {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	return (
		<section id="work" className="border-b border-[#8E8E8E60] ">
			{/* ── Section Header (outside scroll track so it scrolls away) */}
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between border-b border-[#8E8E8E60] sticky top-15">
				<span className="font-mono-ui text-[0.65rem] tracking-[0.25em] text-[#8E8E8E] uppercase ">
					01 / SELECTED WORK
				</span>
				<Link
					href="/projects"
					className="font-mono-ui text-[0.65rem] tracking-widest text-[#8E8E8E] hover:text-[#EDEDED] transition-colors duration-150 flex items-center gap-1 group"
				>
					VIEW ALL PROJECTS
					<span className="inline-block group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-150">→</span>
				</Link>
			</div>

			{/* ── 400vh Scroll Track ──────────────────────────────────────── */}
			<div ref={containerRef} style={{ height: `${TOTAL * 100}vh` }}>

				{/* ── Sticky Pinned Viewport ─────────────────────────────── */}
				<div className="sticky top-30 h-screen overflow-hidden bg-[#080808] bg-noise">
					<div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12">

						{/* ── Left Stepper Rail ──────────────────────────── */}
						<div className="absolute left-0 lg:left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
							{projects.map((project, index) => (
								<StepItem
									key={project.id}
									label={project.index}
									index={index}
									total={TOTAL}
									scrollYProgress={scrollYProgress}
									isLast={index === TOTAL - 1}
								/>
							))}
						</div>

						{/* ── Card Stack Area ─────────────────────────────── */}
						{/*
						  KEY FIX: All cards rendered simultaneously as absolute layers.
						  Each card slides in from Y=100vh → Y=0 at its scroll trigger.
						  Previous cards scale down as the new one arrives.
						  z-index = index, so later cards sit on top.
						*/}
						<div className="absolute inset-0 pl-14 lg:pl-20">
							{projects.map((project, index) => (
								<ProjectCard
									key={project.id}
									project={project}
									index={index}
									total={TOTAL}
									scrollYProgress={scrollYProgress}
								/>
							))}
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

/* ── Stepper Item ─────────────────────────────────────────────────────── */
function StepItem({
	label,
	index,
	total,
	scrollYProgress,
	isLast,
}: {
	label: string;
	index: number;
	total: number;
	scrollYProgress: MotionValue<number>;
	isLast: boolean;
}) {
	// This card is "active" when scroll is in its range
	const rangeStart = index / total;
	const rangeEnd = (index + 1) / total;

	const color = useTransform(
		scrollYProgress,
		[
			Math.max(0, rangeStart - 0.01),
			rangeStart + 0.01,
			rangeEnd - 0.01,
			Math.min(1, rangeEnd + 0.01),
		],
		["#444444", "#EDEDED", "#EDEDED", "#444444"],
	);

	return (
		<div className="flex flex-col items-center">
			<motion.span
				style={{ color }}
				className="font-mono-ui text-[0.65rem] tracking-widest leading-none"
			>
				{label}
			</motion.span>
			{!isLast && <div className="w-px h-6 bg-[#222222] my-1.5" />}
		</div>
	);
}

/* ── Project Card (absolute, driven by translateY + scale) ───────────── */
function ProjectCard({
	project,
	index,
	total,
	scrollYProgress,
}: {
	project: Project;
	index: number;
	total: number;
	scrollYProgress: MotionValue<number>;
}) {
	/*
	  SLIDE-IN (Y axis):
	  - Card 0: always at y=0 (first card visible from the start)
	  - Card N (N>0): at scroll progress (N-1)/total → starts at "100vh"
		 at scroll progress N/total     → lands at "0vh"
	*/
	const slideInStart = index === 0 ? 0 : (index - 1) / total;
	const slideInEnd = index === 0 ? 0.001 : index / total;

	const y = useTransform(
		scrollYProgress,
		[slideInStart, slideInEnd],
		index === 0 ? ["0vh", "0vh"] : ["100vh", "0vh"],
	);

	/*
	  SCALE-DOWN (covered by next card):
	  - As card N+1 slides in (from (N)/total to (N+1)/total),
		card N scales from 1 → targetScale
	  - Card 0 gets most covered (smallest), card 3 stays at 1
	*/
	const targetScale = 1 - (total - 1 - index) * 0.04;
	const scaleStart = index / total;        // when NEXT card starts sliding over this
	const scaleEnd = (index + 1) / total;  // when NEXT card is fully on top

	const scale = useTransform(
		scrollYProgress,
		index === total - 1
			? [0, 1]         // last card never scales down
			: [scaleStart, scaleEnd],
		index === total - 1
			? [1, 1]
			: [1, targetScale],
	);

	return (
		<motion.div
			className="absolute inset-0 left-10 lg:left-20"
			style={{
				y,
				scale,
				zIndex: index + 1,
				transformOrigin: "top center",
			}}
		>
			{/* Card */}
			<div
				className="w-full  border border-[#8E8E8E60] rounded bg-[#101010] grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
				style={{ height: "540px" }}
			>
				{/* ── Left Meta Panel: 5 cols ─────────────────────── */}
				<div className="lg:col-span-5 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#222222] overflow-y-auto">
					<div>
						{/* Badge */}
						<div className="inline-block border border-[#2a2a2a] mb-5">
							<span className="font-mono-ui text-[0.6rem] tracking-[0.2em] text-[#555555] px-2 py-0.5 block uppercase">
								{project.badge}
							</span>
						</div>

						{/* Index */}
						<p className="font-mono-ui text-[0.65rem] tracking-widest text-[#555555] mb-2">
							{project.index}
						</p>

						{/* Title */}
						<h2
							className="font-display text-[#EDEDED] uppercase leading-[0.9] mb-5"
							style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.01em" }}
						>
							{project.title}
						</h2>

						{/* Description */}
						<p className="text-[#8E8E8E] text-[0.875rem] leading-relaxed mb-6">
							{project.description}
						</p>

						{/* Tech Stack */}
						<ul className="space-y-1.5">
							{project.stack.map((item) => (
								<li
									key={item}
									className="font-mono-ui text-[0.7rem] tracking-wider text-[#555555] flex items-center gap-2"
								>
									<span className="text-[#333333]">→</span>
									{item}
								</li>
							))}
						</ul>
					</div>

					{/* CTA */}
					<Link
						href={project.ctaHref}
						target="_blank"
						className="inline-flex items-center gap-2 font-mono-ui text-[0.7rem] tracking-widest text-[#EDEDED] border border-[#333333] px-4 py-2.5 hover:bg-[#EDEDED] hover:text-[#080808] transition-all duration-150 w-fit group mt-6"
					>
						{project.cta}
						<span className="inline-block group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-150">↗</span>
					</Link>
				</div>

				{/* ── Right UI Canvas: 7 cols ──────────────────────── */}
				<div className="lg:col-span-7 bg-[#F5F5F5] overflow-hidden">
					{project.mockup}
				</div>
			</div>
		</motion.div>
	);
}

/* ── UI Mockups (light canvas) ───────────────────────────────────────── */
function HealthCare() {
	return (
		<div className="w-full h-full p-4 font-mono text-[#0D0D0D] text-xs flex flex-col gap-3 overflow-hidden">
			{/* Top bar */}
			<Image src={HealthCareImage.src} height={HealthCareImage.height} width={HealthCareImage.width} alt="Basa lagbe" />
			<Image src={HealthCareImage2.src} height={HealthCareImage2.height} width={HealthCareImage2.width} alt="Basa lagbe" />
		</div>
	);
}

function TripPlanner() {
	return (
		<div className="w-full h-full p-4 font-mono text-[#0D0D0D] text-xs flex flex-col gap-3 overflow-hidden">
			<Image src={Wonderlust1.src} height={Wonderlust1.height} width={Wonderlust1.width} alt="Basa lagbe" />
			<Image src={Wonderlust2.src} height={Wonderlust2.height} width={Wonderlust2.width} alt="Basa lagbe" />
		</div>
	);
}

function Toyland() {

	return (
		<div className="w-full h-full p-4 font-mono text-[#0D0D0D] text-xs flex flex-col gap-3 overflow-hidden">
			<Image src={ToylandImage.src} height={ToylandImage.height} width={ToylandImage.width} alt="Toyland" />
			<Image src={ToylandImage2.src} height={ToylandImage2.height} width={ToylandImage2.width} alt="Toyland" />
		</div>
	);
}

function BasaLagbe() {
	return (
		<div className="w-full h-full p-4 font-mono text-[#0D0D0D] text-xs flex flex-col gap-3 overflow-hidden">


			<Image src={BasalagbeImage.src} height={BasalagbeImage.height} width={BasalagbeImage.width} alt="Basa lagbe" />
			<Image src={BasalagbeDashboard.src} height={BasalagbeDashboard.height} width={BasalagbeDashboard.width} alt="Basa lagbe" />
		</div>
	);
}
