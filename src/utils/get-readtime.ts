export const getReadTime = (content: string) => {
	const words = content.trim().split(/\s+/).length;
	const time = Math.ceil(words / 200);
	return time;
};
