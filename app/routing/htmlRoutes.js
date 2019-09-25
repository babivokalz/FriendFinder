var path = require("path");
var express = require("express");
var appRoute = express.Router();

appRoute.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/views/survey.html"));
});

appRoute.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/views/home.html"));
});

module.exports = appRoute;
