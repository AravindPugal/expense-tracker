import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import InputForm from './components/InputForm';
import GlobalState from './context/GlobalState'

function App() {
  return (
    <GlobalState>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <InputForm />
      </div>
    </GlobalState>
  );
}

export default App;
