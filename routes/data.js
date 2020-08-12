const express = require("express");
const router = express.Router();

const dataController = require("../controllers/dataController");

router.get("/submissions", dataController.getSubmissions);
router.get("/values", dataController.getValues);
router.get("/total-participants", dataController.getTotalParticipants);

module.exports = router;
