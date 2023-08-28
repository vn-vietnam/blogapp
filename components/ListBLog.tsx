import { PostType } from "@/types/type";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const prisma = new PrismaClient();

const getData = async () => {
	const res = await fetch("http://localhost:3000/api/posts", {
		cache: "no-store",
	});

	if (!res.ok) {
		console.log("error");
	}

	return res.json();
};
const ListBLog = async () => {
	const posts: PostType = await getData();
	// console.log(posts);
	return (
		<>
			<>
				<div className="m-auto w-[90%] flex flex-col gap-10 my-5 py-5 ">
					<h1 className="font-Orbitron font-bold text-3xl uppercase">Top 10</h1>
					{posts?.map((e) => (
						<>
							<div
								key={e?.id}
								className="w-[100%] border-[1px] gap-5 flex flex-col md:flex-row flex-1 rounded-lg relative shadow-2xl shadow-slate-500"
							>
								<Image
									src={e?.image1 || ""}
									alt="img"
									// fill
									className="rounded-lg z-10 w-[100%] md:w-[15%]"
									height={100}
									// objectFit="cover"
									width={400}
								/>
								<div className="flex justify-around items-start flex-col font-Outfit z-10 p-3">
									<div className="uppercase font-bold ">
										{e?.name || "Not Set"}
									</div>
									<div>Description: {e?.shortContent || "Not Set"}</div>
									<div>Type: {e?.Category?.nameCate || "Not Set"}</div>
									<div>Time to read: {e?.timeRead || "Not Set"} mins</div>
									<div>Author: {e?.User?.name || "Not Set"}</div>
									<button className="border-[1px] border-black p-2 rounded-xl">
										<Link href={`/blog/${e?.id}`}>Read now</Link>
									</button>
								</div>

								<Image
									src={e?.image2 || ""}
									alt="img"
									fill
									className="rounded-lg z-0 opacity-40 object-cover"
								/>
							</div>
						</>
					))}
				</div>
			</>
		</>
	);
};

export default ListBLog;
