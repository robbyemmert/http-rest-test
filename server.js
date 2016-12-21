var express = require('express');
var moment = require('moment');

var port = process.env.PORT || 3000;
var server = express();

var logs = [];

var logHeaders = function(headers) {
    console.log('-------HEADERS-------')
    console.log(JSON.stringify(headers, null, 2))
    console.log('---------------------')
}

server.get('/logs', function(req, res) {
    res.json(logs);
})

server.delete('/logs', function(req, res) {
    logs = [];
    res.json({
        message: 'All logs cleared',
    });
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
    logHeaders(req.headers);
    logs.push({
        message: logMsg,
        time: now.valueOf(),
        headers: req.headers
    });

    res.json({
        healthy: true,
        message: 'API is up'
    });
})

server.listen(port, function() {
    console.log('listening on port ' + port);
})