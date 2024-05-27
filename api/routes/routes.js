const express = require("express");
const router = express.Router();

const trainers = require("../getTrainers");
const schedule = require("../getSchedule");

router.get("/trainers", trainers);
router.get("/schedule", schedule);

module.exports = router;