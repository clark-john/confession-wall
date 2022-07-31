import axios from 'axios'

interface ConfessionData {
	title: string;
	content: string;
	color: string;
	withWebsteLink: boolean;
	websiteName?: string;
	websiteLink?: string;
}

export const createConfession = async (data: ConfessionData) => {
	await axios.post(import.meta.env.VITE_SERVER_URL + "/create", {
		title: data.title,
		content: data.content,
		color: data.color,
		withWebsteLink: data.withWebsteLink,
		websiteName: data.withWebsteLink ? data.websiteName : null,
		websiteLink: data.withWebsteLink ? data.websiteLink : null
	})
}
