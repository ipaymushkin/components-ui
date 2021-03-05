import React, { FC } from 'react';
import { IChildren, IInputProps } from '../../interfaces';

const InputComponent: FC<IChildren & IInputProps> = ({ children , value = "", onChange = () => {}, error= '', name = '' }) => (
        <>
            {children({ value, onChange, error, name })}
        </>
    );

export default InputComponent;
