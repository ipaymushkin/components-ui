import React, { FC } from 'react';
import { IInputProps } from '../../../interfaces';
import './styles/index.css'

const TextareaModel: FC<IInputProps> = ({ onChange, value, error, name, label }) => <div className="b-textarea-wrapper">
    {label && <div className="b-textarea-label">{label}</div>}
    <div className="b-textarea-field"><textarea onChange={e => onChange(e.target.value)} value={value} name={name}/>
    </div>
    {error && <div className="b-textarea-error">{error}</div>}
</div>;

export default TextareaModel;
