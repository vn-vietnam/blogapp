import React from "react";

import Image from "next/image";
function Subscribe() {
	return (
		<div className="h-[100vh] sm:h-[150vh] lg:h-[55vh] m-auto w-[90%] flex lg:flex-row flex-col gap-10 my-5">
			<div className="flex flex-1 ml-[10%]  relative boxSub ">
				<Image
					src={
						"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
					}
					className="absolute top-[10%] left-[-10%] imgSub"
					alt=""
					width={600}
					height={100}
				/>
				{/* <div className="flex items-center justify-center gap-4  flex-col  ">
					<div className="bg-green-300  ">You Are Not Just Talented. You Are Spiritually Gifted</div>
					<button>Read Now</button>
				</div> */}
			</div>
			<div className="flex flex-1  flex-col gap-5 text-xl font-Alegreya px-10">
				<div>Subscribe and Grow Weekly</div>
				<div>
					Get weekly encouragement delivered straight to your inbox when you
					subscribe to our newsletter.
				</div>
				<input
					type="text"
					className="h-[6vh] rounded-full w-[80%] pl-5 border-[1px] border-black outline-none"
					placeholder="NAME"
				/>
				<input
					type="text"
					className="h-[6vh] rounded-full w-[80%] pl-5 border-[1px] border-black outline-none"
					placeholder="EMAIL ADDRESS"
				/>
				<button className="btn text-center hover:opacity-80 uppercase h-[6vh] rounded-full w-[80%] pl-5 border-[1px] font-Alegreya bg-black text-white border-black outline-none">
					Subcribe Now
				</button>
			</div>
		</div>
	);
}

export default Subscribe;
