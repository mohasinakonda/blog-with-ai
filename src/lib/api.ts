import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";

import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
	slug: string;
	title: string;
	date: string;
	content: string;
	tags: string[];
	category: string;
}

export function getAllPosts(): Post[] {
	// Create posts directory if it doesn't exist
	if (!fs.existsSync(postsDirectory)) {
		fs.mkdirSync(postsDirectory, { recursive: true });
	}

	const fileNames = fs.readdirSync(postsDirectory);
	const allPosts = fileNames
		.filter((fileName) => fileName.endsWith(".md"))
		.map((fileName) => {
			const slug = fileName.replace(/\.md$/, "");
			return getPostBySlug(slug);
		})
		.sort((post1, post2) =>
			post1?.date && post2?.date ? (post1.date > post2.date ? -1 : 1) : 0,
		);

	return allPosts.filter((post): post is Post => post !== null);
}

export function getPostBySlug(slug: string): Post | null {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.md`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		const processedContent = remark()
			.use(remarkRehype) // Convert Markdown → HTML (via Rehype)
			.use(rehypeHighlight) // 🔥 Highlight code blocks
			.use(rehypeStringify) // Turn it into a string
			.processSync(content)
			.toString();

		return {
			slug,
			title: data.title,
			date: data.date,
			content: processedContent,
			tags: data.tags || [],
			category: data.category || "Uncategorized",
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error(error);
		return null;
	}
}
