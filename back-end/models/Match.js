const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
  user1: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  user2: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
  status: { type: String, enum: ["pending", "accepted", "declined"], default: "pending" }
});

module.exports = mongoose.model("Match", MatchSchema);