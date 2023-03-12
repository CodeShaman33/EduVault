import React, {useState} from "react";
import { users as dataUsers } from "data/users";
import UsersListItem from "components/molecules/UserListItem/UsersListItem.js";
import {Wrapper, StyledList} from "components/organisms/UsersList/UsersListStyle";



const UsersList = () => {

  const [users, setUsers] = useState(dataUsers);
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter(user => user.name!== name);
    setUsers(filteredUsers);
    
  }
  // const mockAPI = (success) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (users) {
//         resolve([...users]);

//       } else {
//         reject({message: "Something went wrong"});
//       }
//     }, 2000);
//   })
// }



return (
  <Wrapper>
    <h1></h1>
    <StyledList>
      {users.map((userData, i) => (
        <UsersListItem deleteUser = { deleteUser  } index={i} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

}



export default UsersList;
