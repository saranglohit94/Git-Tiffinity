const mealService = require("../service/meal.service");

const createmeal = async (mealBody) => {
  try {
    const mealData = await mealService.createmeal(mealBody);
    console.log("mealData", mealData);
    return mealData;
  } catch (error) {
    console.log(error);
  }
};

const getmeal = async (mealParams) => {
  const mealData = await mealService.getmeal(mealParams);
  console.log(mealData);
  return mealData;
};
const updatemeal = async (mealBody, mealParams) => {
  const mealData = await mealService.updatemeal(mealBody, mealParams);
  console.log("mealData", mealData);
  return mealData;
};

const deletemeal = async (mealParams) => {
  const mealData = await mealService.deletemeal(mealParams);
  console.log("mealData", mealData);
  return mealData;
};

module.exports = {
  createmeal,
  getmeal,
  updatemeal,
  deletemeal,
};
