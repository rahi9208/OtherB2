let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log("Hello Bright Talk");

	callback(null,'Successfully executed');
}