"use client";
import axios from "axios";
import React, { useState } from "react";
import { useOrganization, useSession, useUser } from "@clerk/nextjs";
import Loading from "./Loading";
import Image from "next/image";
import { Router } from "next/router";
import { CategoryType } from "@/types/type";

const types = [
	{
		id: "64e8321e4cdf2ea193abdc8f",
		name: "Top 10",
	},
	{
		id: "64e832304cdf2ea193abdc96",
		name: "Top 20",
	},
];

const categories = [
	{
		id: "64e831cd4cdf2ea193abdc7d",
		name: "Action",
	},
	{
		id: "64e831d34cdf2ea193abdc81",
		name: "Romantic",
	},
	{
		id: "64e831f04cdf2ea193abdc86",
		name: "Thirrler",
	},
];

type Inputs = {
	name: string;
	content: string;
	shortContent: string;
	timeRead: Number;
};

export const Get = async () => {
	const getData = async () => {
		const res = await fetch(`http://localhost:3000/api/category`, {
			cache: "no-store",
		});

		if (!res.ok) {
			console.log("error");
			// throw new Error("Failed!");
		}

		return res.json();
	};
	const categories = await getData();
	// console.log(categories);

	return categories;
};

function Writing() {
	const [file1, setFile1] = useState<File>();
	const [select, setSelect] = useState("64e831cd4cdf2ea193abdc7d");
	const [type, setType] = useState("64e8321e4cdf2ea193abdc8f");
	const [inputs, setInputs] = useState<Inputs>({
		name: "",
		content: "",
		shortContent: "",
		timeRead: 0,
	});
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setInputs((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
				timeRead: Number(e.target.value),
			};
		});
	};
	// console.log(inputs);
	const handleChangeImg1 = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const item = (target.files as FileList)[0];
		setFile1(item);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData();
		data.append("file", file1!);
		data.append(
			"upload_preset",
			process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
		);
		data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!);
		data.append("folder", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

		try {
			const response = await fetch(
				`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
				{
					method: "POST",
					body: data,
				}
			);
			const res = await response.json();
			console.log(res.url);
			axios
				.post("http://localhost:3000/api/posts", {
					...inputs,
					image1: res.url,
					image2: res.url,
					categoryId: select,
					typeId: type,
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
		} catch (error) {
			console.log(error);
		}

		// Router.push(`/product/${data?.id}`);
		// } catch (err) {
		// 	console.log(err);
		// }
	};

	// console.log(data);
	const { isLoaded, user } = useUser();
	// console.log(select);
	return (
		<>
			{isLoaded ? (
				<>
					<form
						onSubmit={handleSubmit}
						className="w-[90%]  m-auto flex flex-col gap-3"
					>
						<h1 className="m-auto font-Orbitron text-3xl my-5 font-bold">
							Writing blog
						</h1>
						<div className="relative mb-6 ">
							<div className="mt-1 text-sm  text-gray-600 relative sm:mt-0 sm:col-span-2">
								<Image
									src={user?.imageUrl}
									width={30}
									height={30}
									alt="image"
									className="rounded-full w-12 h-12"
								/>
							</div>
						</div>
						<div className="relative mb-6 ">ID: {user?.id}</div>
						<div className="relative mb-6 ">First Name: {user?.firstName}</div>
						<div className="relative mb-6 ">Last Name: {user?.lastName}</div>

						{user?.emailAddresses?.map((email) => (
							<div key={email?.id} className="flex gap-2 mb-1">
								Email: {email?.emailAddress}
								{user?.primaryEmailAddressId === email?.id && (
									<span className="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
										Primary
									</span>
								)}
							</div>
						))}
						<div className="relative mb-6" data-te-input-wrapper-init>
							<input
								name="name"
								onChange={handleChange}
								type="text"
								className="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
								placeholder="Name"
							/>
						</div>
						<div className="relative mb-6" data-te-input-wrapper-init>
							<input
								name="content"
								onChange={handleChange}
								type="text"
								className="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
								placeholder="Content"
							/>
						</div>
						<div className="relative mb-6" data-te-input-wrapper-init>
							<input
								name="shortContent"
								onChange={handleChange}
								type="text"
								className="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
								placeholder="Short Content"
							/>
						</div>
						<div className="relative mb-6" data-te-input-wrapper-init>
							<input
								name="timeRead"
								onChange={handleChange}
								type="text"
								className="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
								placeholder="Time read"
							/>
						</div>
						<input
							type="file"
							className="bg-red-400 w-fit"
							id="file"
							onChange={handleChangeImg1}
						/>
						<p>Category</p>

						<select id="category" onChange={(e) => setSelect(e.target.value)}>
							<option value="64e831cd4cdf2ea193abdc7d">Action</option>
							<option value="64e831d34cdf2ea193abdc81">Romantic</option>
							<option value="64e831f04cdf2ea193abdc86">Thirrler</option>
						</select>
						<select id="type" onChange={(e) => setType(e.target.value)}>
							<option value="64e8321e4cdf2ea193abdc8f">Top 10</option>
							<option value="64e832304cdf2ea193abdc96">Top 20</option>
						</select>
						{/* <input
							type="file"
							className="bg-red-400 w-fit"
							id="file"
							onChange={handleChangeImg2}
						/> */}
						<button
							className="border-[1px] border-black p-2 rounded-xl w-[10vh] mx-auto my-5 "
							type="submit"
						>
							Submit
						</button>
					</form>
				</>
			) : (
				<>
					<Loading />
				</>
			)}
		</>
	);
}

export default Writing;
