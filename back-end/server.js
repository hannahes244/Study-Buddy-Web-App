const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'study_buddy'
});

db.connect((err) => {
    if (err) {
        console.error('Could not connect to database:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL database');
});

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Study Buddy Matchmaker API!');
});

app.get('/api/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch students' });
        }
        res.status(200).json(result);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
