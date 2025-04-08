import { motion } from "framer-motion";
import { SectionTittle } from "../shared/title";
const faqs = [
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
];
export const FAQ = () => {
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
					{/* <h2 className="text-4xl font-bold mb-4">
						Frequently Asked Questions
					</h2> */}
					<SectionTittle>Frequently Asked Questions</SectionTittle>
					<p className="text-xl text-gray-300">
						Common questions about my services and expertise
					</p>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{faqs.map((faq, index) => (
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
	);
};
