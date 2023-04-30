let express = require("express");
let app = express();
let errorMiddleware = require("./middleware/error")
let cookieParser = require()

app.use(cookieParser())
app.use(express.json())
//Routes Imports
let story = require("./routes/storyRoute");
let user = require("./routes/userRoute");

app.use("/soch/v1",story);
app.use("/soch/v1",user);
//Error middlewares
app.use(errorMiddleware);

module.exports = app