// const authController = require('./auth-controller.js');

// module.exports = function(app, passport) {
//   app.get('/signup', authController.signup);

//   app.get('/login', authController.signin);


  // test code may not do anything =====================================
  // app.get('/creategroup', passport.authenticate('local'), function(req, res) {
  //   res.redirect('/creategroup');
  // });

  // app.get('/createevent', passport.authenticate('local'), function(req, res) {
  //   res.redirect('/createevent');
  // });
  // test code may not do anything =====================================


//   app.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/',
//     failureRedirect: '/signup',
//   }));

//   app.post('/signin', passport.authenticate('local-signin', {
//     successRedirect: '/',

//     failureRedirect: '/signin',
//   }));


  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated()) {
  //     return next();
  //   }
  //   res.redirect('/signin');
  // }

  // app.get('/', isLoggedIn, authController.home);

  // app.get('/logout', authController.logout);
};

