import React, { useState, useContext } from 'react';
import axios from 'axios';
import { globalState } from '../context/GlobalState';
// import { v4 as generateId } from 'uuid'

const InputForm = () => {
    const expenseDetails = useContext(globalState);
    const [formData, setFormData] = useState({ text: "", amount: "" });
    const updateFormData = (e) => {
        const { name, value } = e.target;
        setFormData(previousState => ({ ...previousState, [name]: value }));
    }
    const addTransaction = (e) => {
        e.preventDefault();
        expenseDetails.globalStateHandler({ type: "add", data: { text: formData.text, amount: formData.amount } });
        axios.post('/transaction', {
            text: formData.text,
            amount: formData.amount
        })
        setFormData({ text: "", amount: "" })
    }
    return (
        <div >
            <form className="input-form"><h3>Add new transaction</h3>
                <label>Text</label>
                <input onChange={updateFormData} name="text" value={formData.text} type="text" placeholder="Enter text..." />
                <label>Amount [+ve for income -ve for expense]</label>
                <input onChange={updateFormData} name="amount" value={formData.amount} type="text" placeholder="Enter Amount..." />
                <button onClick={addTransaction}>Add transaction</button>
            </form>
        </div >
    )
}

export default InputForm;
