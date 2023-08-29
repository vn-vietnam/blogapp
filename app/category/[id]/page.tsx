"use client";
import { CategoryType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
// import { useParams } from "next/navigation";

const getData = async (id: string) => {
	// const param = useParams("");
	// console.log(param.id);
	const res = await fetch(`http://localhost:3000/api/category/${id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		console.log("error");
	}

	return res.json();
};
// eslint-disable-next-line @next/next/no-async-client-component
const CateSingle = async ({ params }: { params: { id: string } }) => {
	const cateSingle: CategoryType = await getData(params.id);
	// console.log(cateSingle);
	return (
		<div className="m-auto w-[90%] flex flex-col gap-10 my-5 py-5 ">
			{cateSingle?.map((x) => (
				<>
					<h1 className="font-Orbitron font-bold text-3xl uppercase">
						{x?.nameCate}
					</h1>
					{x?.posts?.map(
						(e: {
							id: any;
							image1: any;
							name: any;
							shortContent: any;
							Category: { nameCate: any };
							timeRead: any;
							User: { name: any };
							image2: any;
						}) => (
							<>
								<Link
									href={`/blog/${e?.id}`}
									key={e?.id}
									className="w-[100%] border-[1px] gap-5 flex flex-col md:flex-row flex-1 rounded-lg relative shadow-2xl shadow-slate-500 "
								>
									<>
										<Image
											src={e?.image1 || ""}
											alt="img"
											className="rounded-lg z-10 w-[100%] md:w-[15%]"
											height={100}
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
										</div>

										<Image
											src={e?.image2 || ""}
											alt="img"
											fill
											className="rounded-lg z-0 opacity-40 object-cover"
										/>
									</>
									;
								</Link>
							</>
						)
					)}
				</>
			))}
		</div>
	);
};
export default CateSingle;
