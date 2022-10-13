const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {signUp,verifyOtp} = require('../controller/user.controller');
const authController = require("../controller/auth.controller");

router.route('/signup').post(signUp);

router.route('/signup/verify').post(verifyOtp);

router.use(authController.protect);

module.exports = router;