const ErrorHandler = require("../utils/errorhandler");
let catchasyncerrors = require("../middleware/catchasyncerror");

let User = require("../models/userModel");
const sendToken = require("../utils/jwttoken");


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

    sendToken(user,201,res)
})


// login user
exports.loginUser = catchasyncerrors(async (req, res, next) => {

    const {email, password} = req.body;

    if(!email || !password){return next(new ErrorHandler("Please Enter both email and password"),400)}

    const user = await User.findOne({email,}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid Email or password"),401)
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or password"),401)
    }

    sendToken(user,200,res)

})