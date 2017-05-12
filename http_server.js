var express = require('express');
var path = require('path');
var app = express();
var port = 8080;

app.get('/', function (req, res) {
    res.setHeader('content-type', 'text/html');
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, function () {
    console.log('Hello World server listening on port %d!', port)
})
