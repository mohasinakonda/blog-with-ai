"use client";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function ResumePage() {
	const handleDownload = () => {
		// Replace with your actual resume PDF URL
		const resumeUrl = "/Hazrat_resume.pdf";
		const link = document.createElement("a");
		link.href = resumeUrl;
		link.download = "Hazrat_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-8">
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
					>
						Professional Resume
					</motion.h1>
				</div>

				{/* Action Buttons */}
				<div className="flex justify-center gap-4 mb-8">
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
						<button
							onClick={handleDownload}
							className="relative bg-gray-900 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
						>
							<FiDownload />
							<span>Download Resume</span>
						</button>
					</div>
				</div>

				{/* Resume Content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
				>
					{/* Add your resume content here */}
					<div className="space-y-12">
						{/* Contact Information */}
						<div className="text-center space-y-4">
							<h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
								Hazrat Akonda
							</h2>
							<p className="text-xl text-blue-400">Frontend Developer</p>
							<div className="flex items-center justify-center gap-4 text-gray-300">
								<a
									href="mailto:hazratmohasin@gmail.com"
									className="hover:text-blue-400 transition-colors"
								>
									hazrataliakonda@gmail.com
								</a>
								•
								<a
									href="tel:+919123456789"
									className="hover:text-blue-400 transition-colors"
								>
									+88 1315055532
								</a>
								•<span>Mymensingh, Bangladesh</span>
							</div>
							<div className="flex justify-center gap-4">
								<a
									href="https://www.linkedin.com/in/hazrat-ali-akonda"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									LinkedIn
								</a>
								<a
									href="https://github.com/mohasinakonda"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-blue-400 transition-colors"
								>
									GitHub
								</a>
							</div>
						</div>

						{/* Professional Summary */}
						<section className="space-y-4">
							<h3 className="text-xl font-semibold text-blue-400">
								Professional Summary
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Passionate Full Stack Developer with 3+ years of experience in
								building scalable web applications. Specialized in React,
								Next.js, and TypeScript. Strong focus on clean code, performance
								optimization, and modern development practices.
							</p>
						</section>

						{/* Experience */}
						<section className="space-y-6">
							<h3 className="text-xl font-semibold text-blue-400">
								Experience
							</h3>
							<div className="space-y-8">
								<div className="space-y-2">
									<div className="flex justify-between items-center">
										<h4 className="text-lg font-medium text-white">
											Frontend Developer
										</h4>
										<span className="text-gray-400">Feb 2024 - Present</span>
									</div>
									<p className="text-blue-300">Cronix LLC</p>
									<ul className="list-disc list-inside text-gray-300 space-y-2">
										<li>
											Led development of enterprise-grade applications using
											Next.js and TypeScript
										</li>
										<li>
											Implemented complex state management solutions with Redux
										</li>
										<li>
											Optimized application performance, achieving 40% faster
											load times
										</li>
										<li>
											Mentored junior developers and conducted code reviews
										</li>
										<li>
											Collaborated with design and beck-end team for optimal
											user experience
										</li>
									</ul>
								</div>

								<div className="space-y-2">
									<div className="flex justify-between items-center">
										<h4 className="text-lg font-medium text-white">
											Frontend Developer
										</h4>
										<span className="text-gray-400">Oct 2022 - Feb 2024</span>
									</div>
									<p className="text-blue-300">Technopers</p>
									<ul className="list-disc list-inside text-gray-300 space-y-2">
										<li>
											Developed and maintained multiple client projects using
											React and Node.js
										</li>
										<li>
											Created RESTful APIs and integrated third-party services
										</li>
										<li>
											Implemented responsive designs and cross-browser
											compatibility
										</li>
										<li>
											Collaborated with design team for optimal user experience
										</li>
									</ul>
								</div>
							</div>
						</section>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
