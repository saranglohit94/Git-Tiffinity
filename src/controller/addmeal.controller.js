// const meal = require("../models/meal.models");
const addmealService = require('../service/addmeal.service');

const createaddmeal = async (addmealBody)=>{
    try{
    const addmealData = await addmealService.createaddmeal(addmealBody);
    console.log("addmealData",addmealData);
    return addmealData;
    }
    catch(error){
        console.log(error);
    }
}



module.exports = {
    createaddmeal
}


