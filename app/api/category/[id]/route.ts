import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (
	req: NextRequest,
	{ params }: { params: { id: string } }
) => {
	const { id } = params;

	try {
		const product = await prisma.category.findMany({
			where: {
				id: id,
			},
			include: {
				posts: true,
			},
		});

		return new NextResponse(JSON.stringify(product), { status: 200 });
	} catch (err) {
		console.log(err);
		return new NextResponse(
			JSON.stringify({ message: "Something went wrong!" }),
			{ status: 500 }
		);
	}
};
