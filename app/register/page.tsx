import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
	return (
		<section className="h-screen">
			<div className="h-full">
				<div className="g-6 flex h-full flex-wrap items-center justify-center ">
					<div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
						<form>
							<Image
								src={"/cf.svg"}
								alt=""
								width={100}
								height={100}
								className="m-auto py-5"
							/>

							<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
								<div className="px-3 font-Orbitron font-bold">Register</div>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="text"
									className=" peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
									placeholder="Email address"
								/>
							</div>

							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="password"
									className="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
									placeholder="Password"
								/>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="text"
									className="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
									placeholder="User Name"
								/>
							</div>
							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="text"
									className="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "
									placeholder="Name"
								/>
							</div>

							<div className="text-center ">
								<button
									type="button"
									className="border-[1px] inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
									data-te-ripple-init
									data-te-ripple-color="light"
								>
									Register
								</button>

								<p className="mb-0 mt-2 pt-1 text-sm font-semibold">
									Sign in now ?
									<Link
										href="/login"
										className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
									>
										{" "}
										Login
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
