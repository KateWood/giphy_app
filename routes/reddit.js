var express = require('express');
var router   = express.Router();
var request = require('request');
var myImage = null;
var score = null;
var num_comments = null;

request('http://reddit.com/r/funny.json', function(err, response, body) {
	if (err) {
		throw err;
	};
	
	// convert JSON to a JS object
	var myResult = JSON.parse(body);

	// drill in to find the information we want
	score = myResult.data.children[1].data.score;
	num_comments = myResult.data.children[1].data.num_comments;
	myImage = myResult.data.children[1].data.thumbnail;
	
	console.log("This post has a score of", score, "and", num_comments, "comments.")
});
	
router.get('/', function(req, res) {
	res.send('<img src="' + myImage + '"><br><h1>This post has a score of ' + score + ' and ' + num_comments + ' comments.</h1>')
});

module.exports = router;