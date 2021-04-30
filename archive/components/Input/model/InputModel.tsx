import React, { FC, useCallback } from 'react';
import { IChildren, IInputProps } from '../../../interfaces';

const InputModel: FC<IChildren & IInputProps> = ({ children , value = "", onChange = () => {}, error= '', name = '' }) => {
    const onChangeCallback = useCallback(() => {

    }, [])
    return children({ value, onChange: onChangeCallback, error, name });
}

export default InputModel;
