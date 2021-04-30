import { FC, useCallback } from 'react';
import { IInputProps, IInputChildren } from "../interfaces";

const InputModel: FC<IInputChildren & IInputProps> = ({ value, onChange, children, type = "text" }) => {

    const onChangeCallback = useCallback((val) => {
        onChange(val)
    }, [onChange])

    return children({ value, onChange: onChangeCallback, type })
};

export default InputModel;
