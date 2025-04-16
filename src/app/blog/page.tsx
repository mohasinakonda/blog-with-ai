import { getAllPosts } from "@/lib/api";
import ClientBlogPage from "./client-page";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Blog",
	description: "",
	authors: [{ name: "Hazrat akonda" }],
};
export default async function BlogPage() {
	const posts = getAllPosts();
	return <ClientBlogPage initialPosts={posts} />;
}
