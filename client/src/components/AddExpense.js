import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = ({ refreshExpenses }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      name,
      amount
    };

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/expenses`, newExpense);
      console.log(apiUrl);
      refreshExpenses(); // Refresh the expenses list after successful post
      setName('');
      setAmount('');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
