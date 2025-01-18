import app from './app.js'

const main = async() =>{
    try {
        // await sequelize.sync({force : true})
         app.listen(8080)
        console.log('Server is listening on port', 8080)
    } catch (error) {
        console.log("unable to connect to the database:", error)
    }
   
}

main()