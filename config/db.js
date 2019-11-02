const mongoose = require("mongoose");
const localKey = require("./keys").mongoURI;
const uri = localKey || process.env.MONGO_URI;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		reconnectTries: 5
	})
	.then(() => {
		console.log(`MongoDb is succesfully connnected to ${uri}`);
	})
	.catch(err => {
		console.log(err);
	});
