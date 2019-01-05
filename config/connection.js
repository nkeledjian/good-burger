var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "eshface",
    database: "burgers_db"
})

// establish the connection
connection.connect(function(err){
    if (err) {
        console.error("Oops! Error connecting: " + err.stack);
        return;
    }
    console.log("Success! Connected as id " + connection.threadId);
});

module.exports = connection;