import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";

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
	const post = getPostBySlug(params.slug);

	if (!post) {
		notFound();
	}

	return (
		<article className="max-w-2xl mx-auto py-8 px-4">
			<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
			<div className="text-gray-600 mb-8">
				<time>{post.date}</time>
			</div>
			<div
				className="prose prose-lg"
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</article>
	);
}
