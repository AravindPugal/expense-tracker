import { useReducer } from 'react';
import handlerFunction from './handlerFunction';
import { createContext } from 'react';
import axios from 'axios';

const expenseDetails = {
    transactions: [],
}
export const globalState = createContext();


const GlobalState = (probs) => {
    const [state, globalStateHandler] = useReducer(handlerFunction, expenseDetails);
    const getInitialData = async () => {
        const response = await axios.get('transaction');
        console.log('inside getInitialData');
        const transaction = await response.data.data;
        console.log(transaction);
        globalStateHandler({ type: 'get', data: transaction });
    }


    return (
        <globalState.Provider value={{ ...state, globalStateHandler, getInitialData }}>
            {probs.children}
        </globalState.Provider>
    )
}

export default GlobalState;

