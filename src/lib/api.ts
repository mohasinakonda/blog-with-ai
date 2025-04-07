import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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
		.sort((post1, post2) => (post1?.date > post2.date ? -1 : 1));

	return allPosts;
}

export function getPostBySlug(slug: string): Post | null {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.md`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		const processedContent = remark().use(html).processSync(content).toString();

		return {
			slug,
			title: data.title,
			date: data.date,
			content: processedContent,
			tags: data.tags || [],
			category: data.category || 'Uncategorized',
		};
	} catch (error) {
		return null;
	}
}
