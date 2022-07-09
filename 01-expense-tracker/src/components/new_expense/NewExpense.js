import React, {useState} from 'react';
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  const newExpenseHandler = (expense) => {
    setIsEditing(false);
    props.onNewExpense(expense);
  }

  return(
    <div className='new-expense'>
      {!isEditing ?
        <button onClick={startEditingHandler}>Add New Expense</button> :
        <NewExpenseForm
          onNewExpense={newExpenseHandler}
          onCancel={stopEditingHandler}
        />
      }
    </div>
  )
}

export default NewExpense;
