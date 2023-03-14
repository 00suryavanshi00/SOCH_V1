let express = require("express");
let app = express();
let errorMiddleware = require("./middleware/error")



app.use(express.json())
//Routes Imports
let story = require("./routes/storyRoute");

app.use("/soch/v1",story)

//Error middlewares
app.use(errorMiddleware);

module.exports = app