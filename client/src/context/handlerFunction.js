export default function handlerFunction(previousState, action) {
    switch (action.type) {
        case "get":
            return { ...previousState, transactions: action.data };
        case "add":
            return { ...previousState, transactions: [...previousState.transactions, action.data] }
        case "remove":
            console.log(previousState);
            return {
                ...previousState,
                transactions: previousState.transactions.filter((transaction) => {
                    return transaction._id !== action.id;
                })
            }
        default:
            return previousState;
    }

}