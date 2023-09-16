import { CategoryType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`, {
		cache: "no-store",
	});

	if (!res.ok) {
		console.log("error");
	}

	return res.json();
};
const Category = async () => {
	const cate: CategoryType = await getData();
	return (
		<div className=" bg-[#FCFAF2]">
			<div className="w-[90%] m-auto flex flex-col gap-5 py-5">
				<h1 className="font-Orbitron font-bold text-3xl">Film genre</h1>
				{cate?.map((e: any) => {
					return (
						<>
							<Link
								href={`/category/${e?.id}`}
								className="flex w-full h-[5vh] imgSub "
							>
								<div className="flex flex-1  rounded-3xl border-[1px] border-black relative shadow-xl flex-row flex-wrap w-[30%] ">
									<div className="absolute bottom-[10%] left-[10%] flex flex-row ">
										<div className="text-2xl font-Orbitron font-bold text-black w-full uppercase">
											{e?.nameCate}
										</div>
									</div>
								</div>
							</Link>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Category;
