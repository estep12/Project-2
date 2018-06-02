var express = require("express")
var bodyParser = require("body-parser")
const passport = require('passport');
const env = require('dotenv').load();
// const bcrypt = require('bcrypt-nodejs');

// authentication packages
const session = require('express-session');

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
app.use(session({
    secret: 'fsd889sdneroij$#^r9j2#iop9e',
    resave: true,
    saveUninitialized: false,
    // cookie: { secure: true },
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistant login sessions

// Routes
// const authRoute = require('./controller/user-auth-routes.js')(app, passport);
require('./controller/user-auth-routes.js')(app, passport);

// load passport strategies
const Passport = require('./config/passport/passport.js')(passport, db.People);

require("./controller/html-routes.js")(app, Passport);
require("./controller/events-api-routes.js")(app);
require("./controller/groups-api-routes.js")(app);
require("./controller/people-api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    console.log("goodbye")
    app.listen(PORT, function() {
        console.log("listening on PORT" + PORT);
    })
});
