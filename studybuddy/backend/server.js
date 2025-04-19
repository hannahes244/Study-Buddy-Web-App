import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import register from './routes/register.js';
import login from './routes/login.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/register', register);
app.use('/api/login', login);

const port = 10000; //process.env.DB_PORT;

app.get('/', (req, res) => {
    res.send('Welcome to Study Buddy Matchmaker API!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


//start creating endpoints