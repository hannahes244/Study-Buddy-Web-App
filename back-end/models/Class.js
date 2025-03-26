const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] // Users taking this class
});

module.exports = mongoose.model("Class", ClassSchema);
