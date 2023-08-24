import { ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<div className="w-[90%] m-auto">
			<div className="h-[3vh] w-full border-black border-t-[1px] m-auto pt-2 text-center items-center justify-around flex bg-[#FCFAF2]">
				<div className="font-Alegreya">@NTK - 2023</div>

				<div className="gap-5 flex flex-row  justify-center items-center">
					<Link href={"https://github.com/vn-vietnam"}>
						<Github
							// color="black"
							size={20}
							className="rounded-full  border-[1px] p-[2px] border-black hover:cursor-pointer hover:text-red-700 "
						/>
					</Link>
					<Link
						href={
							"https://www.linkedin.com/in/ki%C3%AAn-nguy%E1%BB%85n-trung-1b95a1269/"
						}
					>
						<Linkedin
							// color="black"
							size={20}
							className="rounded-full border-[1px] p-[2px] border-black hover:cursor-pointer hover:text-red-700 "
						/>
					</Link>
					<Link href={"https://pleiku.site"}>
						<ExternalLink
							// color="black"
							size={20}
							className="rounded-full border-[1px] p-[2px] border-black hover:cursor-pointer hover:text-red-700 "
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
