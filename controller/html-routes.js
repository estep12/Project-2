var db = require("../models")
const passport = require('passport');

module.exports = function (app) {

  function authenticationMiddleware(req, res, next) {
    // console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }

  // Version 1 (without id's in address)-----------------------------------------------------------------------

  // app.get("/", function (req, res) {

  //   db.Group.findAll({
  //     include: [{
  //       model: db.Events,
  //       model: db.People,
  //       through: { attributes: [] },
  //     }]
  //   }).then(function (dbGroup) {
  //     db.Events.findAll({ include: [db.Group]
  //     }).then(function(dbEvents){
  //       res.render("index", { groupName: dbGroup, events: dbEvents })
  //     })
  //   });
  // });

  // app.get("/createEvent", authenticationMiddleware, function (req, res) {
  //   res.render("createevent")
  // });

  // app.get("/manageGroup/:id", function(req, res){
  //   db.Group.findAll({
  //     include:[{
  //       model:db.Events,
  //       model:db.People,
  //       through: {attributes: []}
  //     }]
  //   }).then(function(dbGroup){
  //     var test = "hi"
  //     var indexGroupId = 0;
  //     db.People.findAll({
  //       include: [{
  //         model: db.Group,
  //         through: { attributes: [] }
  //       }]
  //     }).then(function(dbPeople){
  //       console.log(test);
  //       res.render("managegroup", {groupName:dbGroup[0], members:dbPeople})

  //     })

  //   });
  // });

  // app.get("/createGroup", function(req, res) {
  //   db.People.findAll({
  //     include: [{
  //       model: db.Group,
  //       through: { attributes: [] }
  //     }]
  //   }).then(function(dbPeople){
  //     res.render("creategroup", {members:dbPeople})
  //   });
  //  });

  // app.get("/login", function (req, res) {
  //   res.render("login")
  // });

  // app.post(
  //   '/login',
  //   passport.authenticate('local-signin', {
  //     successRedirect: '/',
  //     failureRedirect: '/login',
  //     failureFlash: true,
  //     successFlash: 'Welcome',
  //   }),
  // );

  // app.get("/signup", function (req, res) {
  //   res.render("signup")
  // });

  // app.get('/logout', function (req, res) {
  //   req.session.destroy(function (err) {
  //     res.redirect('/login');
  //   });
  // });

  // app.get(
  //   '/logout',
  //   function (req, res) {
  //     req.logout();
  //     res.redirect('/login');
  //   },
  // );

  // End of Version 1
  // ------------------------------------------------------------------------------------------------------


  // Version 2 (with id's in address)-----------------------------------------------------------------------
  app.get("/:id", function (req, res) {
    var id = req.params.id;

    db.People.findAll({
      include: [{
        model: db.Group,
        through: { attributes: [] }
      }]
    }).then(function (dbPeople) {
      db.Events.findAll({ include: [db.Group]
      }).then(function(dbEvents){
        res.render("index", { groupName: dbPeople[id-1].Groups, events: dbEvents, peopleId: id})
      })
    });
  });

  app.get("/createEvent/:id", authenticationMiddleware, function (req, res) {
    res.render("createevent")
  });

  app.get("/manageGroup/:id", function (req, res) {
    db.Group.findAll({
      include: [{
        model: db.Events,
        model: db.People,
        through: { attributes: [] }
      }]
    }).then(function (dbGroup) {
      var id = req.params.id;
      db.People.findAll({
        include: [{
          model: db.Group,
          through: { attributes: [] }
        }]
      }).then(function (dbPeople) {
        res.render("managegroup", { groupName: dbGroup[id-1], members: dbGroup[id-1].People, peopleId: id})
      })
    });
  });

  app.get("/createGroup/:id", function (req, res) {
    var id = req.params.id;
    db.People.findAll({
      include: [{
        model: db.Group,
        through: { attributes: [] }
      }]
    }).then(function (dbPeople) {
      res.render("creategroup", { members: dbPeople, peopleId: id})
    });
  });

  app.get("/login/:id", function (req, res) {
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

  app.get("/signup/:id", function (req, res) {
    res.render("signup")
  });

  app.get('/logout/:id', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/login');
    });
  });

  // End of Version 2
  // ------------------------------------------------------------------------------------------------------

};