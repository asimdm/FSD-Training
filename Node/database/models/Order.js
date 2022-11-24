const mongoose = require("mongoose");
const {Schema, model} = mongoose;
const orderSchema= new Schema({
    orderNo: {type: String},
    orderDate: {type: Date},
    UserNo: {type: Number},
    serial_no: {type: String}
});

const orderModel= new model("orderd",orderSchema);

module.exports = userModel;