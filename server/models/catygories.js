const mongoose = require('mongoose');

const catygorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    products: {
        type: String,
    },
    shopId: {
        type: String,
    }
}, { bufferCommands: false });

const catygoryModel = mongoose.model('Catygory', catygorySchema);

module.exports = catygoryModel;

const mongoose = require('mongoose');
