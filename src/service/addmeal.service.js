const addmealModel = require("../models/addmeal.models");

const createaddmeal = async (addmealBody) => {
  const newData = new addmealModel({
    titleoftheaddon: addmealBody.titleoftheaddon,
    addonprice: addmealBody.addonprice,
  });

  const result = await newData.save();
  // console.log(result);
  return result;
};

module.exports = {
  createaddmeal,
};
