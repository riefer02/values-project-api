const Submission = require("../models/Submission.js");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const values = [
	"Wealth",
	"Love",
	"Power",
	"Prestige",
	"Education",
	"Community",
	"Tradition",
	"Faith",
	"Family",
	"Intelligence",
	"Health",
	"Art",
	"Appearance",
	"Loyalty",
	"Friendship",
	"Respect",
	"Obedience",
	"Nature",
	"Privacy",
	"Hedonism",
];

const totalValuesCount = async (listOfValues) => {
	let countedValues = await Promise.all(
		listOfValues.map(async (el) => {
			let count = await Submission.aggregate([
				{
					$project: { values: 1 },
				},
				{
					$match: {
						$or: [
							{ "values.first": el },
							{ "values.second": el },
							{ "values.third": el },
						],
					},
				},
				{
					$count: el,
				},
			]);

			let newValueObj = {};
			newValueObj.name = el;
			if (count[0]) {
				newValueObj.count = count[0][el];
				return newValueObj;
			} else if (!count[0]) {
				newValueObj.count = 0;
				return newValueObj;
			}
		})
	);
	return countedValues;
};

exports.getSubmissions = catchAsync(async (req, res) => {
	const submissions = await Submission.find();
	res.status(200).json({
		status,
		submissions,
	});
});

exports.getValues = catchAsync(async (req, res) => {
	// const valuesArray = await Submission.find().select("values -_id");

	const totalValues = await totalValuesCount(values).then((data) => {
		return data;
	});

	res.status(200).json({
		totalValues,
	});
});
