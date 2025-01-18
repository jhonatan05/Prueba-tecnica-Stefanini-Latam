import { Router } from 'express'
const router = Router()
import { deleteTask } from '../controllers/deleteTask.controller.js'
import { getTasks } from '../controllers/getTask.controller.js'
import { createTask } from '../controllers/createTask.controller.js'

router.get('/tasks', getTasks)
router.post('/task', createTask)
router.delete('/task/:id', deleteTask)

export default router
