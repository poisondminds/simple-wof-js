const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const scoreRouter = require("./routes/score-router");

const app = express();
const apiPort = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello Scores Service!");
});

app.use("/api", scoreRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
