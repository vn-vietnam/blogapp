import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (
	req: NextRequest,
	{ params }: { params: { id: string } }
) => {
	const { id } = params;

	try {
		const product = await prisma.post.findUnique({
			where: {
				id: id,
			},
			include: {
				Category: {
					select: {
						nameCate: true,
					},
				},

				User: {
					select: {
						name: true,
					},
				},
				Type: true,
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
