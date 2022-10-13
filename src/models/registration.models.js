const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({
    
    images: {
        type: String,
        required:true
    },
    ownername: {
        type: String,
        required: true
    },
    businessname: {
        type: String,
        required: true
    }
    
})

   
  

const Registration = new mongoose.model('Registration',registrationSchema);
Registration.createIndexes();
module.exports = Registration;

