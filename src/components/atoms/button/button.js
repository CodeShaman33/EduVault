import React from "react";
import styled from "styled-components";
import {ReactComponent as DeleteIcon} from 'assets/icons/delete-icon.svg';


const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.grey};
  border-radius: ${({borderRadius}) => borderRadius || '50px' };
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  padding: 0%;

  svg {
    width: 70%;
    height: 70%;
  }
`;

const alertMe = () => {
  alert('You clicked the button!');
}

const Button = (props) => (
    <StyledButton {...props}>
        <DeleteIcon />
    </StyledButton>
);

export default Button;