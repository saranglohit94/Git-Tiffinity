const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: true,
  },

  customerphone: {
    type: String,
    required: true,
  },
});

const customer = new mongoose.model("customer", customerSchema);
customer.createIndexes();
module.exports = customer;
