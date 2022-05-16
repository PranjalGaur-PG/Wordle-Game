const mongoose = require("mongoose");

const Model = mongoose.Schema({
  number: {
    type: "Number",
    required: true,
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

module.exports = mongoose.model("attempt", Model);
