import React, { FC } from 'react';
import InputView from "./InputView";
import InputComponent from "./InputComponent";

interface IInput {
    name: string,
}

const Input: FC<IInput> = ({ name }) => (
        <InputComponent name={name}>
            {(props ) => <InputView name={name} {...props} />}
        </InputComponent>
    );

export default Input;
