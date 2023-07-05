import React from 'react';
import AddUser from "./components/Users/AddUser/AddUser";


function App() {

  const addUserHandler = (val) => {

  };

  return (
    <div>
    <AddUser onAddUser={addUserHandler}/>
    </div>
  );
};

export default App;
