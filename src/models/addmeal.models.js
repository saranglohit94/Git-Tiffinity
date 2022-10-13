const mongoose = require("mongoose");

const addmealSchema = new mongoose.Schema({
  titleoftheaddon: {
    type: String,
    required: true,
  },

  addonprice: {
    type: Number,
    required: true,
  },
});

const addmeal = new mongoose.model("addmeal", addmealSchema);
addmeal.createIndexes();
module.exports = addmeal;
