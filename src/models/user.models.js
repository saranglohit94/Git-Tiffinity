const {Schema,model} = require('mongoose');
const jwt = require('jsonwebtoken');
// const { timeStamp } = require('console');
const userSchema = Schema({
    number:{
        type:String,
        required:true
    }
}, {timeStamps:true});
userSchema.methods.generateJWT = function(){
    const token = jwt.sign({
        _id:this._id,
        number:this.number
    },process.env.JWT_SECRET_KEY,{expiresIn:"30d"});
    return token
}
module.exports.User =model('User',userSchema);