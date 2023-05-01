let express = require("express");
const { getAllStories,createStory, updateStory, deleteStory, getOneStory } = require("../controllers/storyController");
const { isAuthenticatedUser } = require("../middleware/auth");

let router = express.Router();

router.route("/stories").get(isAuthenticatedUser ,getAllStories);
router.route("/stories/new").post(createStory); 
router.route("/stories/:id").put(updateStory).delete(deleteStory).get(getOneStory)



module.exports = router;
