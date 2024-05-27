const express = require("express");
const router = express.Router();

const trainers = require("../getTrainers");
const schedule = require("../getSchedule");
const feedback = require("../feedback");
const register = require("../register");
const login = require("../login");

router.get("/trainers", trainers);
router.get("/schedule", schedule);
router.get("/feedback", feedback);

router.post("/schedule", schedule);
router.post("/feedback", feedback);
router.post("/trainers", trainers);
router.post("/register", register);
router.post("/login", login);

router.delete("/trainers/:id", trainers);
router.delete("/schedule/:id", schedule);

module.exports = router;