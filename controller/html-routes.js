
const passport = require('passport');

module.exports = function (app) {

  function authenticationMiddleware(req, res, next) {
    // console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }

  var events = [
    {
    "id": 1,
    "name": "Department Retreat",
    "organizer": "1",
    "location_address": "null",
    "city": "null",
    "state": "null",
    "date": "2018-06-09T00:00:00.000Z",
    "time": "12:00:00",
    "description": "null",
    "createdAt": "2018-05-09T22:13:20.000Z",
    "updatedAt": "2018-05-09T22:13:40.000Z",
    "GroupId": 1,
    "Group": {
    "id": 1,
    "name": "Johnson Family",
    "admin": 1,
    "createdAt": "2018-06-04T18:29:33.000Z",
    "updatedAt": "2018-06-04T18:29:33.000Z"
    }
    }
    ]

  app.get("/index", function (req, res) {
      res.render("index", {events:events});
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

  // app.get("/createGroup", authenticationMiddleware,
  //   function (req, res) {
  //     res.render("creategroup");
  //   },
  // );
  
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

