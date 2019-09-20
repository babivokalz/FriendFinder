var path = require("path");
var express = require("express");
var appRoute = express.Router();

console.log("WHAT IS THIS: ", path.join(__dirname, "./../public/survey.html"));

appRoute.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

appRoute.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = appRoute;
