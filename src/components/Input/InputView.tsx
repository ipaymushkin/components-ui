import React, { FC } from 'react';
import { IInputProps } from '../../interfaces';

const InputView: FC<IInputProps> = ({ onChange, value, error, name }) => {
    console.log('InputView', value, name)
    return <input onChange={e =>onChange && onChange({ name, value: e.target.value })} value={value} name={name} />
};

export default InputView;
