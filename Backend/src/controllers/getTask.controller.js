import { readFile } from '../utils/file.js'
export const getTasks = async (req, res) => {
  try {
    const data = await readFile()
    if (!data) {
      return res.status(404).json({ message: 'No se encontraron tareas' })
    }
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
