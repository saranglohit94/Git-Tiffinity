const express = require("express");
const router = express.Router();

const authController = require("../controller/auth.controller");

router.get("/", authController.protect, authController.getUserFromToken);
router.post("/customer", authController.customer);

module.exports = router;