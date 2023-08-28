import React from "react";
import { ObjectId } from "bson";
import { DetailUser } from "./details";

function page() {
	const id = new ObjectId();
	// console.log();

	return (
		<div className="h-screen -[90%] m-auto my-5 flex flex-col items-center gap-5 py-3 font-Outfit font-bold text-[#0B1013]">
			<div className="text-2xl font-bold">Update user</div>
			<i>Please update account to continue.</i>
			<div>ID: {id?.toString()}</div>
			<DetailUser id={id?.toString()} />
		</div>
	);
}

export default page;
