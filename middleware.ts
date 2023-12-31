import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
	// "/" will be accessible to all users
	publicRoutes: [
		"/api/posts",
		"/",
		"/movies",
		"/(api|trpc)(.*)",
		"/blog",
		"/category",
	],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
