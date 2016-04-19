var express = require('express'),
	app		= express(),
	port 	= process.env.PORT || 3000


app.get('/', function(req, res) {
    res.json({message: "Welcome to my app!"})
})

var giphyRoutes = require('./routes/giphy.js')

app.use('/giphy', giphyRoutes)

app.listen(port, function() {
    console.log("Server is running on", port)
})