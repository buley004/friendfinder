var friendArray = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function (req, res) {

    var friend = req.body;
    var match;
    var friendScore = 40;

    //compare incoming friend to all friends in DB
    for (let i = 0; i < friendArray.length; i++) {
      var tempScore = 0;
      //add up difference in scores
      for (let j = 0; j < friendArray[0].scores.length; j++) {
        tempScore += Math.abs(friend.scores[j] - friendArray[i].scores[j])
      }
      //swap match if difference is lower
      if (tempScore < friendScore) {
        friendScore = tempScore;
        match = friendArray[i];
      }
    }

    //console.log(req.body);
    console.log(friendScore);
    console.log(match);

    //add new user to database
    friendArray.push(friend);

    res.json(match);
  })
};