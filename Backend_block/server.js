let app = require("./app");
let dotenv = require("dotenv");
let connectDB = require("./config/database")


//Handling uncaught exception

process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception")
    process.exit(1);
})



//configuration
dotenv.config({path:"./config/config.env"})

//database connection
connectDB()

let server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})



//unhandled promise rejection

process.on("unhandledRejection",error=>{
    console.log(`Error : ${error.message}`);
    console.log("Shutting down the server due to unhandled promise rejection")


    server.close(()=>{
        process.exit(1)
    })


})
