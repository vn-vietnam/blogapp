import Image from "next/image";
import Link from "next/link";
import React from "react";

function ListMovies() {
	return (
		<div className="rounded-xl  m-auto w-[90%] flex flex-col gap-5 my-5 py-5 bg-[#FCFAF2] ">
			<div className="flex justify-between">
				<h1 className="font-Orbitron font-bold text-3xl">MOVIES</h1>
				<Link href={"/"} className="font-Orbitron font-bold text-lg">
					Watch more
				</Link>
			</div>

			<div className="flex xl:flex-row flex-col gap-5">
				<div className="flex xl:w-[80%] w-[100%] flex-wrap gap-5 ">
					<Link
						href={"/"}
						className="hover:opacity-80 flex rounded-lg border-black shadow-2xl  border-2 w-[20vh] h-[30vh] relative flex-col"
					>
						<Image
							src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							// fill
							className="rounded-t-lg"
							height={100}
							objectFit="cover"
							width={200}
						/>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
					<Link
						href={"/"}
						className="hover:opacity-80 flex rounded-lg border-black shadow-2xl  border-2 w-[20vh] h-[30vh] relative flex-col"
					>
						<Image
							src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							// fill
							className="rounded-lg"
							height={100}
							objectFit="cover"
							width={200}
						/>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
					<Link
						href={"/"}
						className="hover:opacity-80 flex rounded-lg border-black shadow-2xl  border-2 w-[20vh] h-[30vh] relative flex-col"
					>
						<Image
							src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							// fill
							className="rounded-lg"
							height={100}
							objectFit="cover"
							width={200}
						/>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
					<Link
						href={"/"}
						className="hover:opacity-80 flex rounded-lg border-black shadow-2xl  border-2 w-[20vh] h-[30vh] relative flex-col"
					>
						<Image
							src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							// fill
							className="rounded-lg"
							height={100}
							objectFit="cover"
							width={200}
						/>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
					<Link
						href={"/"}
						className="hover:opacity-80 flex rounded-lg border-black shadow-2xl  border-2 w-[20vh] h-[30vh] relative flex-col"
					>
						<Image
							src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							// fill
							className="rounded-lg"
							height={100}
							objectFit="cover"
							width={200}
						/>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
					<Link
						href={"/"}
						className="hover:opacity-80 flex rounded-lg border-black shadow-2xl  border-2 w-[20vh] h-[30vh] relative flex-col"
					>
						<Image
							src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							// fill
							className="rounded-lg"
							height={100}
							objectFit="cover"
							width={200}
						/>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
					<Link
						href={"/"}
						className="hover:opacity-80 flex rounded-lg border-black shadow-2xl  border-2 w-[20vh] h-[30vh] relative flex-col"
					>
						<Image
							src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							// fill
							className="rounded-lg"
							height={100}
							objectFit="cover"
							width={200}
						/>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
					<Link
						href={"/"}
						className="hover:opacity-80 flex rounded-lg border-black shadow-2xl  border-2 w-[20vh] h-[30vh] relative flex-col"
					>
						<Image
							src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt=""
							// fill
							className="rounded-lg"
							height={100}
							objectFit="cover"
							width={200}
						/>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
				</div>
				<div className="flex xl:w-[20%] gap-3  w-[100%] flex-col overflow-y-auto h-[70vh] pr-2">
					<h1 className="font-Orbitron font-bold text-xl">TOP MOVIES</h1>
					<Link href={"/"} className="hover:opacity-80 border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-s-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</Link>
					<div className="border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</div>
					<div className="border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</div>
					<div className="border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</div>
					<div className="border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</div>
					<div className="border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</div>
					<div className="border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</div>
					<div className="border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</div>
					<div className="border-[1px] w-[full] h-[15vh] flex relative border-black rounded-lg">
						<div className="w-[50%] h-full relative">
							<Image
								src="https://images.unsplash.com/photo-1590989995833-0c3649cc6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGMlMjBzdHVkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								fill
								className="rounded-lg"
								// height={100}
								objectFit="cover"
								// width={200}
							/>
						</div>
						<div className="flex flex-col justify-around items-start p-2 font-Outfit font-bold">
							<div>Thor 3</div>
							<div>Time: 230 mins</div>
							<div>Action</div>
						</div>
						<div className="absolute top-2 left-2 rounded-full border-black border-[1px] font-Alegreya p-1">
							6.5
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListMovies;
