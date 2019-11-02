const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

//  Test the auuthentication route

router.get(
	"/success",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		let user = req.user;
		user.token = req.token;
		console.log(req);

		res.send(user);
		console.log(req.user);

		if (req.user) {
			res.json({
				success: true,
				message: "user has successfully authenticated",
				user: req.user,
				cookies: req.cookies
			});
		} else {
			res.json({ noUser: "please authenticate" });
		}
	}
);

module.exports = router;
