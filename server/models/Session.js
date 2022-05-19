const mongoose = require("mongoose");
const Attempt = require("./Attempt");

const Session = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  word: {
    type: String,
    required: true,
  },
  attempts: {
    type: [Attempt],
    ref: "attempt",
  },
  Date: {
    type: "date",
    default: Date.now,
  },
});

module.exports = mongoose.model("session", Session);
