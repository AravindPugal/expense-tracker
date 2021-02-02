const mongoose = require('mongoose');

transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'text is missing']
    },
    amount: {
        type: Number,
        required: [true, 'amount is missing']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const transactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = transactionModel;