import React, { FC } from 'react';
import InputView from "./view/InputView";
import InputModel from "./model/InputModel";
import TextareaView from './view/TextareaView';

interface IInput {
    name: string,
    value?: string | number,
    label?: string,
    type?: string,
}

const Input: FC<IInput> = ({ name, value, ...props }) => <InputModel name={name} value={value}>
    {(childProps) => <InputView name={name} {...childProps} {...props} />}
</InputModel>;

const Textarea: FC<IInput> = ({ name, value, ...props }) => <InputModel name={name} value={value}>
    {(childProps) => <TextareaView name={name} {...childProps} {...props} />}
</InputModel>;

export { Input, Textarea };
