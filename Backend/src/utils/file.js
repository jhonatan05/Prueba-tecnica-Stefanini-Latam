import fs from 'fs'

export const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('base_de_datos.json', 'utf-8', (err, jsonData) => {
      if (err) {
        console.error('Error al leer el archivo:', err)
        reject(err)
      } else {
        try {
          const data = JSON.parse(jsonData)
          resolve(data)
        } catch (parseError) {
          console.error('Error al parsear el archivo JSON:', parseError)
          reject(parseError)
        }
      }
    })
  })
}

export const writeFile = (arr) => {
  fs.writeFile('base_de_datos.json', arr, (err) => {
    if (err) {
      return console.error('Error al escribir en el archivo:', err)
    } else {
      return console.log('Archivo actualizado con éxito.')
    }
  })
}
