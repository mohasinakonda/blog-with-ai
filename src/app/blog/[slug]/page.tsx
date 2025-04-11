import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/styles/github-dark.css"; // or your preferred theme
export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function BlogPost({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);
	console.log("post====", await post?.content);
	if (!post) {
		notFound();
	}

	return (
		<div className="h-full	 bg-gradient-to-b from-gray-900 to-black text-white py-16">
			<div className="fixed top-16 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
			<article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10"></div>
				<div className="space-y-8 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
					<header className="space-y-4">
						<h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
							{post.title}
						</h1>
						<div className="flex items-center gap-4 text-gray-400">
							<time className="text-sm">{post.date}</time>
							{post.tags && (
								<div className="flex gap-2">
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs px-2 py-1 rounded-full bg-gray-800/50 border border-gray-700"
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</div>
					</header>
					<div
						className="prose prose-lg prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-code:text-blue-300 prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-700/50 max-w-none"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</div>
			</article>
		</div>
	);
}
