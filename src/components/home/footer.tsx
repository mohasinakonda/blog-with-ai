"use client";
import { motion } from "framer-motion";

export const Footer = () => {
	return (
		<footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="flex flex-col items-center justify-center space-y-6"
				>
					<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"></div>

					<div className="text-sm text-gray-500">
						© {new Date().getFullYear()} Hazrat All rights reserved.
					</div>
				</motion.div>
			</div>
		</footer>
	);
};
