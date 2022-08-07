import axios from 'axios'
import { getConfessions } from './getConfessions'

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
		withWebsite: data.withWebsite,
		websiteName: data.withWebsite ? data.websiteName : null,
		websiteLink: data.withWebsite ? data.websiteLink : null
	})
	document.location.reload()
}
