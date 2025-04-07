import { getAllPosts } from "@/lib/api";
import ClientBlogPage from "./client-page";

export default async function BlogPage() {
	const posts = getAllPosts();
	return <ClientBlogPage initialPosts={posts} />;
}
