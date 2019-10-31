// import Packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const helmet = require("helmet");

const logger = require("./config/logger");
// Import Local Dependencies
const db = require("./config/db");

// import Routes
const authRoute = require("./routes/authRoute");
const mapDataRoute = require("./routes/mapDataRoute");
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

// // Declare Routes
app.get("/", (req, res) => {
	res.send("Hello World ");
	console.log(Date.now());
});
app.use("/auth", authRoute);
// app.use("/data", mapDataRoute);
// app.use("/user", userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is Up and runnning on  ${port}`);
});
