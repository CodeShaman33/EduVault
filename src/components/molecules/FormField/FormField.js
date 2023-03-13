
import React from 'react';

import { Input } from 'components/atoms/Input/Input';
import {Label} from 'components/atoms/Label/Label';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & ${Input} {
        width: 100%;
    }

    & ${Label} {
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        font-size: 30px;
    }
`

export const FormField = ({onChange, value, label, name, id, type = 'text'}) => {
    return (
        <Wrapper>
        <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} value={value} onChange={onChange}/>
        </Wrapper>
    );
};



