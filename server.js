// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const polls = require('./routes/polls');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/polls', polls);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
