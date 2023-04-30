let mongoose = require("mongoose");
let validator = require("validator")


let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"],
        maxLength:[30,"Name can't exceed 30 characters"],
        minLength:[4,"Name should have more than 4 characters"]
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid mail"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        maxLength:[8,"Please enter password atleast of 8 charaters "],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type : String,
        default:"user"  
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
})

module.exports = mongoose.model("User",userSchema);