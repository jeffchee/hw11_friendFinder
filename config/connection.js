var mysql = require("mysql");

var source = {
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    
  }
};


// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;