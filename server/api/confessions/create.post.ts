import { ServerResponse } from 'http';
import { H3Event, send, readBody } from 'h3';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import chroma from 'chroma-js';
import { autoIncrement } from '../../../utils/autoIncrement';

const prisma = new PrismaClient();

const Confession = z.object({
	title: z.string().max(100),
	content: z.string().max(500),
	withWebsite: z.boolean(),
	websiteName: z.string().max(100).optional(),
	websiteLink: z.string().max(300).optional()
});

export default defineEventHandler(async (event: H3Event) => {
	const body: Confession = await readBody(event);
	const res: ServerResponse = event.node.res;
	let response: Record<string, any> = {};
	const sparse = Confession.safeParse(body);
	if (!body) {
		res.statusCode = 400;
		response = { error: "Body is required!" };
	} else if (!sparse.success) {
		res.statusCode = 400;
		response = { errors: sparse.error.errors };
	} else {
		const { content, title, websiteLink, websiteName, withWebsite } = body;
		await prisma.confession.create({
			data: {
				id: await autoIncrement(prisma),
				title,
				color: chroma.random().hex(),
				content,
				withWebsite,
				websiteLink,
				websiteName
			}
		});
		response = { status: "success" };
	}
	await send(event, JSON.stringify(response), "application/json");
});
