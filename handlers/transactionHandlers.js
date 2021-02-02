const Transaction = require('../models/transactionModel');
const getTransactions = async (req, res) => {
    try {
        const allTransactions = await Transaction.find({});
        res.status(200).json({
            "success": true,
            "data": allTransactions
        });
    } catch (error) {
        res.status(404).json({
            "success": false,
            "message": "some thing went wrong"
        })
    }
}
const addTransaction = async (req, res) => {
    try {
        const { text, amount } = req.body;
        await Transaction.create(req.body);
        res.status(201).json({
            "success": true,
            data: { text, amount }
        });
    } catch (error) {
        console.log(error);
        res.status(403).json({
            "success": false,
            "message": "some thing went wrong...! Required values may be missing"
        })
    }
}
const deleteTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        const match = await Transaction.findById(id);
        match.remove();
        res.status(204).json({
            "success": true,
            data: {}
        });

    } catch (error) {
        res.status(500).json({
            "success": false,
            "message": "some thing went wrong"
        })
    }
}

const transactionHandlers = {
    getTransactions,
    addTransaction,
    deleteTransaction
};

module.exports = transactionHandlers;