const { Router } = require("express");
const express = require("express");
// const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const remarkController = require("../controller/remark.controller");
// const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", async (req, res) => {
  const remarkData = await remarkController.getremark(req.params);
  res.json({ data: remarkData });
});



router.post("/",async(req,res)=>{
    const remarkData = await remarkController.createremark(req.body);
    res.json({ data: remarkData });
  });

router.patch("/:id", async (req, res, next) => {
  console.log(req.body);
  const remarkData = await remarkController.updateremark(req.body, req.params);
  console.log(req.params);
  console.log("data", remarkData);
  res.status(200).json({ data: remarkData });
});

router.delete("/:id", async (req, res) => {
  const remarkData = await remarkController.deleteremark(req.params);
  //console.log("data",remarkData);
  res.json({ data: null });
});

router.get("/", function (req, res, next) {
  res.json({ hello: "world" });
});

module.exports = router;
