import "./globals.css";
import type { Metadata } from "next";
import "../styles/style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	icons: "/cf.svg",
	title: "Blog Films",
	description:
		"The website provides all information about movies and characters, fast and easy to access anywhere.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-[#FCFAF2]">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
