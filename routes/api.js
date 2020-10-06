var express = require("express");
var router = express.Router();

// Controller
const apiController = require("../controllers/apiController");

router.post("/event", apiController.createEvent);
router.get("/event", apiController.getEvent);

module.exports = router;
