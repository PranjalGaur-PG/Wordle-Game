const mongoose = require("mongoose");

const Attempt = mongoose.Schema({
  number: {
    type: "Number",
    required: true,
    min : 1,
    max : 6
  },
  response: {
    type: String,
    required: true,
  },
  color: {
    type: [String],
    required: true,
  }

});

module.exports = mongoose.model("attempt", Attempt);