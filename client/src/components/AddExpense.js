import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      name,
      amount
    };

    await axios.post('/api/expenses', newExpense);

    setName('');
    setAmount('');
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
