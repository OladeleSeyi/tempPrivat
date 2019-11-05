const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateDataSchema = new Schema({
	proportionOfBudget: {
		type: Number,
		required: true,
		max: 15,
		min: 0
	},
	ictMinistry: {
		type: Number,
		required: true,
		max: 10,
		min: 0
	},
	internetAccessRate: {
		type: Number,
		required: true,
		max: 10,
		min: 0
	},
	ictProjects: {
		type: Number,
		required: true,
		max: 7,
		min: 0
	},
	skillTypeA: {
		type: Number,
		required: true,
		max: 7,
		min: 0
	},
	stateWebsite: {
		type: Number,
		required: true,
		max: 7,
		min: 0
	},
	officialMailUse: {
		type: Number,
		required: true,
		max: 7,
		min: 0
	},
	ictFund: {
		type: Number,
		required: true,
		max: 5,
		min: 0
	},
	useOfIct: {
		type: Number,
		required: true,
		max: 5,
		min: 0
	},
	genAbility: {
		type: Number,
		required: true,
		max: 5,
		min: 0
	},
	digitalFiling: {
		type: Number,
		required: true,
		max: 5,
		min: 0
	},
	intranetUse: {
		type: Number,
		required: true,
		max: 3,
		min: 0
	},
	ehr: {
		type: Number,
		required: true,
		max: 3,
		min: 0
	},
	ict4Learning: {
		type: Number,
		required: true,
		max: 3,
		min: 0
	},
	ict4Judiciary: {
		type: Number,
		required: true,
		max: 3,
		min: 0
	},
	techAbility: {
		type: Number,
		required: true,
		max: 2,
		min: 0
	},
	ict4Employment: {
		type: Number,
		required: true,
		max: 2,
		min: 0
	},
	videoConference: {
		type: Number,
		required: true,
		max: 1,
		min: 0
	},
	total: {
		type: Number,
		required: true,
		max: 100,
		min: 0
	},
	stateId: {
		type: String,
		required: true,
		minlength: 5,
		trim: true
	},
	stateName: {
		type: String,
		required: true,
		trim: true
	},
	authorId: {
		type: String,
		required: true,
		minlength: 5,
		trim: true
	},
	createdAt: { type: Date, default: Date.now() },
	updatedAt: { type: Date, default: Date.now() }
});
const StateData = mongoose.model("StateData", stateDataSchema);
module.exports = StateData;
