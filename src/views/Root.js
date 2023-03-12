
import React from "react";
import styled, {ThemeProvider} from "styled-components";
import UsersList from "../components/organisms/UsersList/UsersList";
import  GlobalStyle  from "assets/styles/globalStyle";
import {theme} from 'assets/styles/theme'


const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
 
`;


const Root = () => (
  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <Wrapper>
    <UsersList title = {"Users listen"}/>
  </Wrapper>
  </ThemeProvider>
  
);

export default Root;