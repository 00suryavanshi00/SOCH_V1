// let express = require("express");
// let app = express();
// // const uploadImage = require("./uploadImages.js")
// // const cors = require("cors");
// // const port= 3001

// app.use(express.json())
// //Routes Imports
// let story = require("./routes/storyRoute");

// app.use("/soch/v1",story)


// app.use(cors());
// app.use(express.json({limit:"25mb"}));
// app.use(express.urlencoded({limit:"25mb"}));
// app.use((req,res,next) =>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     next();
// });

// app.post("/uploadImages", (req,res) => {
//     uploadImage(req.body.image)
//     .then((url) => res.send(url))
//     .catch((err) => res.status(500).send(err));
// })


// app.listen(port,()=>{
//     console.log(`nodemailer project is listening at http://localhost:${port}`);
// });

// module.exports = app

let express = require("express");
let app = express();
let errorMiddleware = require("./middleware/error")
<<<<<<< HEAD
let cookieParser = require()
=======


>>>>>>> fb5069383d3207ef06f87dcdca2126faa459da6f

app.use
app.use(express.json())
//Routes Imports
let story = require("./routes/storyRoute");
let user = require("./routes/userRoute");

app.use("/soch/v1",story);
app.use("/soch/v1",user);
//Error middlewares
app.use(errorMiddleware);

module.exports = app