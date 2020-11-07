const Phrase = require("../models/phrase-model");

getPhrases = async (req, res) => {
  await Phrase.find({})
    .exec(function (err, phrases) {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!phrases.length) {
        return res
          .status(404)
          .json({ success: false, error: `Phrase not found` });
      }
      return res.status(200).json({ success: true, data: phrases });
    })
    .catch((err) => console.log(err));
};

getRandomPhrase = async (req, res) => {
  // Get the count of all phrases
  await Phrase.countDocuments().exec(function (err, count) {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    // Random entry in range
    var random = Math.floor(Math.random() * count);
    Phrase.findOne()
      .skip(random)
      .exec(function (err, phrase) {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }
        return res.status(200).json({ success: true, data: phrase });
      });
  });
};

module.exports = {
  getPhrases,
  getRandomPhrase,
};
