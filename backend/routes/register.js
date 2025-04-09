import express from 'express';
import bcrypt from 'bcryptjs';
import db from '../config/db.js';

const app = express();
const router = express.Router();
app.use(express.json());

router.post('/register', async (req, res) => {
    const { username, first_name, last_name, email, password } = req.body;

    // Validate input
    if (!username || !first_name || !last_name || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // SQL query to insert student data
    const query = `
        INSERT INTO student (username, first_name, last_name, email, password)
        VALUES (?, ?, ?, ?, ?);
    `;
    
    try {
        // Execute the query
        const [result] = await db.execute(query, [username, first_name, last_name, email, hashedPassword]);

        // Send success response
        res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
        console.error(error);
        // Handle errors (e.g., duplicate username/email)
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'Username or email already exists' });
        }
        res.status(500).json({ message: 'An error occurred while registering the student' });
    }
});

export default router;