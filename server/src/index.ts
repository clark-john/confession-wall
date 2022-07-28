import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'

// import { ConfessionsManager } from './utils/ConfessionsManager'

const app = express()
const port = 4000

// const confman = new ConfessionsManager()

app.get('/', async (req: Request, res: Response) => {
	res.send("Hello World")
})

app.listen(port, () => {
	console.log("Server listening to port " + port)
})
