import { Search } from "lucide-react";
import React from "react";

function BtnSearch() {
	return (
		<div className="flex gap-2 justify-end ">
			<input type="search" className="border-[2px] rounded-lg  px-2 h-7 flex  lg:block lg:w-[80%] " placeholder="Search ..."/>
			<Search />
		</div>
	);
}

export default BtnSearch;
