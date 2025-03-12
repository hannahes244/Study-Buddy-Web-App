const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed password
  bio: String,
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }], // References classes
  availability: [
    {
      day_of_week: { type: String, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], required: true },
      start_time: { type: String, required: true }, // Store time as "HH:MM"
      end_time: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);