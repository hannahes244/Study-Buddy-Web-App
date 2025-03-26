const express = require("express");
const Match = require("../models/Match");
const router = express.Router();

// Create a match
router.post("/", async (req, res) => {
  try {
    const { user1, user2, classId } = req.body;
    const match = new Match({ user1, user2, class: classId });
    await match.save();
    res.status(201).json(match);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all matches
router.get("/", async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
});

module.exports = router;