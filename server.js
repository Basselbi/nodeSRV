'use strict';
var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.status(200).json({
        "ok": "Get Ok"
    });

});


const PORT = process.env.PORT || 8088;

var server = app.listen(PORT, function () {

    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://' + host + ':' + port);

});