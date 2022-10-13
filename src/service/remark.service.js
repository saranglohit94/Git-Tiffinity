const remarkModel = require("../models/remark.models");

const getremark = async (remarkParams) => {
  //console.log("remarkParams",remarkBody);
  const result = await remarkModel.find({ remarkParams }); //(remarkBody||{})
  //console.log(remarkParams);
  console.log(result);
  return result;
};

const createremark = async (remarkBody) => {
  const newData = new remarkModel({
    customername: remarkBody.customername,
    addremark: remarkBody.addremark,
  });

  const result = await newData.save();
  //console.log(result);
  return result;
};

const updateremark = async (remarkBody, remarkParams) => {
  console.log("remarkupdate", remarkBody);

  const result = await remarkModel.findOneAndUpdate(
    { _id: remarkParams.id },
    {
      $set: {
        addremark: remarkBody.addremark,
      },
    },
    { new: true }
  );

  return result;
};

const deleteremark = async (remarkParams) => {
  //console.log("remarkbody",remarkBody)
  const result = await remarkModel.findOne({ _id: remarkParams.id });
  result.delete();
  return result;
};

module.exports = {
  createremark,
  getremark,
  updateremark,
  deleteremark,
};
