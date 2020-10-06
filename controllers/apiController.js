const eventModel = require("../models/Event");

module.exports = {
  createEvent: (req, res) => {
    res.send("create event");
  },
  getEvent: (req, res) => {
    res.send("get event");
  },
};
