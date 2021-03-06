import React, { FC } from 'react';
import InputView from "./view/InputView";
import InputModel from "./model/InputModel";
import TextareaView from './view/TextareaView';

interface IInput {
    name: string,
    values?: {},
    label?: string,
    type?: string,
}

const Input: FC<IInput> = ({ name , values,  ...props }) => <InputModel name={name} value={values && values[name]}>
        {(childProps) => <InputView name={name} {...childProps} {...props} />}
    </InputModel>;

const Textarea: FC<IInput> = ({ name , values,  ...props }) => <InputModel name={name} value={values && values[name]}>
        {(childProps) => <TextareaView name={name} {...childProps} {...props} />}
    </InputModel>;

export { Input, Textarea };
