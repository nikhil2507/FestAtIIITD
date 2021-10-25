const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const EventSchema = new Schema(
  {
    name: String,
    startDate: String, //string or date-time? // calendar input?--later on
    endDate: String,
  },
);

// Model
const Events = mongoose.model("events", EventSchema);

// Exports
module.exports = Events;