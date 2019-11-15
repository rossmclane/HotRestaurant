// Import Express
var express = require("express");
var path = require("path");

// Create App
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Tables Array
var tables = [
    {
        name: "Manguy",
        phoneNum: "314-003-7778",
        email: "Manguy@gooogle.com",
        uniqueId: "398idkdd" 
    },
    {
        name: "Ms. Woman",
        phoneNum: "567-003-7578",
        email: "Woman@gooogle.com",
        uniqueId: "dkfjaddo" 
    }
];

// Waitlist Array
var waitlist = [{
    name: "George",
    phoneNum: "314-383-3918",
    email: "george@gooogle.com",
    uniqueId: "1838eddk"
}];


// home view
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// tables view
app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// reserve view
app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// tables route
app.get('/api/tables', function(req, res) {
    res.json(tables);
});

// waitlist route
app.get('/api/waitlist', function(req, res) {
    res.json(waitlist);
});

//deletes all data
app.delete('/api/waitlist', function(req, res){
    waitlist = [];
    res.end();
});

app.delete('/api/tables', function(req, res){
    tables = [];
    res.end();
});
// post new table
app.post('/api/tables', function(req, res) {
    if (tables.length < 5) {
        tables.push(req.body);
        res.send("tables");
    } else {
        waitlist.push(req.body)
        res.send("waitlist");
    }

})



// Listen
app.listen(PORT, function() {
    console.log(`Listening on Port ${PORT}`);
});