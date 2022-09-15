import { PrismaClient } from '@prisma/client';

const autoIncrement = async (prisma: PrismaClient) => {
	let lookForId = await prisma.confession.findMany();
	let last: number;
	if (lookForId.length == 0){
		last = 1;
	} else {
		let listLength = lookForId.length - 1;
		last = lookForId[listLength].id;
		last++;
	}
	return last;
};

export { autoIncrement };
