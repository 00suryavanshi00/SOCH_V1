let Story = require("../models/story");
const ErrorHandler = require("../utils/errorhandler");


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
        return next(new ErrorHandler("Product not found", 404))
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

//delete stories
exports.deleteStory = async(req, res, next)=>{

    let story = await Story.findById(req.params.id);

    if(!story){
        return next(new ErrorHandler("Product not found", 404))
        }

    await story.remove();

    res.status(200).json({
        success:true,
        message:"Story Deleted Successfully"
    })

}

//get a single story(this will be used when the user selects one particular story) @frontend team
exports.getOneStory = async(req,res,next)=>{

    let story = await Story.findById(req.params.id);

    if(!story){
        return next(new ErrorHandler("Product not found", 404))
        }
    

    res.status(200).json({
        success:true,
        story
    })


}