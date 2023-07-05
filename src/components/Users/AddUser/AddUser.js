import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

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
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
          <input
            name="username"
            id="username"
            type="text"
            onChange={(val) => inputChangeHandler("name", val)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" name="age" type="number" />
        <Button type="submit" />
      </form>
    </Card>
  );
};

export default AddUser;
