var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var bodyParser = require("body-parser");
var teachhubController = require("./controllers/teachhubController");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(teachhubController);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("Server is up and running on " + PORT);
});
