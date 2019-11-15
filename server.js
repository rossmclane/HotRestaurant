// Import Express
var express = require("express");
var path = require("path");

// Create App
var app = express();
var PORT = process.env.PORT || 3000;

// home route
app.get('/', function (res, req) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Listen
app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
});
