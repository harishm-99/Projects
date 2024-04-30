const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type:Number, required:true},
    dateTime: { type: Date, required: true },  
})

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;