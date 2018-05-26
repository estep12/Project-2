var db = require("../models/groups.js")

module.exports = function(app){
    db.get("/api/groups", function(req, res){
        db.Group.findAll({include:[db.Events, db.People]}).then(function(dbGroup){
            res.json(dbGroup)
        });
    });

    db.get("/api/groups/:id", function(req, res){
        db.Group.findOne({
            where: {
                id: req.params.id
            }, 
            include: [db.Events, db.People]
        }).then(function(dbGroup){
            res.json(dbGroup)
        });
    });

    db.post("/api/groups", function(req, res){
        db.Group.create(req.body).then(function(dbGroup){
            res.json(dbGroup)
        })
    });

    app.put("/api/groups", function(req, res){
        db.Group.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbGroup){
                res.json(dbGroup)
            })

    });

    app.delete("/api/groups/:id", function(req, res){
        db.Group.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbGroup){
            res.json(dbGroup)
        })
    });
}