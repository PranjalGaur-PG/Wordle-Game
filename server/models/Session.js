const mongoose = require("mongoose");

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
    type: [mongoose.Schema.Types.ObjectId],
    ref: "attempt",
  },
  Date: {
    type: "date",
    default: Date.now,
  },
});

module.exports = mongoose.model("session", Session);