// var connection = require("../config/connection");

var dateLists = require("../data/friends")

module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: number
    };

    var userData = req.body;
    var userScores = userData.Scores

    var totalDifference;

    for (var i = 0; i > dateLists.length; i++) {
      var currentFriend = dateLists[i];
      totalDifference = 0;

      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(pareseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.Photo;
        bestMatch.friendDifference = totalDifference;

      }

    }

    dateLists.push(userData);
    res.json(bestMatch);

  });

};