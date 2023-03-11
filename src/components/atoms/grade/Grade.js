import React from "react";
import styled from "styled-components";

const StyledGrade = styled.div`
    font-size: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.average === 2.4?'red':'green'};

`;

const Grade = (props) => (
    <StyledGrade>
        {props.average}
        
    </StyledGrade>
);

export default Grade;