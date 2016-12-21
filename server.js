var express = require('express');
var moment = require('moment');

var server = express();

var logs = [];

server.get('/logs', function(req, res) {
    res.json(logs);
})

server.get('*', function(req, res) {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    var logMsg = `Request against ${req.originalUrl} at ${now}`;
    console.log(logMsg);
    logs.push({
        message: logMsg
    });

    res.json({
        healthy: true,
        message: 'API is up'
    });
})

server.listen(3000, function() {
    console.log('listening on port 3000');
})