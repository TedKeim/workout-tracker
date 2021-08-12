const router = require('express').Router(); 
const db = require('../models');

router.get("/api/workouts", (req, res) => {
      console.log("ALL WORKOUTS");
        console.log(dbWorkout);
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });