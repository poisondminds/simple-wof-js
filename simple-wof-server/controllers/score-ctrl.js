const Score = require('../models/score-model')

createScore = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a score',
        })
    }

    const score = new Score(body)

    if (!score) {
        return res.status(400).json({ success: false, error: err })
    }

    score
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: score._id,
                message: 'Score created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Score not created!',
            })
        })
}

getScores = async (req, res) => {
    await Score.find({}).sort('-score').exec(function(err, scores) {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!scores.length) {
            return res
                .status(404)
                .json({ success: false, error: `Score not found` })
        }
        return res.status(200).json({ success: true, data: scores })
    }).catch(err => console.log(err))
}

module.exports = {
    createScore,
    getScores
}