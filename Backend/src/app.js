import express from 'express'
import taskRouter from './routes/task.router.js'
import cors from 'cors';
const app = express()

app.use(express.json())
app.use(cors())

app.use(taskRouter)

export default app