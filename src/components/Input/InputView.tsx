import React, { FC } from 'react';
import { IInputProps } from '../../interfaces';

const InputView: FC<IInputProps> = ({ onChange, value, error, name }) => (
        <input onChange={onChange} value={value} name={name}/>
    );

export default InputView;
