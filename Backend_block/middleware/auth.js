const ErrorHandler = require("../utils/errorhandler");
const catchasyncerror = require("./catchasyncerror");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchasyncerror(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please login to access this resource"),401);
    }


    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    await User.findById()
})