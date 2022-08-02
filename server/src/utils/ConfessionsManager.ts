import { PrismaClient } from '@prisma/client'
import { autoIncrement } from './autoIncrement'
import { ConfessionData } from './interfaces'
 
export class ConfessionsManager {
	prisma: PrismaClient
	constructor() {
		this.prisma = new PrismaClient()
	}
	public async create(data: ConfessionData) {
		if (data.withWebsteLink) {
			await this.prisma.confession.create({
				data: {
					id: await autoIncrement(),
					title: data.title,
					content: data.content,
					color: data.color,
					withWebsteLink: data.withWebsteLink,
					websiteName: data.websiteName,
					websiteLink: data.websiteLink
				}
			})
		}
		else {
			await this.prisma.confession.create({
				data: {
					id: await autoIncrement(),
					title: data.title,
					content: data.content,
					color: data.color,
					withWebsteLink: data.withWebsteLink,
				}
			})		
		}
	}
	public async getConfessions() {
		return await this.prisma.confession.findMany()
	}
}