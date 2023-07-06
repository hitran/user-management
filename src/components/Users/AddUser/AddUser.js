import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: "Please enter a valid name and age (non-empty values)"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (a positive value)"
      })
      return;
    }
    props.onAddUser({ name: enteredUsername, age: enteredAge });
    setEnteredUsername("");
    setEnteredAge("");
  };

  const inputChangeHandler = (type, val) => {
    if (type === "name") {
      setEnteredUsername(val);
    } else {
      setEnteredAge(val);
    }
    //props.isFormValid(true);
  };

  const closeModalHandler = () => {
    setError(null);
  } 

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message}  onCloseModal={closeModalHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={(val) => inputChangeHandler("name", val.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={enteredAge}
            type="number"
            onChange={(val) => inputChangeHandler("age", val.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
