import React from 'react';
import './styles/App.css';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <AddExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
