import { Router } from 'express'
import { getTasks } from '../controllers/getTask.controller.js'
import { createTask } from '../controllers/createTask.controller.js'
import { deleteTask } from '../controllers/deleteTask.controller.js'

const router = Router()

router.get('/tasks', getTasks)
router.post('/task', createTask)
router.delete('/task/:id', deleteTask)

export default router
