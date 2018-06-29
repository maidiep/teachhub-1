var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3060;

var db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

//don't forget to put routes here

db.sequelize.sync({force:true}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on port " + PORT);
    });
});