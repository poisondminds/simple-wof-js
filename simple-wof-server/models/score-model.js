const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Score = new Schema(
    {
        username: { type: String, required: true },
        score: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('scores', Score)