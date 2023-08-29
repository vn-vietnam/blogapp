"use client";
import {
	Popcorn,
	Newspaper,
	Projector,
	Flame,
	List,
	Key,
	Pen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileList from "./MobileList";
import BtnSearch from "./BtnSearch";
import { auth, clerkClient } from "@clerk/nextjs";
import { useOrganization, useSession, useUser } from "@clerk/nextjs";
import { ObjectId } from "bson";
import {
	ClerkProvider,
	OrganizationSwitcher,
	SignedIn,
	UserButton,
} from "@clerk/nextjs";
import axios from "axios";

function Header() {
	const { isLoaded, user } = useUser();

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
					<Link href={"https://enchanting-creponne-1c1ea8.netlify.app/"} className="flex gap-1 ">
						<div>Movies</div>
						<Popcorn
							color="#34a359"
							className="hover:animate-bounce hidden lg:block"
						/>
					</Link>
					<Link href={"/category"} className="flex gap-1">
						<div>Category</div>
						<Newspaper
							color="#d4d4d4"
							className="hover:animate-bounce hidden lg:block"
						/>
					</Link>
					<Link href={"/blog"} className="flex gap-1">
						<div>Blog</div>

						<Projector
							color="#10aae7"
							className="hover:animate-bounce hidden lg:block"
						/>
					</Link>
					{user ? (
						<>
							<Link href={"/ticket"} className="flex gap-1">
								<div>Ticket</div>

								{/* <Flame
							color="#ff0000"
							className="hover:animate-bounce hidden lg:block"
						/> */}
								<Pen
									color="#ff0000"
									className="hover:animate-bounce hidden lg:block"
								/>
							</Link>
						</>
					) : (
						<>
							<Link href={"/dashboard"} className="flex gap-1">
								<div>Login</div>

								{/* <Flame
							color="#ff0000"
							className="hover:animate-bounce hidden lg:block"
						/> */}
								<Key
									color="#ff0000"
									className="hover:animate-bounce hidden lg:block"
								/>
							</Link>
						</>
					)}

					<SignedIn>
						<div className="hidden sm:block">
							<OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
						</div>
						<div className="block sm:hidden">
							<OrganizationSwitcher
								afterCreateOrganizationUrl="/dashboard"
								appearance={{
									elements: {
										organizationSwitcherTriggerIcon: `hidden`,
										organizationPreviewTextContainer: `hidden`,
										organizationSwitcherTrigger: `pr-0`,
									},
								}}
							/>
						</div>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
				</div>
				<div className="sm:hidden">
					<MobileList />
				</div>
			</div>
		</div>
	);
}

export default Header;
