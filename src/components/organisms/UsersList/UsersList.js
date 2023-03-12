import React from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UserListItem/UsersListItem.js";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

class UsersList extends React.Component {
  state = {
    users,
    title: "Users"
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.title}</h1>
        <button onClick={() => this.setState({title: 'random'})}>Change</button>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem index={i} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
