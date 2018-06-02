// const authController = require('./auth-controller.js');

// Routes
// =======================================
// module.exports = function(app, passport) {

//     app.get("/signup", function(req, res) {
//         res.render("signup")
//     });

//     app.get("/login", function(req, res) {
//         res.render("login")
//     });

//     app.get("/", function(req, res) {
//         res.render("index")
//       });

// // test code may not do anything =====================================
//     app.get('/creategroup', passport.authenticate('local'), function(req, res) {
//         res.redirect('/creategroup');
//     });

//     app.get('/createevent', passport.authenticate('local'), function(req, res) {
//         res.redirect('/createevent');
//     });
//     // test code may not do anything =====================================

//     app.post('/signup', passport.authenticate('local-signup', {
//         successRedirect: '/',
//         failureRedirect: '/signup',
//     }));

//     app.post('/signin', passport.authenticate('local-signin', {
//         successRedirect: '/',

//         failureRedirect: '/signin',
//     }));

//     function isLoggedIn(req, res, next) {
//         if (req.isAuthenticated()) {
//         return next();
//         }
//         res.redirect('/signin');
//     }

//     app.get('/', isLoggedIn, authController.home);

//     app.get('/logout', authController.logout);
    
//     app.get("/createEvent", function(req, res) {
//         res.render("createevent")
//     });

//     app.get("/createGroup", function(req, res) {
//         res.render("creategroup")
//     });

      
// }
module.exports = function(app){

    app.get("/", function(req, res) {
        console.log(req.user);
        console.log(req.isAuthenticated());
        res.render("index")
      });

    //   app.get("/allEvents", function(req, res){
    //       res.render("events")
    //   });

      app.get("/createEvent", function(req, res){
        res.render("createevent")
    });

    app.get("/createGroup", function(req, res){
        res.render("creategroup")
    });

      app.get("/logout", function(req, res){
          res.render("login")
      });

      app.get("/signup", function(req, res){
          res.render("signup")
      });
}
