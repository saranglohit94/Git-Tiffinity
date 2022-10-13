const customerModel = require("../models/customer.models");



const getcustomer = async (customerParams) => {
  //console.log("customerParams",customerBody);
  const result = await customerModel.find({ customerParams }); //(customerBody||{})
  //console.log(customerParams);
  console.log(result);
  return result;
};

const createcustomer = async (customerBody) => {
  const newData = new customerModel({
    customername: customerBody.customername,
    customerphone: customerBody.customerphone,
  });

  const result = await newData.save();
  //console.log(result);
  return result;
};

const updatecustomer = async (customerBody, customerParams) => {
  console.log("customerupdate", customerBody);

  const result = await customerModel.findOneAndUpdate(
    { _id: customerParams.id },
    {
      $set: {
        customername: customerBody.customername,

        customerphone: customerBody.customerphone,
      },
    },
    { new: true }
  );

  return result;
};

const deletecustomer = async (customerParams) => {
  //console.log("customerbody",customerBody)
  const result = await customerModel.findOne({ _id: customerParams.id });
  result.delete();
  return result;
};

module.exports = {
  createcustomer,
  getcustomer,
  updatecustomer,
  deletecustomer,
};
