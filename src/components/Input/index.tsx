import React, { FC } from 'react';
import InputView from "./InputView";
import InputModel from "./InputModel";
import TextareaView from './TextareaView';

interface IInput {
    name: string,
    values?: {},
}

const Input: FC<IInput> = ({ name , values,  ...props }) => {
    // console.log('props', props)
    console.log('values', values, name)
     return <InputModel name={name} value={values && values[name]}>
        {(childProps) => <InputView name={name} {...childProps} {...props} />}
    </InputModel>
};

const Textarea: FC<IInput> = ({ name , values,  ...props }) => {
    // console.log('props', props)
    console.log('values', values, name)
    return <InputModel name={name} value={values && values[name]}>
        {(childProps) => <TextareaView name={name} {...childProps} {...props} />}
    </InputModel>
};

export { Input, Textarea };
