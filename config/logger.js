var fs = require("fs");
var morgan = require("morgan");
var path = require("path");
var rfs = require("rotating-file-stream");

var logDirectory = path.join(__dirname, "../log");

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
let name = `${Date()} access.log`;

// create a rotating write stream
var accessLogStream = rfs(name, {
	interval: "1d", // rotate daily
	path: logDirectory
});
morgan.stream = accessLogStream;
morgan.options = { stream: accessLogStream };
morgan.format =
	':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version"';

module.exports = morgan;
