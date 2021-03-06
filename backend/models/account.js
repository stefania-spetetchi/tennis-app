const mongoose = require('mongoose');

const { Schema } = mongoose;

const Account = new Schema({
  username: String,
  email: String,
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Account', Account);
