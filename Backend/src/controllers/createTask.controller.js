import { writeFile, readFile } from '../utils/file.js'

export const createTask = async (request, response) => {
  try {
    const currentDate = new Date()
    const formatedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`

    const nuevaTarea = {
      id: request.body.id,
      title: request.body.title,
      description: request.body.description,
      createdAt: formatedDate,
    }

    let database = await readFile()
    const maxId = database.reduce((max, item) => (item.id > max ? item.id : max), 0)
    nuevaTarea.id = maxId + 1
    database.push(nuevaTarea)

    const completed = await writeFile(JSON.stringify(database))
    if (completed) {
      response.status(200).json({ message: 'Tarea agregada con éxito' })
    } else {
      return response.status(409).json({ message: 'No fue posible crear la tarea' })
    }
  } catch (error) {
    return response.status(500).json({ message: error.message })
  }
}
