let mongoose = require("mongoose");
let validator = require("validator")
let brcypt = require("bcryptjs")
let jwt = require('jsonwebtoken')
require("dotenv").config();

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


userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }
    this.password = await brcypt.hash(this.password,10);

})

//JWT TOKEN

userSchema.methods.getJWTToken = function(){
    return jwt.sign({
        id:this._id
    }, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await brcypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model("User",userSchema);