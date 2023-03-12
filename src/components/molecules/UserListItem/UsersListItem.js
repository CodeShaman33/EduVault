import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import  Button from "components/atoms/button/button.js";
import {Grade} from "components/atoms/grade/Grade.js";
import { StyledInfo } from "components/atoms/StyledInfo/StyledInfo";

const Wrapper = styled.div`
display: flex;
align-items: center;
position: relative;

& ${Grade}, & ${StyledInfo} {
  margin-right: 40px;
}

& ${Button} {
  right: 20px;
}



&::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  border-radius: 50%;
}
`;





const UsersListItem = ({deleteUser, index, userData: { average, name, attendance = '0%' }}) => (
  <Wrapper >
    <Grade value={average} >{average}</Grade>
    <StyledInfo>
      <p>{name}</p>
      <p>{attendance}</p>
    </StyledInfo> 
    <Button onClick = {() => deleteUser(name)}/>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.object.isRequired
};
export default UsersListItem;




