const router = require('express').Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, 
        {$push:{exercises:req.body}},
        {new: true, runValidators: true}
        ).then(data => {
            res.send(data);
        }).catch(err => {
            console.log(err);
        });
});

module.exports = router;