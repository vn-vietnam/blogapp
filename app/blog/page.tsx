

import ListBLog from "@/components/ListBLog";
import Image from "next/image";

export default function Home() {
	return (
		<div className="h-[calc(screen-9vh)] bg-[#FCFAF2]">
			{/* <h1 className="font-Orbitron"> Welcome to my website.</h1> */}
			<ListBLog />
		</div>
	);
}
