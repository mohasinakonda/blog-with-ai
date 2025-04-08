import { motion } from "framer-motion";
type Props = {
	children: React.ReactNode;
	className?: string;
};
export const Tittle = () => {
	return (
		<motion.h1
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			style={{
				textShadow: "0 13.36px 8.896px, 0 -2px 1px",
				fontVariant: "small-caps",
			}}
			className={
				"text-5xl md:text-7xl font-bold mb-4 relative bg-gradient-to-r skew-3   from-pink-600 via-gray-600 to-white bg-clip-text text-transparent drop-shadow-sm after:content-[''] after:absolute after:left-0 after:bottom-4 after:rounded-sm after:-skew-3 after:w-full after:h-[50%] after:bg-gradient-to-r after:from-pink-600/20 after:via-black/10 after:to-white/20 after:transform after:translate-y-1/2 after:-z-10 w-fit mx-auto"
			}
		>
			Hi, I&apos;m Hazrat
		</motion.h1>
	);
};
export const SectionTittle = ({ children }: Props) => {
	return (
		<motion.h1
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			style={{
				textShadow: "0 13.36px 8.896px, 0 -2px 1px",
				fontVariant: "small-caps",
			}}
			className={
				"text-4xl  font-bold mb-4 relative bg-gradient-to-r skew-3   from-pink-600 via-gray-600 to-white bg-clip-text text-transparent drop-shadow-sm after:content-[''] after:absolute after:left-0 after:bottom-4 after:rounded-sm after:-skew-3 after:w-full after:h-[50%] after:bg-gradient-to-r after:from-pink-600/20 after:via-black/10 after:to-white/20 after:transform after:translate-y-1/2 after:-z-10 w-fit mx-auto"
			}
		>
			{children}
		</motion.h1>
	);
};
