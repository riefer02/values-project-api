const express = require("express");
const router = express.Router();

const submissionController = require("../controllers/submissionController");

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.post("/", submissionController.submitValues);

module.exports = router;
