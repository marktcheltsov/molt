const mongoose = require('mongoose');

const { default: isEmail } = require('validator/lib/isEmail');
const { default: isURL } = require('validator/lib/isURL');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
}, { bufferCommands: false });

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;


