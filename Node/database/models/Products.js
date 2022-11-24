const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const productSchema = new Schema({
    serial_no: {type: String},
    name: {type: String, required: true},
    category: {type: String},
    price: {type: Number},
    description: {type: String},
});

const productModel = new model("products",productSchema);

module.exports = productModel;