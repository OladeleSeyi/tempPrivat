const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validator/register");
const validateLoginInput = require("../validator/login");
// Load User model
const User = require("../models/userModel");

let getUserId = async data => {
	let mail = await User.findOne({ email: data.email }).then(user => user.email);
	let userID = await User.findOne({ userId: data.userId }).then(
		user => user.userId
	);
	return {
		usermail: mail,
		userid: userID
	};
};

// Register The user using existing userIds
router.post("/register", (req, res) => {
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	const email = req.body.email;
	const userId = req.body.userId;
	User.findOne({ userId }).then(user => {
		console.log("user", user);

		if (!user) {
			return res.status(400).json({ userId: "Invalid UserId" });
		} else if (user.email) {
			return res
				.status(400)
				.json({ email: "This User Id is associaciated with a User already" });
		} else {
			const newUser = new User({
				_id: user._id,
				userId: req.body.userId,
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});
			// Hash password before saving in database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					User.update(
						{ userId: req.body.userId },
						{ $set: newUser },
						{ multi: true, new: true }
					)
						.then(user => res.json(user))
						.catch(err => console.log(err));
				});
			});
		}
	});
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
	// form Validation
	const { errors, isValid } = validateLoginInput(req.body);

	if (!isValid) {
		res.status(400).json({ errors });
	}
	const email = req.body.email;
	const password = req.body.password;
	User.findOne({ email })
		.then(user => {
			console.log(user);

			if (!user) {
				return res.status(404).json({ emailnotfound: "Email not found" });
			}
			bcrypt.compare(password, user.password).then(isMatch => {
				if (isMatch) {
					// User found in db
					// generate Jwt
					const payload = {
						id: user.id,
						name: user.name
					};
					// sign token
					jwt.sign(
						payload,
						keys.secretOrKey,
						{
							expiresIn: 368892
						},
						(err, token) => {
							res.json({
								success: true,
								token: "Bearer" + token
							});
						}
					);
				} else {
					return res
						.status(400)
						.json({ passwordincorrect: "password incorrect" });
				}
			});
		})
		.catch(e => console.log(e));
});

module.exports = router;
