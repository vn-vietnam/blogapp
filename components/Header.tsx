import { Popcorn, Newspaper, Projector, Flame, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileList from "./MobileList";
import BtnSearch from "./BtnSearch";

function Header() {
	return (
		<div className="bg-[#FCFAF2]">
			<div className="h-[6vh] w-[90%] m-auto flex justify-between py-3 font-Outfit font-bold text-[#0B1013]  ">
				<Link href={"/"}>
					<Image
						src="/cf.svg"
						alt="logo"
						color="#FFFFFB"
						className=""
						width={50}
						height={50}
					/>
				</Link>
				<div className="sm:flex flex-row gap-3 hidden">
					<BtnSearch />
					<Link href={"/movies"} className="flex gap-1 ">
						<div>Movies</div>
						<Popcorn
							color="#34a359"
							className="hover:animate-bounce hidden lg:block"
						/>
					</Link>
					<Link href={"/news"} className="flex gap-1">
						<div>News</div>
						<Newspaper
							color="#d4d4d4"
							className="hover:animate-bounce hidden lg:block"
						/>
					</Link>
					<Link href={"/cinema"} className="flex gap-1">
						<div>Cinema</div>

						<Projector
							color="#10aae7"
							className="hover:animate-bounce hidden lg:block"
						/>
					</Link>
					<Link href={"/hot-trend"} className="flex gap-1">
						<div>Hot Trend</div>

						<Flame
							color="#ff0000"
							className="hover:animate-bounce hidden lg:block"
						/>
					</Link>
				</div>
				<div className="sm:hidden">
					<MobileList />
				</div>
			</div>
		</div>
	);
}

export default Header;
