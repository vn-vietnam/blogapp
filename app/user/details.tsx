"use client";

import { useUser } from "@clerk/nextjs";
import Loading from "./Loading";
import Image from "next/image";
import { FormEventHandler, MouseEventHandler } from "react";
import axios from "axios";
export async function DetailUser(id: any) {
	const { isLoaded, user } = useUser();
	// console.log(id?.id);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log("hello");
		axios
			.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
				id: id?.id,
				image: user?.imageUrl,
				name: user?.fullName,
				username: user?.emailAddresses?.[0]?.emailAddress,
				email: user?.emailAddresses?.[0]?.emailAddress,
			})
			.then(function (response) {
				// handle success
				console.log(response);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};
	return (
		<>
			{isLoaded ? (
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-5 font-Outfit  m-auto "
				>
					<Image
						src={user?.imageUrl as string}
						width={30}
						height={30}
						alt="image"
						className="rounded-full w-20 h-20 m-auto"
					/>
					<div>Name: {user?.fullName}</div>
					<div>Email: {user?.emailAddresses?.[0]?.emailAddress}</div>
					<div>UserName: {user?.emailAddresses?.[0]?.emailAddress}</div>
					<button
						type="submit"
						className="border-[1px] rounded-lg border-black p-2"
					>
						Submit
					</button>
				</form>
			) : (
				<>
					<Loading />
				</>
			)}
		</>
	);
}
