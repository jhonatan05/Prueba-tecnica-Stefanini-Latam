import fs from 'fs'
import { writeFile, readFile } from '../utils/file.js'

export const createTask = async (req, res) => {
  try {
    const nuevoDato = { id: req.body.id, title: req.body.title, description: req.body.description }

    fs.readFile('base_de_datos.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err)
        return
      }
      let database = []
      try {
        database = JSON.parse(data)
      } catch (parseErr) {
        console.error('Error al analizar el JSON:', parseErr)
        return
      }
      const maxId = database.reduce((max, item) => (item.id > max ? item.id : max), 0)
      nuevoDato.id = maxId + 1
      database.push(nuevoDato)

      const jsonDataActualizado = JSON.stringify(database, null, 2)

      writeFile(jsonDataActualizado)
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
