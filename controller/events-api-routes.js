var db = require("../models")

module.exports = function(app){
    app.get("/api/events", function(req, res){
        db.Events.findAll({ include: [db.Group]}).then(function(dbEvents){
            res.json(dbEvents)
        });
    });

    app.get("/api/events/:id", function(req, res){
        db.Events.findOne({
            where: {
                id:req.params.id
            },
            include: [db.Group]
        }).then(function(dbEvents){
            res.json(dbEvents);
        });
    });
 
    app.post("/api/events", function(req, res){
        console.log(req.body)
        db.Events.create(req.body).then(function(dbEvents){
            res.json(dbEvents)
        });
    });

    app.put("/api/events", function(req, res){
        db.Events.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }
        ).then(function(dbEvents){
            res.json(dbEvents)
        });
    });

    app.delete("/api/events/:id", function(req, res){
        db.Events.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbEvents){
            res.json(dbEvents)
        });
    });
}