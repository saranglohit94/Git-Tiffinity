const { Router } = require("express");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const { body, validationResult } = require("express-validator");
// const mealModel = require("../models/meal.models");
const mealController = require("../controller/meal.controller");

router.post("/", async (req, res) => {
  const mealData = await mealController.createmeal(req.body);
  res.json({ data: mealData });
});

router.get("/", async (req, res) => {
  const mealData = await mealController.getmeal(req.params);
  res.json({ data: mealData });
});

router.patch("/:id", async (req, res, next) => {
  console.log(req.body);
  const mealData = await mealController.updatemeal(req.body, req.params);
  console.log(req.params);
  console.log("data", mealData);
  res.status(200).json({ data: mealData });
});

router.delete("/:id", async (req, res) => {
  const mealData = await mealController.deletemeal(req.params);
  console.log("data",mealData);
  res.json({ data: null });
});

module.exports = router;
