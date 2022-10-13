const customerService = require('../service/customer.service');

const getcustomer = async (customerParams)=>{
    const customerData = await customerService.getcustomer(customerParams);
    console.log(customerData);
    return customerData;
}

const createcustomer = async (customerBody)=>{
    try{
    const customerData = await customerService.createcustomer(customerBody);
    console.log("customerData",customerData);
    return customerData;
    }
    catch(error){
        console.log(error);
    }
}

const updatecustomer = async (customerBody,customerParams)=>{
    const customerData = await customerService.updatecustomer(customerBody,customerParams);
    console.log("customerData",customerData);
    return customerData;
}

const deletecustomer = async (customerParams)=>{
    const customerData = await customerService.deletecustomer(customerParams);
    console.log("customerData",customerData);
    return customerData;
}

    

module.exports = {
    createcustomer,
    getcustomer,
    updatecustomer,
    deletecustomer
}

