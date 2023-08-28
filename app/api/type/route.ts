import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL POSTS
export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.url);
	// const cat = searchParams.get("blog");

	try {
		const products = await prisma.type.findMany({
			// where: {
			// 	...(cat ? { postSlug: cat } : { feature: true }),
			// },
		});
		return new NextResponse(JSON.stringify(products), { status: 200 });
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};

