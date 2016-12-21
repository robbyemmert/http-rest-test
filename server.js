var express = require('express');
var moment = require('moment');

var port = process.env.PORT || 3000;
var server = express();

var logs = [];

server.get('/logs', function(req, res) {
    res.json(logs);
})

server.get('/favicon.ico', function(req, res) {
    res.status(404).json({
        message: 'No favicon available for API endpoints.'
    })
})

server.get('*', function(req, res) {
    var now = moment();
    var timestamp = now.format('MMMM Do YYYY, h:mm:ss a');
    var logMsg = `Request against ${req.originalUrl} at ${now}`;
    console.log(logMsg);
    logs.push({
        message: logMsg,
        time: now.valueOf()
    });

    res.json({
        healthy: true,
        message: 'API is up'
    });
})

server.listen(port, function() {
    console.log('listening on port ' + port);
})