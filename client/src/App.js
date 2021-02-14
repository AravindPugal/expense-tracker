import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import InputForm from './components/InputForm';
import GlobalState from './context/GlobalState';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ExpenseTracker />
        </Route>
        <Route path='/sign-up'>
          <Signup />
        </Route>
        <Route path='/sign-in'>
          <Signin />
        </Route>
      </Switch>
    </Router>
  )

}

function ExpenseTracker() {
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
