// load bcrypt
const bCrypt = require('bcrypt-nodejs');
const User = require('../../models/people.js');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });


  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // local signup
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'userName',
      passwordField: 'password',
      passReqToCallback: true, // allows us to pass back the entire request to the callback
    },

    function(req, userName, password, done) {
      let generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      User.findOne({ where: { userName: userName } }).then(function(user) {
        if (user) {
          return done(null, false, { message: 'That username is already taken' });
        } else {
          let userPassword = generateHash(password);
          var data = { 
            email: email,
            password: userPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName
          };

          User.create(data).then(function(newUser, created) {
            if (!newUser) {
              return done(null,false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    },
  ));

  // LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true, // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done) {
      let User = user;
      let isValidPassword = function(userpass, password) {
        return bCrypt.compareSync(password, userpass);
      };

      User.findOne({ where: { email: email } }).then(function(user) {
        if (!user) {
          return done(null, false, { message: 'Email does not exist' });
        }
        if (!isValidPassword(user.password, password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        let userinfo = user.get();

        return done(null, userinfo);
      }).catch(function(err) {
        console.log('Error:', err);

        return done(null, false, { message: 'Something went wrong with your Signin' });
      });
    },
  ));
};
