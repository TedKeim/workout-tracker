const router = require('express').Router(); 
const db = require('../models');

router.get("/api/workouts", (req, res) => {
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;   
        });

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);

    });

    router.post("/api/workouts", ({ body }, res) => {
        // console.log("WORKOUT TO BE ADDED");
        // console.log(body);

        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
    });

    router.get("/api/workouts/range", (req, res) => {

        db.Workout.find({}).then(dbWorkout => {
            console.log("ALL WORKOUTS");
            console.log(dbWorkout);
    
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    
    });
    
    
    module.exports = router;