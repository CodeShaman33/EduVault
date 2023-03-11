import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UserListItem/UsersListItem';
import styled from 'styled-components';

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


const UsersList = () => (
    <Wrapper>
        <StyledList>
            {users.map((userData) =>
            (
                <UsersListItem userData = {userData}/>
            ))}
        </StyledList>
    </Wrapper>
);


export default UsersList;

