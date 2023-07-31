const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    addres: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    timeOfWorking: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
    },
    isCreated: {
        type: Boolean,
    },
    admins: {
        type: [String],
        required: true,
    },
    products: {
        type: [String],
    },
    catygories: {
        type: [String],
    }
}, { bufferCommands: false });

const shopModel = mongoose.model('Shop', shopSchema);

module.exports = shopModel;
