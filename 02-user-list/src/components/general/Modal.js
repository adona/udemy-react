import styles from "./Modal.module.css";
import Button from "./Button";

function Modal(props) {
  return (
    <div>
      <div className={styles.background} onClick={props.onClose}></div>
      <div className={`${styles.modal} ${props.className}`}>
        <header className={styles.header}>{props.title}</header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
