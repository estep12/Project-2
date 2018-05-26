var express = require("express")
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 8080;

// var db = require("../models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());;
app.use(bodyParser.text())

app.use(express.static("public"));

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./controller/html-routes.js")(app);
require("./controller/events-api-routes.js")(app);
require("./controller/groups-api-routes.js")(app);
// require("./controller/people-api-routes.js")(app);

// db.sequelize.sync({ force: true }). then(function() {
    app.listen(PORT, function() {
        console.log("listening on PORT" + PORT);
    })
// });