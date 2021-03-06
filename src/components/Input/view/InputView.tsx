import React, { FC } from 'react';
import { IInputProps } from '../../../interfaces';
import './styles/index.css'

const InputView: FC<IInputProps> = ({ onChange, value, error, label,  name, type = 'text' }) => (
        <div className="b-input-wrapper">
            {label && <div className="b-input-label">{label}</div>}
            <input type={type} onChange={e =>onChange && onChange({ name, value: e.target.value })} value={value} name={name} />
            {error && <div className="b-input-error">{error}</div>}
        </div>
    );

export default InputView;
