var express = require('express');
var path = require('path');
var app = express();
var port = 8080;

app.use('/', express.static(path.join(__dirname, 'dist')))

app.listen(port, function () {
    console.log('Hello World server listening on port %d!', port)
})
