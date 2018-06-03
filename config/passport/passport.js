const db = require("../../models");
// load bcrypt
const bCrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
  console.log('serialize');
  done(null, user.id);
});

// deserialize user
passport.deserializeUser(function (id, done) {
  db.People.findById(id, function (err, user) {
    console.log(`deserialize ${user.userName}`);
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  {
    usernameField: 'userNameLogin',
    passwordField: 'passwordLogin',
    passReqToCallback: true, // allows us to pass back the entire request to the callback
  },
  function (userName, password, done) {
    console.log(userName);
    console.log(password);
    const isValidPassword = function (userpass, pass) {
      return bCrypt.compareSync(pass, userpass);
    };

    db.People.findOne({ where: { userName: userName } }).then(function (user) {
      if (!user) {
        return done(null, false, { message: 'userName does not exist' });
      }
      if (!isValidPassword(user.password, password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  },
));

module.exports = passport;

// module.exports = function (passport) {
  // passport.serializeUser(function (user, done) {
  //   console.log('serialize');
  //   done(null, user.id);
  // });

  // // deserialize user
  // passport.deserializeUser(function (id, done) {
  //   db.People.findById(id, function (err, user) {
  //     console.log(`deserialize ${user.userName}`);
  //     done(err, user);
  //   });
  // });

  // // LOCAL SIGNIN ==================================================================================
  // passport.use('login', new LocalStrategy(
    // {
    //   usernameField: 'userNameLogin',
    //   passwordField: 'passwordLogin',
    //   passReqToCallback: true, // allows us to pass back the entire request to the callback
    // },

  //   function (userName, password, done) {
  //     const isValidPassword = function (userpass, pass) {
  //       return bCrypt.compareSync(pass, userpass);
  //     };

  //     db.People.findOne({ where: { userName: userName } }).then(function (user) {
  //       if (!user) {
  //         return done(null, false, { message: 'userName does not exist' });
  //       }
  //       if (!isValidPassword(user.password, password)) {
  //         return done(null, false, { message: 'Incorrect password.' });
  //       }

  //       const userinfo = user.get();

  //       return done(null, userinfo);
  //     }).catch(function (err) {
  //       console.log('Error:', err);

  //       return done(null, false, { message: 'Something went wrong with your Signin' });
  //     });
  //   },
  // ));

//   // local signup ==================================================================================
//   passport.use('signup', new LocalStrategy(
//     {
//       usernameField: 'userName',
//       passwordField: 'password',
//       passReqToCallback: true,
//     },

//     function (req, userName, password, done) {
//       console.log('Made it into passport!!');
//       // console.log(req.body);
//       // serialize user
//       console.log(done);

//       db.People.findOne({ where: { userName: userName } }).then(function (user) {
//         if (user) {
//           console.log('username exists');
//           return done(null, false, { message: 'Username already exists.' });
//         }
//         if (!user) {
//           // create user with POST to db
//           console.log("username doesn't exist");
//           db.People.create(
//             req.body,
//             {
//               include: [{
//                 model: db.Group,
//                 through: { attributes: [] },
//               }],
//             },
//           ).then(function (dbPeople) {
//             // res.json(dbPeople);
//             // console.log("success", dbPeople);
//             if (!dbPeople) {
//               return done(null, false);
//               console.log("NO dbPeople to return!!");
//             }
//             if (dbPeople) {
//               console.log(dbPeople.userName);
//               // db.People.findOne({ where: { userName: dbPeople.userName } }).then(function(user) {
//               //   if (!user) throw err;
//               //   console.log(user);
//               //   req.login(user, function(request, res) {
//               //     res.redirect('index');
//               //   });
//               // });
//               return done(null, dbPeople);
//             }
//             // return dbPeople;
//           });
//         }
//       });
//     },
//   ));
// };

