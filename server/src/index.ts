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

app.post('/create', (req: Request, res: Response) => {
	console.log(req.body) 
	res.end()
	// res.sendStatus(401)
})

app.listen(port, () => {
	console.log("Server listening to port " + port)
})
