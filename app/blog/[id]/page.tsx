import ListBLog from "@/components/ListBLog";
import { PostType } from "@/types/type";
import {
	BookmarkMinus,
	ChevronRight,
	Dot,
	Facebook,
	Instagram,
	Link2,
	PencilLine,
	Smile,
	TimerReset,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { auth, clerkClient } from "@clerk/nextjs";

const getData = async (id: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`,
		{
			cache: "no-store",
		}
	);

	if (!res.ok) {
		console.log("error");
		// throw new Error("Failed!");
	}

	return res.json();
};
// console.log(id);

const SinglePost = async ({ params }: { params: { id: string } }) => {
	const singlePost: PostType = await getData(params.id);
	// console.log(singlePost);
	return (
		<div className=" bg-[#FCFAF2] w-[90%] relative  h-fit m-auto py-5 flex flex-col gap-5 rounded-2xl">
			<div className="relative w-full h-[30vh] rounded-2xl">
				<Image
					src={singlePost?.image1 as string}
					className="rounded-2xl"
					objectFit="cover"
					alt={singlePost?.name as string}
					fill
				/>
			</div>
			<div className="flex uppercase font-mono font-bold">
				<Link href={"/"}>Home Page</Link>
				<ChevronRight />
				<Link href={`/type/${singlePost?.typeId}`}>
					{singlePost?.Type?.name}
				</Link>
			</div>
			<div className="flex font-Outfit gap-3">
				<TimerReset />
				<div>{singlePost?.timeRead} mins to read</div>
			</div>
			<div className="flex justify-between font-bold md:flex-row flex-col gap-3">
				<div className="font-Orbitron text-5xl">{singlePost?.name}</div>
				<div className="font-Outfit flex flex-col gap-3">
					<div className="flex gap-3">
						<PencilLine />
						<div>Author: {singlePost?.User?.name}</div>
					</div>
					<div className="flex gap-3">
						<BookmarkMinus />
						<div>Category: {singlePost?.Category?.nameCate}</div>
					</div>
				</div>
			</div>
			<div className="font-Outfit">
				Date: 23/04/2023 {singlePost?.createdAt}
			</div>
			<div className="flex font-Outfit gap-3">
				<div>Share with</div>
				<div className="flex gap-3">
					<Link href={`/type/${singlePost?.id}`}>
						<Link2 />
					</Link>
					<Link href={"/"}>
						<Facebook />
					</Link>
					<Link href={"/"}>
						<Instagram />
					</Link>
				</div>
			</div>
			<div className="relative md:w-[70%] w-full h-[20vh] m-auto rounded-2xl bg-red-300">
				<Image
					src={singlePost?.image2 as string}
					className="rounded-2xl"
					objectFit="cover"
					alt={singlePost?.name as string}
					fill
				/>
			</div>
			<div className="md:w-[70%]  m-auto py-5 font-sans">
				{singlePost.content}
			</div>
			<h1 className="font-Orbitron flex justify-end">
				Thank you for reading
				<Smile className="mx-2" color="green" />
			</h1>
		</div>
	);
};

export default SinglePost;
