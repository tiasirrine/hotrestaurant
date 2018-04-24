//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  console.log("home page requested");
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  console.log("tables page requested");
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  console.log("reserve page requested");
  res.sendFile(path.join(__dirname, "reserve.html"));
});

var tables = [
  {
    name: "",
    phone: "",
    email: "",
    uniqueID: ""
  }
];

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
