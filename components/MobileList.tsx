"use client";
import React, { useState } from "react";
import {
	Popcorn,
	Newspaper,
	Projector,
	Flame,
	List,
	XCircle,
} from "lucide-react";

import Link from "next/link";

function MobileList() {
	const [open, setOpen] = useState(false);
	console.log(open);
	return (
		<div className="">
			<div className="z-20">
				<List color="#ff0000" className="" onClick={() => setOpen(!open)} />
			</div>
			{open ? (
				<>
					<div className="absolute top-0 right-0 w-full bg-[#BDC0BA] h-full z-10 flex flex-col justify-center items-center gap-5">
						<Link
							href={"/"}
							className="flex gap-1 "
							onClick={() => setOpen(false)}
						>
							<div>Home Page</div>
						</Link>
						<Link
							href={"/movies"}
							className="flex gap-1 "
							onClick={() => setOpen(false)}
						>
							<div>Movies</div>
						</Link>
						<Link
							href={"/news"}
							className="flex gap-1"
							onClick={() => setOpen(false)}
						>
							<div>News</div>
						</Link>
						<Link
							href={"/cinema"}
							className="flex gap-1"
							onClick={() => setOpen(false)}
						>
							<div>Cinema</div>
						</Link>
						<Link
							href={"/hot-trend"}
							className="flex gap-1"
							onClick={() => setOpen(false)}
						>
							<div>Hot Trend</div>
						</Link>
						<XCircle
							color="#ff0000"
							className="hover:cursor-pointer"
							onClick={() => setOpen(!open)}
						/>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}

export default MobileList;
