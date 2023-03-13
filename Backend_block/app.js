let express = require("express");
let app = express();

app.use(express.json())
//Routes Imports
let story = require("./routes/storyRoute");

app.use("/soch/v1",story)



module.exports = app