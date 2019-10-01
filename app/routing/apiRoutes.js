var express = require("express");
var friends = require("../data/friends");
const appRoute = express.Router();

appRoute.get("/api/friends", function(req, res) {
  res.json(friends);
});

appRoute.post("/api/friends", function(req, res) {
  var userScores = Object.values(req.body);
  res.send(bestMatch(userScores));
});

module.exports = appRoute;

function bestMatch(userScores) {
  var results = {};

  for (i = 0; i < friends.length; i++) {
    var totalDifference = 0;
    var friendScores = friends[i].scores;
    for (x = 0; x < friendScores.length; x++) {
      totalDifference += Math.abs(userScores[x] - friendScores[x]);
    }

    var userName = friends[i].name;
    var userDiff = totalDifference;

    results[userName] = userDiff;
  }

  var scores = Object.values(results);

  var leastDifference;
  var lowestScore;
  for (j = 0; j < scores.length; j++) {
    if (scores[i] < lowestScore || lowestScore === undefined) {
      console.log(scores[i]);
      lowestScore = scores[i];
      leastDifference = j;
    }
  }

  var friendNames = Object.keys(results);
  var bestFriendName = friendNames[leastDifference];
  console.log(leastDifference);

  var bestFriendPhoto = "";
  for (i = 0; i < friends.length; i++) {
    if (friends[i].name === bestFriendName) {
      bestFriendPhoto = friends[i].photo;
    }
  }

  var bestFriendObj = {
    name: bestFriendName,
    photo: bestFriendPhoto
  };

  console.log(bestFriendObj);
  return bestFriendObj;
}

//   var totalDifference = 0;
//   var bestMatch = {
//     name: "",
//     photo: "",
//     friendDifference: 1000
//   };

//   var userData = req.body;
//   var userName = userData.name;
//   var userScores = userData.scores;

//   var b = userScores.map(function(item) {
//     return parseInt(item, 10);
//   });
//   userData = {
//     name: req.body.name,
//     photo: req.body.photo,
//     scores: b
//   };

//   console.log("Name: " + userName);
//   console.log("User score " + userScores);

//   var sum = b.reduce((a, b) => a + b, 0);
//   console.log("Sum of users score " + sum);
//   console.log("Best match friend diff " + bestMatch.friendDifference);
//   console.log("===========================================================");

//   for (var i = 0; i < friends.length; i++) {
//     console.log(friends[i].name);
//     totalDifference = 0;
//     console.log("Total Diff " + totalDifference);
//     console.log("Best match friend diff " + bestMatch.friendDifference);

//     var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
//     console.log("Total friend score " + bfriendScore);
//     console.log(
//       "=================================================> " + totalDifference
//     );

//     if (totalDifference <= bestMatch.friendDifference) {
//       bestMatch.name = friends[i].name;
//       bestMatch.photo = friends[i].photo;
//       bestMatch.friendDifference = totalDifference;
//     }
//     console.log(totalDifference + " Total Difference");
//   }

//   console.log(bestMatch);
//   friends.push(userData);
//   console.log("New User Added");
//   console.log(userData);
//   res.json(bestMatch);
