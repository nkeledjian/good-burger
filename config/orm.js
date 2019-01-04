// import MySQL connection
var connection = require("./connection.js");


module.exports = function (app) {
  app.get("/api/:burgers", function (req, res) {
    if (req.params.burgers){
      orm.searchBurger(req.params.burgers, function(data){
        res.json(data);
      })
    }
    else {
      // Otherwise display the data for all of the characters.
      // (using ORM to run our searches)
      orm.selectAll(function(data) {
        res.json(data);
      });
    }
  })
  app.post("/api/new", function(req, res) {

    // Take the request...
    var burger = req.body;

    // Then send it to the ORM to "save" into the DB.
    orm.insertOne(burger, function(data) {
      console.log(data);
    });

  });
  
}