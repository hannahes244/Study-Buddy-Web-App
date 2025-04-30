import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import express from "express";
import Student from "../models/student.js";
import Educator from "../models/educator.js";
import { generateToken } from "../midware/generateToken.js";

dotenv.config();

const router = express.Router();

// Student login // /student
router.post("/login/student", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    
    // Find student with the appropriate email
    const student = await Student.findOne({ where: { email } });
    if (!student) return res.status(404).json({ message: "Account not found" });

    // Does the password entered match the hash?
    // If so, isMatch should be true
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken({ id: student.id, role: "student" });
    const { password: hashedPassword, ...studentData } = student.toJSON();
    res.json({ token, student: studentData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Educator login
router.post("/login/educator", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const educator = await Educator.findOne({ where: { email } });
    if (!educator)
      return res.status(404).json({ message: "Account not found" });

    const isMatch = await bcrypt.compare(password, educator.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken({ id: educator.id, role: "educator" });
    const { password: hashedPassword, ...educatorData } = educator.toJSON();
    res.json({ token, educator: educatorData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

// import express from 'express';
// import bcrypt from 'bcryptjs';
// import db from '../config/db.js';

// const router = express.Router();

// // Login Route
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     try {
//         // Check if user exists in the database
//         const query = `SELECT username, password FROM student WHERE email = ?`;
//         const [rows] = await db.execute(query, [email]);

//         if (rows.length === 0) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         const user = rows[0];

//         // Compare the entered password with the hashed password
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // If passwords match, authentication is successful
//         res.status(200).json({ message: 'Login successful', userId: user.id, username: user.username });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// export default router;