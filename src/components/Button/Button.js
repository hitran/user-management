import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type}
      onClick={props.onButtonClick ? props.onButtonClick : ""}
    >
      Add User
    </button>
  );
};

export default Button;
