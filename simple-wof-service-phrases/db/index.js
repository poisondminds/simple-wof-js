const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/simple-wof-phrases", {
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const initPhrases = require("../phrases-init.json");

const db = mongoose.connection;

// Init phrases DB
db.collection("phrases").insertMany(initPhrases);

module.exports = db;
