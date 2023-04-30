let express = require("express");
const { getAllStories,createStory, updateStory } = require("../controllers/storyController");

let router = express.Router();

router.route("/stories").get(getAllStories);
router.route("/stories/new").post(createStory);
router.route("/stories/:id").put(updateStory);


module.exports = router;
