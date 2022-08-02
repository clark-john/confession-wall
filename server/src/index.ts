import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { ConfessionsManager } from './utils/ConfessionsManager'

const app = express()
const port = 4000

const confman = new ConfessionsManager()

app.use([
	cors(),
	morgan('dev'),
	express.json()
])

app.get('/', async (req: Request, res: Response) => {
	res.send("Hello World")
})

app.post('/create', async (req: Request, res: Response) => {
	await confman.create(req.body)
	res.end()
})

app.get('/confessions', async (req: Request, res: Response) => {
	res.send(await confman.getConfessions())
})

app.listen(port, () => {
	console.log("Server listening to port " + port)
})
