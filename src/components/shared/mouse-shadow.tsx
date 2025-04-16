"use client";
import { useEffect, useState } from "react";

export const MouseShadow = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);
	return (
		<div
			className="pointer-events-none fixed inset-0 z-30 transition-transform duration-300 "
			style={{
				background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 55, 255, 0.15), transparent 80%)`,
			}}
		/>
	);
};
