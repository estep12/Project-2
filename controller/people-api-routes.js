var db = require("../models")

module.exports = function(app){
    db.get("/api/people", function(req, res){

    });

    db.get("/api/people/:id", function(req, res){

    });

    db.post("/api/people", function(req, res){

    });

    app.put("/api/people", function(req, res){

    });

    app.delete("/api/people/:id", function(req, res){

    });
}