const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('../../node_modules/express');

const app = express();
const router = express.Router();
const Match = require('../models/match');
const Lineup = require('../models/lineup');

// app.arguments(cors());
router.use(bodyParser.json());

router.post('/matches', async (req, res) => {
  try {
    const newMatch = new Match({
      type: req.body.type,
      level: req.body.level,
      date: req.body.date,
      location: req.body.location,
      opponent: [req.body.opponent_1, req.body.opponent_2],
      winner: req.body.winner,
      scores: [
        [req.body.scoreSet1You, req.body.scoreSet1Opponent],
        [req.body.scoreSet2You, req.body.scoreSet2Opponent],
        [req.body.scoreSet3You, req.body.scoreSet3Opponent],
      ],
      notes: req.body.notes,
    });
    await newMatch.save(newMatch);
    res.json(newMatch);
  } catch (err) {
    console.log(err);
  }
});

router.get('/matches', (req, res, next) => {
  const query = {};
  if (req.query.level) query.level = req.query.level;

  Match.find(query).exec((err, matches) => {
    Match.count().exec((err) => {
      if (err) return next(err);
      res.send(matches);
    });
  });
});

router.post('/lineups', async (req, res) => {
  try {
    const newLineup = new Lineup({
      opponentTeam: req.body.opponentTeam,
      opponentCaptainEmail: req.body.opponentCaptainEmail,
      date: req.body.date,
      time: req.body.time,
      line_1: req.body.line_1,
      line_2: req.body.line_2,
      line_3: req.body.line_3,
    });
    await newLineup.save(newLineup);
    res.json(newLineup);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
