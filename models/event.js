const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  location: String,
  ages: Number,
  duration: Number,
  location: Number,
  activityLevel: Number,
  price: Number,
  approved: Boolean,
  description: String,
  date: { type: Date, default: Date.now },
  link: String
  
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;