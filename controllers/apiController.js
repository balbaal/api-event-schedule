const eventModel = require("../models/Event");

module.exports = {
  getEvent: async (req, res) => {
    try {
      const eventGet = await eventModel.find();
      res.status(200).json({
        status: "success",
        message: "success to get list event",
        data: eventGet,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "something wrong when trying to get event",
      });
    }
  },
  createEvent: async (req, res) => {
    const { title, location, participant, note } = req.body;

    try {
      const eventCreated = await eventModel.create({
        title,
        location,
        participant,
        note,
        picture: `images/${req.file.filename}`,
      });

      res.status(201).json({
        status: "success",
        message: "success create event",
        data: eventCreated,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "something wrong when trying to create event",
      });
    }
  },
};
