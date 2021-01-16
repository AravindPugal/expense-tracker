export default function handlerFunction(previousState, action) {
    switch (action.type) {
        case "add":
            return { ...previousState, transactions: [...previousState.transactions, action.data] }
        case "remove":
            console.log(previousState);
            return {
                ...previousState,
                transactions: previousState.transactions.filter(transaction => transaction.id !== action.id)
            }
        default:
            return previousState;
    }

}