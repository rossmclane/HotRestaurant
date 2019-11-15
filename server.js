// Import Express
var express = require("express");
var path = require("path");

// Create App
var app = express();
var PORT = process.env.PORT || 3000;

// Tables Array
var tables = [
    {
        first: "first",
        second: "second",
        third: "third",
        tables: "true"
    }
];

// Waitlist Array
var waitlist = [
    {
        first: "first",
        second: "second",
        third: "third",
        waitlist: "true"
    }
];

// home view
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// tables view
app.get('/tables', function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

// reserve view
app.get('/reserve', function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// tables route
app.get('/api/tables', function(req, res){
    res.json(tables);
});

// waitlist route
app.get('/api/waitlist', function(req, res){
    res.json(waitlist);
});


// Listen
app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`);
});
