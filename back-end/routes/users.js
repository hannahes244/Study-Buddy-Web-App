const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, bio, classes, availability } = req.body;
    const user = new User({ name, email, password, bio, classes, availability });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find().populate("classes");
  res.json(users);
});

module.exports = router;