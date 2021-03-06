import React, { FC } from 'react';
import { IInputProps } from '../../interfaces';

const InputView: FC<IInputProps> = ({ onChange, value, error, name }) => (
        <input onChange={e => onChange && onChange(e.target.value)} value={value} name={name}/>
    );

export default InputView;
