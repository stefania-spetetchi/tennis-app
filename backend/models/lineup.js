const mongoose = require('mongoose');

const { Schema } = mongoose;

const LineupSchema = new Schema({
  opponentTeam: '',
  opponentCaptainEmail: '',
  date: '',
  time: '',
  line_1: '',
  line_2: '',
  line_3: '',
});

module.exports = mongoose.model('Lineup', LineupSchema);
