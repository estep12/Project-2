
const passport = require('passport');

module.exports = function (app) {

  function authenticationMiddleware(req, res, next) {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }

  app.get(
    "/", authenticationMiddleware,
    function (req, res) {
      console.log('to homepage??');
      res.render("index");
    },
  );
  
  //   app.get("/allEvents", function(req, res){
  //       res.render("events")
  //   });

  app.get("/createEvent", authenticationMiddleware,
    function (req, res) {
      res.render("createevent")
    },
  );

  app.get("/createGroup", authenticationMiddleware,
    function (req, res) {
      res.render("creategroup");
    },
  );
  
  // ds: trying to render list of member usernames to group page. haven't figured out how to read data from /api/people. helppppp
// ---------------------------------------------------------------------------
// require("../Public/assets/js/creategroup.js");
var groupName = [
  {
    "id": 3,
    "name": "Johnson Family",
    "admin": 1,
    "createdAt": "2018-06-04T02:38:37.000Z",
    "updatedAt": "2018-06-04T02:38:37.000Z",
    "People": []
    },
]

var members = [
  {
  "id": 1,
  "name": "tester",
  "admin": 1,
  "createdAt": "2018-06-04T02:38:37.000Z",
  "updatedAt": "2018-06-04T02:38:37.000Z",
  "People": []
  },
  {
  "id": 2,
  "name": "hello",
  "admin": 1,
  "createdAt": "2018-06-04T03:04:09.000Z",
  "updatedAt": "2018-06-04T03:04:09.000Z",
  "People": []
  }
  ];

    app.get("/manageGroup", function(req, res){
        res.render("managegroup", {members: members, groupName:groupName})
    });

    
    app.get("/createGroup", function(req, res) {
        res.render("creategroup")
     });

// ------------------------------------------------------------------------
  app.get("/login", function (req, res) {
    res.render("login")
  });

  app.post(
    '/login',
    passport.authenticate('local-signin', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
      successFlash: 'Welcome',
    }),
  );

  app.get("/signup", function (req, res) {
    res.render("signup")
  });

  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/login');
    });
  });

  // app.get(
  //   '/logout',
  //   function (req, res) {
  //     req.logout();
  //     res.redirect('/login');
  //   },
  // );
};

