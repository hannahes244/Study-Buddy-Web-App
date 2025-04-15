import express from "express";
import bcrypt from "bcryptjs";
import Student from "../models/student.js";
import Educator from "../models/educator.js";

const router = express.Router();

router.post("/register/student", async (req, res) => {
  try {
    const { username, first_name, last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      username,
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Student account created", student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/register/educator", async (req, res) => {
  try {
    const { username, first_name, last_name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const educator = await Educator.create({
      username,
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Educator account created", educator });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
