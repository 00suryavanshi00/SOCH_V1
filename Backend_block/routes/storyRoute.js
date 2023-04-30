let express = require("express");
const { getAllStories,createStory, updateStory, deleteStory, getOneStory } = require("../controllers/storyController");

let router = express.Router();

router.route("/stories").get(getAllStories);
router.route("/stories/new").post(createStory); 
router.route("/stories/:id").put(updateStory).delete(deleteStory).get(getOneStory)



module.exports = router;