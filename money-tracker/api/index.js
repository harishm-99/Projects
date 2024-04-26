import express from 'express';
import cors from 'cors';
// import Transaction from './models/transaction';
const Transaction = require('./models/transaction')
const mongoose = require('mongoose');
// import mongoose from 'mongoose';
// import('dotenv').config();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.get('/api/test', function (req, res) {
    res.json('test ok2')
});

app.post('/api/transaction', function (req, res) {
    mongoose.connect();
    const { name, description, dateTime } = req.body;
    res.json(req.body);
});

console.log(process.env.MONGO_URL);
app.listen(PORT, () => {
    console.log(`listening to server ${PORT}`);
}); 