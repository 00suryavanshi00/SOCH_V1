const ErrorHandler = require("../utils/errorhandler");
let catchasyncerrors = require("../middleware/catchasyncerror");

let User = require("../models/userModel")


//Registering a user (SIGN UP)
exports.registerUser = catchasyncerrors(async(req,res,netx)=>{
    let {name, email, password} = req.body

    let user = await User.create({
        name, email, password,
        avatar:{
            public_id:"This is a sample id",
            url:"random url"
        }
    })


    res.status(201).json({
        success:true,
        user
    })
})