import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  const [year, setYear] = useState("2022");

  const filterChangeHandler = (year) => {
    setYear(year);
  };

  const filtered_expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );

  return (
    <div className="expense-list">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filtered_expenses} />
      {filtered_expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
