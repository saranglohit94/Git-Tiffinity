const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  titleofmeal: {
    type: String,
    required: true,
  },

  selectmealtype: {
    type: String,
    enum: "Veg" || "Non-veg",
    required: true,
  },
  definemenuitems: {
    type: String,
    required: true,
  },

  price: {  
    type: Number,
    required: true,
  },
});

const meal = new mongoose.model("meal", mealSchema);
meal.createIndexes();
module.exports = meal;
