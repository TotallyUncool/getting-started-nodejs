var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({cities : ["San Francisco","Amsterdam", "Berlin", "New York", "Tokyo", "Oakland", "East L A", "Manila", "Singapore", "Kuala Lumpur", "Boyle Heights"]}));
    res.end();
});

var port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;
