var express = require("express");
var router = express.Router();
const { upload } = require("../middlewares/multer");

// Controller
const apiController = require("../controllers/apiController");

router.post("/event", upload, apiController.createEvent);
router.get("/event", apiController.getEvent);

module.exports = router;
