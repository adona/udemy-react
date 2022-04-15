import './NewExpense.css'

function NewExpense(props) {

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());
    props.onAddExpense(data);
    form.reset();
  };

  return(
    <div className='new-expense'>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div className='new-expense__control'>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              min='0.01'
              step='0.01'
            />
          </div>
          <div className='new-expense__control'>
            <label htmlFor="amount">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              min='2019-01-01'
              max='2022-12-31'
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;
