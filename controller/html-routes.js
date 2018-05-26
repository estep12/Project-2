
//Dependencies
//=======================================
var path = require("path");
// var fs = require("fs")

//Routes
//=======================================
module.exports = function(app){

    // app.use("/main.hbs", function(req, res) {
    //     fs.readFile("../layouts/views/main.hbs", function(data){
    //         res.send(data)
    //     });
    //   });

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/layouts/main.hbs"))
      });



    
}


