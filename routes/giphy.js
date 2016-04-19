var express = require('express');
var router   = express.Router();
var request = require('request');

router.get('/:query', function(req, res) {
    var searchString = "http://api.giphy.com/v1/gifs/search?q=" + req.params.query + "&api_key=dc6zaTOxFJmzC";
    request(searchString, function(error, response, body) {
        var imageSource = JSON.parse(body).data[0].images.fixed_height.url;
        res.send('<img src=" ' + imageSource + '">');
    });
});

module.exports = router;
