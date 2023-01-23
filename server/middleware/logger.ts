import { H3Event, getMethod } from 'h3';

export default defineEventHandler((event: H3Event) => {
	setTimeout(() => {
		const status = event.node.res.statusCode;
		const method = getMethod(event);
		const path = event.path;
		/* eslint-disable no-console */
		console.log(`${status} ${method} ${path}`);
	}, 1);
});
