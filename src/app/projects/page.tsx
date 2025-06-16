"use client";

export default function Projects() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
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

				<h2 className="text-3xl">Advance table, No package/library</h2>
			</div>
		</div>
	);
}
