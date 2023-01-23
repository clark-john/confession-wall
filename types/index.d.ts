interface Confession {
	id: number, 
	title: string, 
	content: string, 
	color: string, 
	withWebsite: boolean, 
	websiteName: string, 
	websiteLink: string
}

interface StackItem {
	name: string;
	alt: string;
	image: any;
	width?: number;
}

type FormValue = Omit<Confession, "id" | "color"> 

declare module "*.svg";
