// import Packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const helmet = require("helmet");
const path = require("path");

const logger = require("./config/logger");
// Import Local Dependencies
const db = require("./config/db");

// import Routes
const authRoute = require("./routes/authRoute");
const testauth = require("./routes/test/auth");
const stateRoute = require("./routes/state");
const userRoute = require("./routes/userRoute");
//  Start App
const app = express();

//  Security
app.use(helmet());

// set up middleware
app.use(logger("combined", logger.options));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// // Declare Routes
app.use(express.static("client/build"));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.use("/auth", authRoute);
app.use("/test", testauth);
app.use("/state", passport.authenticate("jwt", { session: false }), stateRoute);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is Up and runnning on  ${port}`);
});
