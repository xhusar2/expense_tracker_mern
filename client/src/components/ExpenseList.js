import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddExpense from './AddExpense';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]); // Initialize as an empty array

  const fetchExpenses = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      console.log(apiUrl);
      const res = await axios.get(`${apiUrl}/api/expenses`);
      if (Array.isArray(res.data)) {
        setExpenses(res.data);
      } else {
        console.error("API response is not an array", res.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <AddExpense refreshExpenses={fetchExpenses} /> {/* Pass the function as a prop */}
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>{expense.name}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
