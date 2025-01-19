import app from './app.js'

const main = async () => {
  try {
    app.listen(8080)
    console.log('Server is listening on port', 8080)
  } catch (error) {
    console.error('unable to connect to the database:', error)
  }
}

main()
