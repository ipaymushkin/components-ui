import React, { FC } from 'react';
import { IChildren, IInputProps } from '../../interfaces';

const InputModel: FC<IChildren & IInputProps> = ({ children , value = "", onChange = () => {}, error= '', name = '' }) => {
    console.log('value11', value)
    return children({ value, onChange, error, name })
};

export default InputModel;
