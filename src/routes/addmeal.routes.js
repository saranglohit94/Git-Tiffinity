const { Router } = require("express");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const { body, validationResult } = require("express-validator");

const addmealController = require("../controller/addmeal.controller");

router.post("/", async (req, res) => {
  const addmealData = await addmealController.createaddmeal(req.body);
  res.json({ data: addmealData });
});


module.exports = router;
