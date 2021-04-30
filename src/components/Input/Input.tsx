import React, { FC } from 'react';
import { IInputProps } from "./interfaces";
import InputModel from "./model";
import InputView from "./view";

const Input: FC<IInputProps> = ({ type, value, onChange }) => (
    <InputModel value={value} onChange={onChange} type={type}>
        {({ value: valueProp, onChange: onChangeProp, type: typeProp }) =>
            <InputView
                value={valueProp}
                onChange={onChangeProp}
                type={typeProp}
            />}
    </InputModel>
);

export default Input;
