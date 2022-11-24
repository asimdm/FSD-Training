const mongoose = require("mongoose");
const {Schema, model} = mongoose;
const userSchema= new Schema({
    UserNo: {type: Number},
    name: {type: String, required:true, default: "User"},
    email: {type: String},
    mobile_number: {type: Number},
    password: {type: String}
});

const userModel= new model("users",userSchema);

module.exports = userModel;