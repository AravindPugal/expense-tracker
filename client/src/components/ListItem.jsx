import React, { useContext } from 'react';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { globalState } from '../context/GlobalState';
import axios from 'axios';



const ListItem = ({ transactionDetails }) => {
    const expenseDetails = useContext(globalState);
    const removeTransaction = () => {
        expenseDetails.globalStateHandler({ type: "remove", id: transactionDetails._id })
        axios.delete('transaction/' + transactionDetails._id)

    }
    return (<li className={"list-item " + (transactionDetails.amount < 0 && "red-right-border")}  >
        <CancelPresentationIcon onClick={removeTransaction} className="close-btn" />
        <span className="trans-text">{transactionDetails.text}</span>
        <span className="trans-amount">₹ {transactionDetails.amount}</span>
    </li>);
}

export default ListItem;