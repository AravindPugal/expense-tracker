import React, { useContext } from 'react';
import ListItem from './ListItem';
import globalState from '../context/contextVariable';

const History = () => {
    const { transactions } = useContext(globalState);
    return (
        <div className="history">
            <h3>History</h3>
            <ul className="transaction-list">
                {transactions.map((transaction) => (
                    <ListItem
                        key={transaction.id}
                        transactionDetails={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default History;
