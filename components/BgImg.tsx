import React from "react";
import Link from "next/link";
function BgImg() {
	return (
		<div className="w-[90%] relative  h-fit m-auto rounded-xl py-5">
			<video
				autoPlay
				loop
				muted
				className="rounded-xl "
				about="video intro news + movies"
			>
				<source src="/video.mp4" />
			</video>
			<div className="absolute top-[20%] lg:top-[50%] left-[10%] font-Orbitron text-white text-[8px] sm:text-sm lg:text-3xl flex flex-col gap-3">
				<div className="font-bold">
					Keep up to date with the latest updates from us{" "}
				</div>
				<div className="font-bold">
					Breaking News, Latest News and Current News{" "}
				</div>
				<div className="font-bold">Find more ... </div>
				<div className="flex flex-row gap-3">
					<button className="border-[1px] rounded-xl p-2 hover:text-red-500 hover:border-red-500">
						<Link href={"/movies"}>Movies</Link>
					</button>
					<button className="border-[1px] rounded-xl p-2 hover:text-red-500 hover:border-red-500">
						<Link href={"/news"}>News</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default BgImg;
