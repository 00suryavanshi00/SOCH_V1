let Story = require("../models/story");
const ErrorHandler = require("../utils/errorhandler");
let catchasyncerrors = require("../middleware/catchasyncerror");
const ApiFeatures = require("../utils/apifeatures");




//create story
exports.createStory = catchasyncerrors(async(req,res,next)=>{
    
    let story = await Story.create(req.body);
    res.status(201).json({
        success:true,
        story
    })
} )

//get all stories
exports.getAllStories = catchasyncerrors(async(req,res)=>{

    let resultPerPage = 5;

    let apifeatures = new ApiFeatures(Story.find(), req.query)
    .search()
    .pagination(resultPerPage)


    let stories = await apifeatures.query;
    res.status(200).json({
        success:true,
        stories
    })
})

//update stories (still pending needs fixing)
exports.updateStory = catchasyncerrors(async(req,res,next)=>{
    let story = Story.findById(req.params.id);
    if(!story){
        return next(new ErrorHandler("Story not found", 404))
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
})

//delete stories
exports.deleteStory = catchasyncerrors(async(req, res, next)=>{

    let story = await Story.findById(req.params.id);

    if(!story){
        return next(new ErrorHandler("Story not found", 404))
        }

    await story.remove();

    res.status(200).json({
        success:true,
        message:"Story Deleted Successfully"
    })

})

//get a single story(this will be used when the user selects one particular story) @frontend team
exports.getOneStory = catchasyncerrors(async(req,res,next)=>{

    let story = await Story.findById(req.params.id);

    if(!story){
        return next(new ErrorHandler("Story not found", 404))
        }
    

    res.status(200).json({
        success:true,
        story
    })


})