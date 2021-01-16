import React, { useContext } from "react";
import globalState from '../context/contextVariable';

const IncomeExpense = () => {
    const { transactions } = useContext(globalState);
    const income = transactions.filter((transaction) => transaction.amount > 0);
    const expense = transactions.filter((transaction) => transaction.amount < 0);
    return (
        <div className="income-expense">
            <div className="income">
                <h3>INCOME</h3>
                <p className="amount">₹ {income.reduce((acc, transaction) => {
                    return acc + parseInt(transaction.amount);
                }, 0)}</p>
            </div>
            <div className="expense">
                <h3>EXPENSE</h3>
                <p className="amount">₹ {expense.reduce((acc, transaction) => {
                    return acc + Math.abs(transaction.amount);
                }, 0)}</p>
            </div>
        </div>
    );
};

export default IncomeExpense;
