var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/apiRoutes");
<<<<<<< HEAD
require("dotenv").load();
=======
>>>>>>> 13e305cb4dc75e1fdd337a0143effa1e096a893f

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//don't forget to put routes here

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
  });
});
