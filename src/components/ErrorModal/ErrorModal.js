import styles from "./ErrorModal.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseModal}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
