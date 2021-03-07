import React, { useContext, useEffect } from 'react';
import ListItem from './ListItem';
import { globalState } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const History = () => {
    const globalstate = useContext(globalState);
    useEffect(() => {
        globalstate.getInitialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="history">
            <h3>History</h3>
            <ul className="transaction-list">
                {globalstate.transactions.map((transaction) => (
                    <ListItem
                        key={transaction._id}
                        transactionDetails={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default History;
