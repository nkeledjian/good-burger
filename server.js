var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// allows service of content in static "public" directory
app.use(express.static("public"));

// application body is parsed as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
// handlebars dependency
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handelbars");

// import routes, provide server with access to routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server hosted on: http://localhost:" + PORT);
});