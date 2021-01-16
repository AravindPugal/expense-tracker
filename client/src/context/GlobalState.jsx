import { useReducer } from 'react';
import globalState, { expenseDetails } from './contextVariable'
import handlerFunction from './handlerFunction';
const GlobalState = (probs) => {
    const [state, globalStateHandler] = useReducer(handlerFunction, expenseDetails);
    const newObject = {}
    return (
        <globalState.Provider value={{ ...state, globalStateHandler }}>
            {probs.children}
        </globalState.Provider>
    )
}

export default GlobalState;

