const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Phrase = new Schema({
  value: { type: String, required: true, unique: true },
  clue: { type: String, required: false },
});

module.exports = mongoose.model("phrases", Phrase);
