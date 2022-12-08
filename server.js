var bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config()
const app =express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World');
});

require('./src/routes/api')(app)

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listened to port:", port);
});