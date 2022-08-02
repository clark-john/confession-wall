import axios from 'axios'

export const getConfessions = async (): Promise<Object[]> => {
	return (await axios.get(import.meta.env.VITE_SERVER_URL + "/confessions")).data
}
