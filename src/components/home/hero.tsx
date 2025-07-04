"use client";
import { motion } from "framer-motion";
export const Hero = () => {
	return (
		<section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
			<div className="absolute inset-0 opacity-20">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
			</div>
			<Pattern />
			<div className="container mx-auto px-4 z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						style={{
							textShadow: "0 13.36px 8.896px, 0 -2px 1px",
							fontVariant: "small-caps",
						}}
						className="text-5xl md:text-7xl font-bold mb-4 relative bg-gradient-to-r skew-3   from-pink-600 via-gray-600 to-white bg-clip-text text-transparent drop-shadow-sm after:content-[''] after:absolute after:left-0 after:bottom-4 after:rounded-sm after:-skew-3 after:w-full after:h-[50%] after:bg-gradient-to-r after:from-pink-600/20 after:via-black/10 after:to-white/20 after:transform after:translate-y-1/2 after:-z-10 w-fit mx-auto"
					>
						Hi, I&apos;m Hazrat
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
					>
						Frontend Developer
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto"
					>
						Crafting Beautiful & Performant Web Experiences
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
					>
						Specialized in building exceptional digital experiences. With 5+
						years of experience in frontend development, I focus on creating
						fast, accessible, and user-friendly web applications.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
					>
						<div className="relative group">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
							<a
								href="https://convertertia.vercel.app/"
								target="_blank"
								className="relative bg-gray-900 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300"
							>
								View My Work
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
						<div className="relative group">
							<div className="absolute pointer-events-none -inset-0.5 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
							<a
								href="mailto:mohasinakonda@gmail.com"
								className="border  border-blue-500 hover:bg-blue-500/10 text-blue-400 font-semibold py-3 px-8 rounded-full transition-colors duration-300"
							>
								Get in Touch
							</a>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.7 }}
						className="flex items-center justify-center gap-6"
					>
						<a
							href="https://github.com/mohasinakonda"
							target="_blank"
							rel="noopener noreferrer"
							title="GitHub"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/hazrat-ali-akonda/"
							target="_blank"
							title="LinkedIn"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
						<a
							href="https://x.com/mohasinakonda"
							target="_blank"
							rel="noopener noreferrer"
							title="Twitter"
							className="text-gray-400 hover:text-white transition-colors duration-300"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
							</svg>
						</a>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
			>
				<span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
				<motion.div
					animate={{
						y: [0, 10, 0],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: "reverse",
						ease: "easeInOut",
					}}
				>
					<svg
						className="w-6 h-6 text-blue-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</motion.div>
			</motion.div>
		</section>
	);
};

const Pattern = () => (
	<div
		className="pointer-events-none top-36 -right-[1500px] absolute blur-2xl inset-0 z-30 transition-transform duration-300 "
		style={{
			background: `radial-gradient(400px circle, rgba(255, 55, 255, 0.15), transparent 80%)`,
		}}
	/>
);
