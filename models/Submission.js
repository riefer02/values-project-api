const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: [true, "Please provide a first name"],
	},
	lastname: {
		type: String,
		required: [true, "Please provide a last name"],
	},
	email: {
		type: String,
		required: [true, "Please provide a an email address"],
		unique: true,
	},
	countryOfOrigin: {
		type: String,
		required: [true, "Please provide your country of origin"],
	},
	parentOneCountryOfOrigin: {
		type: String,
		required: [
			true,
			"Select an option for first parent's country of origin",
		],
	},
	parentTwoCountryOfOrigin: {
		type: String,
		required: [
			true,
			"Select an option for second parent's country of origin",
		],
	},
	userAge: {
		type: Number,
		required: [true, "Please move slider to provide your age"],
	},
	values: {
		first: {
			type: String,
			required: [true, "Please select a first value"],
		},
		second: {
			type: String,
			required: [true, "Please select a second value"],
		},
		third: {
			type: String,
			required: [true, "Please select a third value"],
		},
	},
});

module.exports = mongoose.model("Submission", submissionSchema);
