import { JsonArray } from "@prisma/client/runtime/library";

export type PostType = {
	map(arg0: (e: any) => import("react").JSX.Element): import("react").ReactNode;
	id: String;
	name: String;
	content: String;
	shortContent: String;
	createdAt?: String;
	updatedAt?: String;
	timeRead: number;
	public: Boolean;
	image1?: String;
	image2?: String;
	categoryId: String;
	userId: String;
	typeId: String;
	Type: { name: String; id: String };
	User: { name: String };
	Category: { nameCate: String };
};

export type CategoryType = {
	map(arg0: (e: any) => import("react").JSX.Element): import("react").ReactNode;
	id: String;
	nameCate: String;
	posts: {
		map(arg0: (e: any) => import("react").JSX.Element): import("react").ReactNode;
		name: String;
		id: String;
		content: String;
		shortContent: String;
		timeRead: String;
		image1: String;
		image2: String;
	};
};

