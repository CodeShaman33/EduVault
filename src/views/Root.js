import React from "react";
import UsersList from "components/UsersList/UsersList";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
 
`;


const Root = () => (
  <Wrapper>

    <UsersList />
  </Wrapper>
);

export default Root;