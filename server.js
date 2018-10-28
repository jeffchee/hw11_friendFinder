var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(express.static("app"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// app.use(friendsJS);
app.use(routesHTML);
app.use(routesAPI);


// var friendsJS = require("C:\Users\jeffr\Documents\hw11_friendfinder\hw11_datingapp\app\data\friends.js");


var routesHTML = require("C:\Users\jeffr\Documents\hw11_friendfinder\hw11_datingapp\app\routing\htmlRoutes.js");


var routesAPI = require("C:\Users\jeffr\Documents\hw11_friendfinder\hw11_datingappapp/routing/apiRoutes.js");





// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});



