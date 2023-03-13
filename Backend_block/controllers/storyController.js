let Story = require("../models/story")


//create story
exports.createStory = async(req,res,next)=>{
    let story = await Story.create(req.body);
    res.status(201).json({
        success:true,
        story
    })
}

//get all stories
exports.getAllStories = async(req,res)=>{
    let stories = await Story.find();
    res.status(200).json({
        success:true,
        stories
    })
}

//update stories (still pending needs fixing)
exports.updateStory = async(req,res,next)=>{
    let story = Story.findById(req.params.id);
    if(!story){
        return res.status(500).json({
            success:false,
            message:"Story not available"
        })
    }

    story = await Story.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        story
    })
}