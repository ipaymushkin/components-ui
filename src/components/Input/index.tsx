import React, { FC } from 'react';
import InputView from "./InputView";
import InputComponent from "./InputComponent";

interface IInput {
    name: string,
    values?: {},
}

const Input: FC<IInput> = ({ name , values,  ...props }) => {
    // console.log('props', props)
    console.log('values', values, name)
     return <InputComponent name={name} value={values && values[name]}>
        {(childProps) => <InputView name={name} {...childProps} {...props} />}
    </InputComponent>
}
;

export default Input;
