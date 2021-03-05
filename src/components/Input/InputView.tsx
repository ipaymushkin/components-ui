import React, {FC} from 'react';
import {IProps} from "./interfaces";

const InputView: FC<IProps> = ({onChange, value}) => {
    return (
        <input onChange={onChange} value={value}/>
    );
};

export default InputView;
