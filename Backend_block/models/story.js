let mongoose = require("mongoose");

const storySchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter story name"]
    },
    description:{
        type:String,
        required:[true,"Please enter story description"]
    },
    characters:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    conclusion:{
        type:String,
    },
    thumbnail:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
})

module.exports = mongoose.model("Story", storySchema);