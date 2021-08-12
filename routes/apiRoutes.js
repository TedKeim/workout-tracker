const router = require('express').Router(); 
const db = require('../models');

router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => { res.json(dbWorkout) } )
    .catch(err => { res.json(err) });
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