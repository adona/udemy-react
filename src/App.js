import React, { useState } from "react";

import NewExpense from "./components/new_expense/NewExpense";
import ExpenseList from "./components/expense_list/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const newExpenseHandler = (expense) => {
    expense.date = new Date(expense.date); // Convert string to date
    expense.id = Math.random().toString();

    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
