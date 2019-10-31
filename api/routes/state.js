const express = require("express");
const router = express.Router();
//  import state model
const StateData = require("../models/statedata");

// test route
router.get("/", (req, res) => {
	res.send("The state works ");
});

// export Router
module.exports = router;
