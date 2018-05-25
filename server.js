var express = require("express")
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/events-api-routes.js")(app);
require("./routes/groups-api-routes.js")(app);
require("./routes/people-api-routes.js")(app);

db.sequelize.sync({ force: true }). then(function() {
    app.listen(PORT, function() {
        console.log("listening on PORT" + PORT);
    })
});