import React, { useState } from 'react';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
  const [year, setYear] = useState(2022);

  const filterChangeHandler = (year) => {
    setYear(year);
  }

  return (
    <div className="expense-list">
      <ExpensesFilter onFilterChange={filterChangeHandler}/>
      {props.expenses.map((expense) =>
        (expense.date.getFullYear() == year) &&
          <ExpenseItem key={expense.id} {...expense}/>)}
    </div>
  );
}

export default ExpenseList;
