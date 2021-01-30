const getTransactions = (req, res) => {
    console.log('all transactions are here');
    res.send('ok');
}
const addTransaction = (req, res) => {
    console.log('transaction added');
    res.send('ok');
}
const deleteTransaction = (req, res) => {
    console.log('transaction deleted');
    res.send('ok');
}

const transactionHandlers = {
    getTransactions,
    addTransaction,
    deleteTransaction
};

module.exports = transactionHandlers;