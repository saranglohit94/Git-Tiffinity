const { Router } = require("express");
const express = require("express");
// const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const customerController = require("../controller/customer.controller");
// const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", async (req, res) => {
  const customerData = await customerController.getcustomer(req.params);
  res.json({ data: customerData });
});



router.post("/",async(req,res)=>{
    const customerData = await customerController.createcustomer(req.body);
    res.json({ data: customerData });
  });

router.patch("/:id", async (req, res, next) => {
  console.log(req.body);
  const customerData = await customerController.updatecustomer(req.body, req.params);
  console.log(req.params);
  console.log("data", customerData);
  res.status(200).json({ data: customerData });
});

router.delete("/:id", async (req, res) => {
  const customerData = await customerController.deletecustomer(req.params);
  //console.log("data",customerData);
  res.json({ data: null });
});

router.get("/", function (req, res, next) {
  res.json({ hello: "world" });
});

module.exports = router;
