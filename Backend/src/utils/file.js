import fs from 'fs'

export const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('database.json', 'utf-8', (err, jsonData) => {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(jsonData))
      }
    })
  })
}

export const writeFile = (arr) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('database.json', arr, (err) => {
      if (err) {
        return reject(false)
      } else {
        return resolve(true)
      }
    })
  })
}
