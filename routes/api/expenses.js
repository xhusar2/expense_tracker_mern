const express = require('express');
const router = express.Router();
const Expense = require('../../models/Expense');

// @route GET api/expenses
// @desc Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/expenses
// @desc Add a new expense
router.post('/', async (req, res) => {
  const { name, amount } = req.body;

  try {
    const newExpense = new Expense({
      name,
      amount
    });

    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
