const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userId: {
		type: String,
		required: true,
		minlength: 5,
		trim: true
	},
	email: String,
	password: {
		type: String,
		required: true,
		minlength: 5,
		trim: true,
		default: "NitDa"
	},
	state: String,
	name: { type: String, trim: true },
	stateId: String,
	contactNo: String,
	userDesignation: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now() },
	updatedAt: { type: Date, default: Date.now() }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
