import BgImg from "@/components/BgImg";
import Category from "@/components/Category";
import ListBLog from "@/components/ListBLog";
import ListMovies from "@/components/ListMovies";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";


export default function Home() {

	return (
		<div className="h-[calc(screen-9vh)] bg-[#FCFAF2]">
			{/* <h1 className="font-Orbitron"> Welcome to my website.</h1> */}
			<BgImg />
			{/* <ListMovies /> */}
			<Category />
			<ListBLog />
			<Subscribe />
		</div>
	);
}
