import Image from "next/image";
import Link from "next/link";
import React from "react";

function Custom404() {
	return (
		<>
			<div className="flex h-[calc(100vh-9vh)] w-[70%] m-auto flex-col justify-center items-center gap-2 error-page">
				<div className="font-Orbitron text-4xl uppercase text-center">
					page not found
				</div>
				<div>
					Back to{" "}
					<Link href={"/"} className="underline underline-offset-2">
						{" "}
						Home Page
					</Link>
				</div>
				<Image src="/error.svg" alt="img" width={200} height={200} />
			</div>
		</>
	);
}

export default Custom404;
