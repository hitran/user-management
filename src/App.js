import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from './components/Users/UserList/UserList';


function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (val) => {
    setUsers((currentUsers) => [...currentUsers, val]);
  };

  return (
    <div>
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={users}/>
    </div>
  );
};

export default App;
