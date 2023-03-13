let app = require("./app");
let dotenv = require("dotenv");
let connectDB = require("./config/database")

//configuration
dotenv.config({path:"./config/config.env"})

//database connection
connectDB()

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})
