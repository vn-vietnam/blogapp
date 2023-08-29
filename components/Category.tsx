import Image from "next/image";
import React from "react";
import Link from "next/link";

function Category() {
	return (
		<div className="w-[90%] h-[80vh]  m-auto flex flex-col gap-5 py-5">
			<h1 className="font-Orbitron font-bold text-3xl">Film genre</h1>
			<div className="flex w-full h-[70%]  gap-5">
				<div className="flex flex-1 h-full rounded-3xl border-[1px] border-black relative shadow-xl">
					<Image
						fill={true}
						className="object-cover rounded-3xl"
						alt=""
						src={
							"https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvcnJvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
						}
					/>
					<div className="absolute bottom-[10%] left-[10%] flex flex-col gap-2">
						<div className="text-2xl font-Orbitron font-bold text-white">
							Romantic
						</div>
						<Link href={"/category/64e831d34cdf2ea193abdc81"}>
							<button className="text-center hover:opacity-80 uppercase h-[6vh] rounded-full w-[100%] px-4 border-[1px] font-Alegreya  text-black font-bold border-black outline-none">
								Watch now
							</button>
						</Link>
					</div>
				</div>
				<div className="flex flex-1 h-full rounded-3xl border-[1px] border-black relative shadow-xl">
					<Image
						fill={true}
						className="object-cover rounded-3xl"
						alt=""
						src={
							"https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWN0aW9uJTIwbW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
						}
					/>
					<div className="absolute bottom-[10%] left-[10%] flex flex-col gap-2">
						<div className="text-2xl font-Orbitron font-bold text-white">
							Action film
						</div>
						<Link href={"/category/64e831cd4cdf2ea193abdc7d"}>
							<button className="text-center hover:opacity-80 uppercase h-[6vh] rounded-full w-[100%] px-4 border-[1px] font-Alegreya  text-black font-bold border-black outline-none">
								Watch now
							</button>
						</Link>
					</div>
				</div>
				<div className="flex flex-1 h-full rounded-3xl border-[1px] border-black relative shadow-xl">
					<Image
						fill={true}
						className="object-cover rounded-3xl"
						alt=""
						src={
							"https://images.unsplash.com/photo-1563905463861-7d77975b3a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRocmlsbGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
						}
					/>
					<div className="absolute bottom-[10%] left-[10%] flex flex-col gap-2">
						<div className="text-2xl font-Orbitron font-bold text-white">
							Thriller
						</div>
						<Link href={"/category/64e831f04cdf2ea193abdc86"}>
							<button className="text-center hover:opacity-80 uppercase h-[6vh] rounded-full w-[100%] px-4 border-[1px] font-Alegreya text-black font-bold border-black outline-none">
								Watch now
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex w-full h-[30%] border-[1px] border-black rounded-3xl relative shadow-xl">
				<Image
					fill={true}
					className="object-cover rounded-3xl"
					alt=""
					src={
						"https://plus.unsplash.com/premium_photo-1664529914557-ee01920185e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9tYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
					}
				/>
				<div className="absolute bottom-[10%] left-[10%] flex flex-col gap-2">
					<div className="text-2xl font-Orbitron font-bold text-white">
						See More
					</div>
					<Link href={"/category"}>
						<button className="text-center hover:opacity-80 uppercase h-[6vh] rounded-full w-[100%] px-4 border-[1px] font-Alegreya text-black font-bold  border-black outline-none">
							Watch now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Category;
