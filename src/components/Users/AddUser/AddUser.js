import { useState, useRef } from 'react'
import styles from './AddUser.module.css'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import ErrorModal from '../../ErrorModal/ErrorModal'

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = (e) => {
    const enteredUsername = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    e.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)',
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (a positive value)',
      })
      return
    }
    props.onAddUser({ name: enteredUsername, age: enteredAge })
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const closeModalHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={closeModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
