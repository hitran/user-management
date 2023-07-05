import styles from "./AddUser.module.css";
import Button from "../../Button/Button";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
    props.onAddUser(e.target.value);
  };

  const inputChangeHandler = (type, val) => {
    if (val.trim().length === 0 || (type === "age" && (val < 0 || val > 120))) {
      return props.isFormValid(false);
    }
    props.isFormValid(true);
  };

  return (
    <form onSubmit={addUserHandler}>
      <div className={styles.input}>
        <label htmlFor="username">User Name</label>
        <input
          name="username"
          id="username"
          type="text"
          onInputChange={(val) => inputChangeHandler("name", val)}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" name="age" type="number" />
      </div>
      <Button type="submit" />
    </form>
  );
};

export default AddUser;
