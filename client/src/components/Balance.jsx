import React, { useContext } from "react";
import globalState from '../context/contextVariable';

export const Balance = () => {
    const { transactions } = useContext(globalState);
    return (
        <div className="balance">
            <h3>YOUR BALANCE</h3>
            <p className="amount">₹ {transactions.reduce((acc, transaction) => {
                return acc + parseInt(transaction.amount);
            }, 0)}</p>
        </div>
    );
};
