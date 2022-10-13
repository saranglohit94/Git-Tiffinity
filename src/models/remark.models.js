const mongoose = require("mongoose");
const remarkSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: true,
  },
  addremark: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const remark = new mongoose.model("remark", remarkSchema);
remark.createIndexes();
module.exports = remark;
