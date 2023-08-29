"use client";
import { CategoryType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
const people = [
	{
		name: "Leslie Alexander",
		email: "leslie.alexander@example.com",
		role: "Co-Founder / CEO",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		lastSeen: "3h ago",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Michael Foster",
		email: "michael.foster@example.com",
		role: "Co-Founder / CTO",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		lastSeen: "3h ago",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Dries Vincent",
		email: "dries.vincent@example.com",
		role: "Business Relations",
		imageUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		lastSeen: null,
	},
	{
		name: "Lindsay Walton",
		email: "lindsay.walton@example.com",
		role: "Front-end Developer",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		lastSeen: "3h ago",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Courtney Henry",
		email: "courtney.henry@example.com",
		role: "Designer",
		imageUrl:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		lastSeen: "3h ago",
		lastSeenDateTime: "2023-01-23T13:23Z",
	},
	{
		name: "Tom Cook",
		email: "tom.cook@example.com",
		role: "Director of Product",
		imageUrl:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		lastSeen: null,
	},
];
const getData = async () => {
	const param = useParams();
	// console.log(param.id);
	const res = await fetch(`http://localhost:3000/api/category/${param.id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		console.log("error");
	}

	return res.json();
};
// eslint-disable-next-line @next/next/no-async-client-component
const CateSingle = async () => {
	const cateSingle: CategoryType = await getData();
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
