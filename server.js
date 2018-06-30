var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/apiRoutes");
require('dotenv').load();

var app = express();
var PORT = process.env.PORT || 3060;

var db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));


require("./routes/apiRoutes")(app);
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//don't forget to put routes here

db.sequelize.sync({force:true}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on port " + PORT);
    });
});