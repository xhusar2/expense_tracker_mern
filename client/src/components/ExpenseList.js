import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        const res = await axios.get(`${apiUrl}/api/expenses`); // Use the base URL from env variable
        console.log(res.data); // Add this line to debug the response
        if (Array.isArray(res.data)) {
          setExpenses(res.data);
        } else {
          console.error("API response is not an array", res.data);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>{expense.name}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
