const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET all students
router.get('/', async (req, res) => {
    try {
        const [users] = await db.query("SELECT id, first_name, last_name, email, profile_image FROM students");
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST new student
router.post('/students/register', async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        const [result] = await db.query(
            "INSERT INTO students (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
            [first_name, last_name, email, password]
        );

        res.status(201).json({ id: result.insertId, message: "Student created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET user by id
router.get('/students/:id', async (req, res) => {
    try {
        const [user] = await db.query("SELECT * FROM students WHERE id = ?", [req.params.id]);
        if (user.length === 0) return res.status(404).json({ message: "Student not found" });
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
