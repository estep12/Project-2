var db = require("../models")

module.exports = function(app){
    app.get("/api/groups", function(req, res){
        db.Group.findAll({
            include:[{
                model:db.Events,
                model:db.People,
                through: {attributes: []}
            }]
        }).then(function(dbGroup){
            res.json(dbGroup)
        });
    });

    app.get("/api/groups/:id", function(req, res){
        db.Group.findOne({
            where: {
                id: req.params.id
            }, 
            include: [db.Events, db.People]
        }).then(function(dbGroup){
            res.json(dbGroup)
        });
    });

    app.post("/api/groups", function(req, res){
        db.Group.create(
            req.body,
            {
                include: [{
                    model: db.Events,
                    model: db.People,
                    through: {attributes: []}
                }]
            }
        ).then(function(dbGroup){
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