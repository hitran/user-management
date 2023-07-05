import styles from "./Button.module.css";

const Button = ({...btnAttr}) => {
  
  return (
    <button className={styles.button} {...btnAttr}>Add User</button>
  );
};

export default Button;
