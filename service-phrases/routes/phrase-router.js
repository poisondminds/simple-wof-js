const express = require("express");

const PhraseCtrl = require("../controllers/phrase-ctrl");

const router = express.Router();

router.get("/phrases", PhraseCtrl.getPhrases);
router.get("/phrase", PhraseCtrl.getRandomPhrase);

module.exports = router;
