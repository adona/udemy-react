import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
  return (
    <div className="expense-list">
      {props.expenses.map((expense) =>
        <ExpenseItem key={expense.id} {...expense}/>)}
    </div>
  );
}

export default ExpenseList;
