import { createContext } from 'react';

export const expenseDetails = {
    transactions: [],
}
const globalState = createContext();
export default globalState;