// Payment.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const PaymentSchema = new mongoose.Schema({
    products: [ProductSchema], // Array of product objects
    totalPrice: Number,
    description: String
});

const PaymentModel = mongoose.model("payments", PaymentSchema);

module.exports = PaymentModel;
