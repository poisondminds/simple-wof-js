const express = require('express')

const ScoreCtrl = require('../controllers/score-ctrl')

const router = express.Router()

router.post('/score', ScoreCtrl.createScore)
router.get('/scores', ScoreCtrl.getScores)

module.exports = router