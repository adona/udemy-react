import Button from "../general/Button";
import styles from "./NewUserForm.module.css";

function NewUserForm(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());
    // form.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className={styles.field}>
          <label htmlFor="age">Age (years)</label>
          <input type="number" id="age" name="age" />
        </div>
      </div>
      <Button>Add User</Button>
    </form>
  );
}

export default NewUserForm;
