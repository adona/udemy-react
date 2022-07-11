import React, { useState } from "react";

import Button from "../general/Button";
import Modal from "../general/Modal";
import styles from "./NewUserForm.module.css";

function NewUserForm(props) {
  const [invalid, setInvalid] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = Object.fromEntries(new FormData(form).entries());
    validateData(data);
  };

  const validateData = (data) => {
    if (data["username"].trim() === "" || data["age"] === "") {
      setInvalid(true);
      setModalTitle("Invalid input");
      setModalMessage("Please enter a valid name and age (non-empty values).");
    } else if (parseInt(data["age"]) < 0) {
      setInvalid(true);
      setModalTitle("Invalid age");
      setModalMessage("Please enter a valid age (>0).");
    }
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
      {invalid && (
        <Modal
          title={modalTitle}
          message={modalMessage}
          handleOnClose={() => setInvalid(false)}
        ></Modal>
      )}
    </form>
  );
}

export default NewUserForm;
