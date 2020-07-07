const Submission = require("../models/Submission.js");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.submitValues = catchAsync(async (req, res, next) => {
	const submission = new Submission({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		email: req.body.email,
		countryOfOrigin: req.body.countryOfOrigin,
		parentOneCountryOfOrigin: req.body.parentOneCountryOfOrigin,
		parentTwoCountryOfOrigin: req.body.parentTwoCountryOfOrigin,
		userAge: req.body.userAge,
		values: {
			first: req.body.values.first,
			second: req.body.values.second,
			third: req.body.values.third,
		},
	});
	const newSubmission = await submission.save();

	res.status(201).json(newSubmission);
});
