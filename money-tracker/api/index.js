const express = require('express');
const cors =require('cors');
const Transaction = require('./models/transaction.js');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.get('/api/test', function (req, res) {
    res.json('test ok2')
});

app.post('/api/transaction',async function (req, res) {
    try {
        await mongoose.connect('mongodb+srv://harishm-99:7SfldfRRPKIHbdd8@cluster0.z30flns.mongodb.net/money-tracker');
        console.log("Connected to MongoDB");    
        
        const { name, description, price, dateTime } = req.body;
        const transaction = await Transaction.create({ name, description, price, dateTime });
        
        res.json(transaction);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/transactions',async function (req, res) {
    await mongoose.connect('mongodb+srv://harishm-99:7SfldfRRPKIHbdd8@cluster0.z30flns.mongodb.net/money-tracker');
    const transactions = await Transaction.find({});
    res.json(transactions);
})

// console.log(process.env.MONGO_URL);
app.listen(PORT, () => {
    console.log(`listening to server ${PORT}`);
}); 