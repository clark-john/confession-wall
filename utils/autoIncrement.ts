import { PrismaClient } from '@prisma/client';

const autoIncrement = async (prisma: PrismaClient) => {
	const lookForId = await prisma.confession.findMany();
	let last: number;
	if (lookForId.length === 0) {
		last = 1;
	} else {
		const listLength = lookForId.length - 1;
		last = lookForId[listLength].id;
		last++;
	}
	return last;
};

export { autoIncrement };
