const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    addres: {
        type: String,
        required: true,
    },
    price: {
        type: String,
    },
    owner: {
        type: String,
    },
    date: {
        type: String,
    },
    card: {
        type: String,
    }
}, { bufferCommands: false });

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;