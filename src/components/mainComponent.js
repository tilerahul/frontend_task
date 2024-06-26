import React, { useEffect, useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";
import { message } from "antd";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, editUser } = props;

  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = ({ name, email }) => {
    if (editMode) {
      editUser(currentUser.id, { name, email });
      setEditMode(false);
      setCurrentUser(null);
      message.success("User Details Updated !!!");
    } else {
      addUser({ name, email });
      message.success("User Added Successfully !!!");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleEdit = (user) => {
    alert('Make Your Changes in Input Field')
    setCurrentUser(user);
    setEditMode(true);
  };

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} user={currentUser} editMode={editMode} />
      <SimpleTable dataSource={userState.users} deleteUser={deleteUser} handleEdit={handleEdit} />
    </div>
  );
}

export default MainComponent;
