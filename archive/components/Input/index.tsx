import React, { FC } from 'react';
import InputView from "./view/InputView";
import InputModel from "./model/InputModel";
import TextareaView from './view/TextareaView';
import { IInputProps } from "../../interfaces";

interface IInput {
    name: string,
    value?: string | number,
    label?: string,
    type?: string,
}

const Input: FC<IInputProps> = (props) =>
    <InputModel {...props}>
        {(childProps) =>
            <InputView {...childProps} />}
    </InputModel>
;


const Textarea: FC<IInput> = ({ name, value, ...props }) =>
    <InputModel name={name} value={value}>
        {(childProps) =>
            <TextareaView name={name} {...childProps} {...props} />}
    </InputModel>
;

export { Input, Textarea };
