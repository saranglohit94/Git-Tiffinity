const mealModel = require("../models/meal.models");

const createmeal = async (mealBody) => {
    const newData = new mealModel({
        titleofmeal:mealBody.titleofmeal,
        selectmealtype:mealBody.selectmealtype,
        definemenuitems:mealBody.definemenuitems,
        price:mealBody.price
    });
  
    const result = await newData.save();
    // console.log(result);
    return result;
  };

  const getmeal = async (mealParams) => {
   
    const result = await mealModel.find({ mealParams }); 
   
    console.log(result);
    return result;
  };

  const updatemeal = async (mealBody, mealParams) => {
    console.log("mealupdate", mealBody);
  
    const result = await mealModel.findOneAndUpdate(
      { _id: mealParams.id },
      {
        $set: {
          titleofmeal:mealBody.titleofmeal,
          selectmealtype:mealBody.selectmealtype,
          definemenuitems:mealBody.definemenuitems,
          price:mealBody.price
        },
      },
      { new: true }
    );
  
    return result;
  };
  
  const deletemeal = async (mealParams) => {
    //console.log("mealbody",mealBody)
    const result = await mealModel.findOne({ _id: mealParams.id });
    result.delete();
    return result;
  };

  module.exports = {
    createmeal,
    getmeal,
    updatemeal,
    deletemeal
  }