const { Router } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");

// const jwt = require('jsonwebtoken');
// const dotenv = require ('dotenv');
// dotenv.config();
const multer = require("multer");
const registrationController = require("../controller/registration.controller");
const Registration = require("../models/registration.models");

// const { body, validationResult } = require("express-validator");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "../uploads/")
    // cb(null, path.join(__dirname, './uploads/'));
    fs.mkdir("./uploads/", (err) => {
      cb(null, "./uploads/");
    });
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname); //Appending .jpg
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// const fileFilter = (req, file, cb) => {
//     var ext = path.extname(file.originalname);
//     if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
//        return callback(new Error('Only images are allowed'))
//     }
//     callback(null, true)
// };

const upload = multer({
  storage: storage,

  limit: {
    fieldSize: 1 * 1024 * 1024, //1 MB
  },
  fileFilter: fileFilter,
});

// router.post('/registration', upload.single('uploads'), registrationController.singleImageUpload);

router.post("/", upload.single("images"), (req, res, next) => {
  console.log(req.file,req.body);
  const registrationData = new Registration({
    images: req.file.path,
    ownername: req.body.ownername,
    businessname: req.body.businessname,
  });

  registrationData
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createRegistration: {
          ownername: result.ownername,
          businessname: result.businessname,
         
          
        },
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;
