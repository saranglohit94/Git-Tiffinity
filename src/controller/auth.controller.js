const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");


exports.protect = async (req, res, next) => {
    const token = req.header("x-auth-token");
  
    if (!token) {
      return res.status(401).json({ msg: "Authorization denied" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id;
      next();
    } catch (err) {
      console.log(err.message);
      res.status(401).json({ msg: err.message });
    }
  };//non-login user

exports.getUserFromToken = async (req, res) => {
    try {
      const user = await User.findById(req.user).select("number");
      res.json({ status: "success", data: { user } });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ status: "fail", msg: "Server Error" });
    }
  };
//for customer
exports.customer = async (req, res) => {
    const { customername,customerphone } = req.body;
  
    let user = await User.findOne({ customerphone });
    try {
      if (user) {
        return res
          .status(400)
          .json({ status: "error", msg: "User already exists" });
      }
      user = await User.create({ customername, customerphone});
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d"
      });
      res.status(201).json({ status: "success", data: { user, token } });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ status: "error", msg: err.message });
    }
  };