import React, { useState, useEffect } from "react";
import { users as dataUsers } from "data/users";
import UsersListItem from "components/molecules/UserListItem/UsersListItem.js";
import {
  Wrapper,
  StyledList,
} from "components/organisms/UsersList/UsersListStyle";
import { FormField } from "components/molecules/FormField/FormField.js";
import { Button } from "components/atoms/Button/Button.js";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //form state
  const [formValue, setFormValue] = useState({
    name: "",
    average: "",
    attendance: "",
  })

  const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dataUsers) {
          resolve([...dataUsers]);
        } else {
          reject({ message: "Something went wrong" });
        }
      }, 2000);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    mockAPI().then((data) => {
      setIsLoading(false);
      setUsers(data);
    });
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  //form handling 
  const handleInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  //user adding 
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValue.name,
      average: formValue.average,
      attendance: formValue.attendance,
    };
    setUsers([...users, newUser]);
    setFormValue({
      name: "",
      average: "",
      attendance: "",
    })
  }

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <FormField name="name" id="name" label="name" value = {formValue.name} onChange = {handleInputChange}/>
        <FormField name="average" id="average" label="average" value = {formValue.average} onChange = {handleInputChange}/>
        <FormField name="attendance" id="attendance" label="attendance" value = {formValue.attendance} onChange = {handleInputChange}  />
        <Button type="submit">Add</Button>
      </Wrapper>

      <Wrapper>
        <h1>{isLoading ? "Loading..." : "Users List"}</h1>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem
              deleteUser={deleteUser}
              index={i}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
