import React, { FC } from 'react';
import { IInputProps } from "../interfaces";

const InputView: FC<IInputProps> = ({ value, onChange, type = "text" }) =>
    <input
        value={value}
        onChange={e => onChange(e.target.value)}
        type={type}
    />;

export default InputView;
