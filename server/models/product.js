const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }, 
  image: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  }
}, { bufferCommands: false });

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;