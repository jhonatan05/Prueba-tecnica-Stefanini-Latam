import { writeFile, readFile } from '../utils/file.js'

export const createTask = async (req, res) => {
  try {
    const currentDate = new Date()
    const formatedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`

    const nuevoDato = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      createdAt: formatedDate,
    }

    let database = await readFile()
    const maxId = database.reduce((max, item) => (item.id > max ? item.id : max), 0)
    nuevoDato.id = maxId + 1
    database.push(nuevoDato)

    const completed = await writeFile(JSON.stringify(database))
    if (completed) {
      res.status(200).json({ message: 'Tarea agregada con éxito' })
    } else {
      return res.status(409).json({ message: 'No fue posible crear la tarea' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
