const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeletedMatchSchema = new Schema({
  type: '',
  level: Number,
  date: '',
  location: '',
  opponent: [],
  scores: [[Number]],
  notes: '',
  winner: '',
});

module.exports = mongoose.model('DeletedMatch', DeletedMatchSchema);
