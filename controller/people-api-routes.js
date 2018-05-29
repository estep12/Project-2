var db = require("../models/people.js")

module.exports = function(app){
    app.get("/api/people", function(req, res){
        db.People.findAll({include: [db.Group]}).then(function(dbPeople){
            res.json(dbPeople)
        });
    });

    app.get("/api/people/:id", function(req, res){
        db.People.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Group]
        }).then(function(dbPeople){
            res.json(dbPeople)
        });
    });

    app.post("/api/people", function(req, res){
        db.People.create(req.body).then(function(dbPeople){
            res.json(dbPeople)
        });
    });

    app.put("/api/people", function(req, res){
        db.People.update(
            req.body,
            {
            where:{
                id: req.body.id
            }
        }).then(function(dbPeople){
            res.json(dbPeople)
        })
    });

    app.delete("/api/people/:id", function(req, res){
        db.People.destroy({
            where: {
                id: req.body.id
            }
        }).then(function(dbPeople){
            res.json(dbPeople)
        })
    });
}