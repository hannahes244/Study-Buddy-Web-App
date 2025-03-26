const express = require("express");
const Class = require("../models/Class");
const router = express.Router();

// Create a new class
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newClass = new Class({ name });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all classes
router.get("/", async (req, res) => {
  const classes = await Class.find();
  res.json(classes);
});

module.exports = router;
