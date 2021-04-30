import React, { FC } from 'react';
import styled from "styled-components";
import { IInputProps } from "../interfaces";

const InputView: FC<IInputProps> = ({ value, onChange, type = "text", disabled }) =>
    <InputWrapper disabled={disabled}>
        <input
            value={value}
            onChange={e => onChange(e.target.value)}
            type={type}
            disabled={disabled}
        />
    </InputWrapper>
;

interface IInputWrapper {
    disabled: boolean,
}

const InputWrapper = styled.div<IInputWrapper>`
  background-color: ${({ disabled }) => disabled ? "gray" : "white"};
`

export default InputView;
