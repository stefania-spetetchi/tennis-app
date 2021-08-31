const mongoose = require('mongoose');

const { Schema } = mongoose;

const LineupSchema = new Schema({
  opponentTeam: '',
  opponentCaptainEmail: '',
  date: '',
  time: '',
  line_1_1: '',
  line_1_2: '',
  line_2_1: '',
  line_2_2: '',
  line_3_1: '',
  line_3_2: '',
});

module.exports = mongoose.model('Lineup', LineupSchema);
