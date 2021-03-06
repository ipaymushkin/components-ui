import React, { FC } from 'react';
import { IInputProps } from '../../interfaces';

const TextareaModel: FC<IInputProps> = ({ onChange, value, error, name }) => {
    console.log('TextareaModel', value, name)
    return <textarea onChange={e =>onChange && onChange({ name, value: e.target.value })} value={value} name={name} />
};

export default TextareaModel;
