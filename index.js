const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
require('dotenv/config');
const static_path = path.join(__dirname, "src/public");
const routes = require("./src/routes/app");

const url =
  "mongodb+srv://sarang:bG6UxgJxRSmnS9S6@cluster0.1j9az.mongodb.net/tiffinity";

const port = process.env.PORT || 8000;

app.use(express.static(static_path));
console.log("ccc", static_path);

mongoose
  .connect(url)
  .then(() => console.log("connection done"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use(express.json());

app.use("/", routes);


app.use('/registration',express.static('uploads'));

app.use(function (req, res, next) {
 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});






app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
