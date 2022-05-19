const mongoose = require("mongoose");

const Attempt = mongoose.Schema({
  number: {
    type: "Number",
    required: true,
    min : 1,
    max : 6
  },
  response: {
    type: "String",
    required: true,
  },
  green: {
    type: ["Number"],
    required: true,
  },
  yellow: {
    type: ["Number"],
    required: true,
  },
});

module.exports = Attempt;
