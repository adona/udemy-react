import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const years = ['2022', '2021', '2020', '2019'];

  const dropdownChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <label htmlFor='expenses-filter__dropdown'>Filter by year</label>
      <select id="expenses-filter__dropdown" onChange={dropdownChangeHandler}>
        {years.map((year) =>
          <option key={year} value={year}>{year}</option>
        )}
</select>
    </div>
  );
};

export default ExpensesFilter;
