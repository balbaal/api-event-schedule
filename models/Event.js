const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  participant: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  note: {
    type: String,
  },
  picture: {
    type: String,
  },
});

module.exports = mongoose.model("Event", eventSchema);
