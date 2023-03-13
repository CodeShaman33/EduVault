import React, {useState, useEffect} from "react";
import { users as dataUsers } from "data/users";
import UsersListItem from "components/molecules/UserListItem/UsersListItem.js";
import {Wrapper, StyledList} from "components/organisms/UsersList/UsersListStyle";



const UsersList = () => {

  const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(false);

  const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dataUsers) {
          resolve([...dataUsers]);
  
        } else {
          reject({message: "Something went wrong"});
        }
      }, 2000);
    })
  }



  useEffect(() => {
    
    setIsLoading(true);
    mockAPI()
    .then((data) => {
      setIsLoading(false);
      setUsers(data);
    })
    }

  , []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter(user => user.name!== name);
    setUsers(filteredUsers);
    
  }
  





return (
  <Wrapper>
    <h1>{isLoading ? "Loading..." : 'Users List'}</h1>
    <StyledList>
      {users.map((userData, i) => (
        <UsersListItem deleteUser = { deleteUser  } index={i} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

}



export default UsersList;
