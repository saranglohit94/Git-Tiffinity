const registrationService = require('../service/registration.service');


const getregistration = async (registrationParams)=>{
    const registrationData = await registrationService.getregistration(registrationParams);
    console.log(registrationData);
    return registrationData;
}

const createregistration = async (registrationBody)=>{
    try{
    const registrationData = await registrationService.createregistration(registrationBody);
    console.log("registrationData",registrationData);
    return registrationData;
    }
    catch(error){
        console.log(error);
    }
}

const updateregistration = async (registrationBody,registrationParams)=>{
    const registrationData = await registrationService.updateregistration(registrationBody,registrationParams);
    console.log("registrationData",registrationData);
    return registrationData;
}

const deleteregistration = async (registrationParams)=>{
    const registrationData = await registrationService.deleteregistration(registrationParams);
    console.log("registrationData",registrationData);
    return registrationData;
}


    

module.exports = {
    getregistration,
    createregistration,
    updateregistration,
    deleteregistration

}

   

