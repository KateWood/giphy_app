var express = require('express');
var request = require('request');
var app	= express();
var port = process.env.PORT || 3000;
var giphyRoutes = require('./routes/giphy.js');
var redditRoutes = require('./routes/reddit.js');

app.get('/', function(req, res) {
    res.json({message: "Welcome to my app!"});
});

app.use('/giphy', giphyRoutes);

app.use('/reddit', redditRoutes);

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});