import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import  Button from "components/atoms/button/button.js";
import Grade from "components/atoms/grade/Grade.js";

const Wrapper = styled.div`
display: flex;
align-items: center;
position: relative;
justify-content: space-around;


&::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: red;
}
`;




const UsersListItem = ({userData: { average, name, attendance = '0%' }}) => (
  <Wrapper >
    <Grade average = {average} />
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div> 
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.object.isRequired
};
export default UsersListItem;




