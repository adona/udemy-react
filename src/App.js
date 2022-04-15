import React, { useState } from 'react';


import ExpenseList from "./components/expense_list/ExpenseList";
import NewExpense from "./components/new_expense/NewExpense";

const startingExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(startingExpenses);

  const addExpenseHandler = (expense) => {
    expense.date = new Date(expense.date);  // Convert string to date
    expense.id = Math.random().toString();

    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
