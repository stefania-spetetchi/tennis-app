const express = require('../../node_modules/express');
const router = express.Router();
const Match = require('../models/match');
// const cors = require('cors');
const bodyParser = require('body-parser');
// const app = express();


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
      scores: [[req.body.scoreSet1You,req.body.scoreSet1Opponent],[req.body.scoreSet2You,req.body.scoreSet2Opponent], [req.body.scoreSet3You,req.body.scoreSet3Opponent]],
      notes: req.body.notes,
    });
    await newMatch.save(newMatch)
      res.json(newMatch);
  } catch (err) {
    console.log(err);
  }
});

router.get('/matches', (req, res, next) => {
  let query = {};
  if (req.query.level) query['level'] = req.query.level;

  Match
    .find(query)
    .exec((err, matches) => {
      Match.count().exec((err, count) => {
      if (err) return next(err);
      res.send(matches)
    })
    })
});

module.exports = router;