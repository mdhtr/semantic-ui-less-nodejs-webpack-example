var express = require('express');
var path = require('path');
var app = express();
var port = 8080;

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/', function(req, res) {res.sendFile(__dirname + '/dist/index.html');});

app.listen(port, function () {
    console.log('Hello World server listening on port %d!', port)
});
