var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newFriend = {
		"name": req.query.name,
		"description": req.quuery.description,
		"imageURL": 'http://lorempixel.com/400/400/people'
	};
 }