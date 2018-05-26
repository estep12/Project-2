
//Dependencies
//=======================================
// var path = require("path");


//Routes
//=======================================
module.exports = function(app){

    app.get("/", function(req, res) {
        res.render("index")
      });

      app.get("/create", function(req, res){
          res.render("events")
      });

      app.get("/logout", function(req, res){
          res.render("login")
      });

    



    
}


