import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default defineEventHandler(async _event => {
	const confessions = await prisma.confession.findMany();
	confessions.reverse();
	return { confessions };
});
