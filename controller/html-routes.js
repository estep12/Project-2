
//Routes
//=======================================
module.exports = function(app){

    app.get("/", function(req, res) {
        res.render("index")
      });

      app.get("/allEvents", function(req, res){
          res.render("events")
      });

      app.get("/createevent", function(req, res){
        res.render("createevent")
    });

      app.get("/creategroup", function(req, res){
        res.render("creategroup")
    });

      app.get("/logout", function(req, res){
          res.render("login")
      });

      app.get("/signup", function(req, res){
          res.render("signup")
      });
}


