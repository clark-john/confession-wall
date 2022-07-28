import axios from 'axios'

interface ConfessionData {
	title: string;
	content: string;
	withWebsteLink: boolean;
	websiteName?: string;
	websiteLink?: string;
}

export const createConfession = async (data: ConfessionData) => {
	// import.meta.env.SERVER_URL
}