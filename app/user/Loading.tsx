import Image from "next/image";
import React from "react";

function Loading() {
	return (
		<>
			<div className="flex h-[calc(100vh-9vh)] w-full flex-col justify-center items-center gap-2">
				<div className="font-Orbitron text-2xl uppercase text-center">
					Loading ...
				</div>
			
				<Image src="/line.svg" alt="img" width={100} height={100} />
			</div>
		</>
	);
}

export default Loading;
