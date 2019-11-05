const express = require("express");
const router = express.Router();
const passport = require("passport");
//  import state model
const StateData = require("../models/statedata");
// import validator
const validateStateInput = require("../validator/state");

// Get all route
router.get("/", (req, res) => {
	console.log("all");

	StateData.find((err, docs) => {
		if (err) {
			console.log("Error in retrieving all states", err);

			return res.status(400).json({ message: "Error retrieving state data" });
		}
		res.send(docs);
	});
});
//  post State data
router.post(
	"/add",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		// validate the data

		const { errors, isValid } = validateStateInput(req.body);

		if (!isValid) {
			return res.status(404).json(errors);
		}

		//  get the senders id
		let user = req.user.userId;
		let total =
			eval(req.body.proportionOfBudget) +
			eval(req.body.ictMinistry) +
			eval(req.body.internetAccessRate) +
			eval(req.body.ictProjects) +
			eval(req.body.skillTypeA) +
			eval(req.body.stateWebsite) +
			eval(req.body.officialMailUse) +
			eval(req.body.ictFund) +
			eval(req.body.useOfIct) +
			eval(req.body.genAbility) +
			eval(req.body.digitalFiling) +
			eval(req.body.intranetUse) +
			eval(req.body.ehr) +
			eval(req.body.ict4Learning) +
			eval(req.body.ict4Employment) +
			eval(req.body.ict4Judiciary) +
			eval(req.body.techAbility) +
			eval(req.body.videoConference);
		console.log(total);

		//Check if stateId and stateUserIds Match

		// Create the document obj
		let newStateData = new StateData({
			proportionOfBudget: req.body.proportionOfBudget,
			ictMinistry: req.body.ictMinistry,
			internetAccessRate: req.body.internetAccessRate,
			ictProjects: req.body.ictProjects,
			skillTypeA: req.body.skillTypeA,
			stateWebsite: req.body.stateWebsite,
			officialMailUse: req.body.officialMailUse,
			ictFund: req.body.ictFund,
			useOfIct: req.body.useOfIct,
			genAbility: req.body.genAbility,
			digitalFiling: req.body.digitalFiling,
			intranetUse: req.body.intranetUse,
			ehr: req.body.ehr,
			ict4Learning: req.body.ict4Learning,
			ict4Judiciary: req.body.ict4Judiciary,
			techAbility: req.body.techAbility,
			ict4Employment: req.body.ict4Employment,
			videoConference: req.body.videoConference,
			total,
			stateName: req.body.stateName,
			stateId: req.body.stateId,
			authorId: user
		});

		newStateData
			.save()
			.then(user => res.json(user))
			.catch(err => console.log(err));
	}
);
// Edit state information

// delete state info

// FIND STATES ASSOCIATED WITH USERID
router.get(
	"/user",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		let user = req.user.userId;
		console.log(user);

		StateData.find({ authorId: user }).then(data => {
			if (!data) {
				return res.status(400).json({ authorId: " no entries " });
			}
			return res.status(200).json(data);
		});
	}
);
// Get route
// FInd just one state
router.get("/single/:id", (req, res) => {
	// Get the state id
	console.log("id");

	let id = req.params.id;
	StateData.findOne({ stateId: id }).then(data => {
		if (!data) {
			return res
				.status(400)
				.json({ stateId: "PLease ensure you have a valid state Id" });
		}
		return res.status(200).json(data);
	});
});

// export Router
module.exports = router;
