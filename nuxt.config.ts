import path from 'path';

export default defineNuxtConfig({
	ssr: false,
	vite: {
		optimizeDeps: {
			entries: ["naive-ui"]
		},
		resolve: {
			alias: [
				{
					find: "assets",
					replacement: path.resolve(__dirname, "assets")
				}
			]
		}
	},
	typescript: {
		typeCheck: true,
		strict: true
	},
	routeRules: {
		"/": { redirect: "/welcome" }
	}
});
