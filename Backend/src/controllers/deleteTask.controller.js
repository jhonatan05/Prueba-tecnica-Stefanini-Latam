import { readFile, writeFile } from '../utils/file.js'

export const deleteTask = async (req, res) => {
  try {
    let database = await readFile()
    database = database.filter((task) => task.id !== +req.params.id)
    const completed = await writeFile(JSON.stringify(database))

    if (completed) {
      res.status(200).json(database)
    } else {
      res.status(409).json({ message: 'No fue posible eliminar la tarea' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
