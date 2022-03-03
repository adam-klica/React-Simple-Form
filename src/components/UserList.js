import React, { useState } from "react";
import UserForm from "./UserForm";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const newUsers = [user, ...users];

    setUsers(newUsers);
  };

  const removeUser = (id) => {
    const removedArr = [...users].filter((user) => user.id !== id);

    setUsers(removedArr);
  };

  return (
    <>
      <UserForm onSubmit={addUser} />
      <User users={users} removeUser={removeUser} />
    </>
  );
}

export default UserList;
