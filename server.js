var express = require("express")
var bodyParser = require("body-parser")
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static("public"));

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// For Passport
app.use(session({ secret: 'lineup', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistant login sessions

// Routes
const authRoute = require('./controller/user-auth-routes.js')(app, passport);

// load passport strategies
require('./config/passport/passport.js')(passport, db.user);

require("./controller/html-routes.js")(app);
require("./controller/events-api-routes.js")(app);
require("./controller/groups-api-routes.js")(app);
require("./controller/people-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    console.log("goodbye")
    app.listen(PORT, function() {
        console.log("listening on PORT" + PORT);
    })
});
