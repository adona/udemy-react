import styles from "./Modal.module.css";
import Button from "./Button";

function Modal(props) {
  return (
    <div className={styles.background} onClick={props.handleOnClose}>
      <div className={`${styles.modal} ${props.className}`}>
        <div className={styles.header}>{props.title}</div>
        <div className={styles.content}>
          <div className={styles.message}>{props.message}</div>
          <div className={styles["button-container"]}>
            <Button onClick={props.handleOnClose}>Okay</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
