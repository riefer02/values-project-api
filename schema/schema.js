const graphql = require("graphql");
const graphqlDate = require("graphql-iso-date");
const Submission = require("../models/Submission.js");

const { GraphQLDate, GraphQLTime, GraphQLDateTime } = graphqlDate;
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLSchema,
} = graphql;

const SubmissionType = new GraphQLObjectType({
	name: "SubmissionType",
	fields: () => ({
		id: { type: GraphQLID },
		firstname: { type: GraphQLString },
		lastname: { type: GraphQLString },
		email: { type: GraphQLString },
		countryOfOrigin: { type: GraphQLString },
		parentOneCountryOfOrigin: { type: GraphQLString },
		parentTwoCountryOfOrigin: { type: GraphQLString },
		userAge: { type: GraphQLInt },
		values: { type: ValuesType },
		createdAt: { type: GraphQLDateTime },
	}),
});

const ValuesType = new GraphQLObjectType({
	name: "ValuesType",
	fields: () => ({
		first: { type: GraphQLString },
		second: { type: GraphQLString },
		third: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: () => ({
		submissions: {
			type: new GraphQLList(SubmissionType),
			resolve(parent, args) {
				return Submission.find({});
			},
		},
	}),
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
