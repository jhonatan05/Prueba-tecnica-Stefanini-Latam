import fs from 'fs'

export const deleteTask = async (req, res) => {

  try {
    fs.readFile('base_de_datos.json', (err, jsonData) => {
      if (err) {
        console.error('Error al crear el archivo:', err)
      } else {
        const data = JSON.parse(jsonData)
        const newData = data.filter((x) => x.id !== +req.params.id)
        
        fs.writeFile('base_de_datos.json', JSON.stringify(newData), (err) => {
          if (err) {
            console.error('Error al escribir en el archivo:', err)
          } else {
            console.log('Eliminado con éxito.')
            res.status(200).json(newData)
          }
        })
      }
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
