import React, { FC } from 'react';
import { IInputProps } from "./interfaces";
import InputModel from "./model";
import InputView from "./view";

const Input: FC<IInputProps> = ({
                                    type = "text",
                                    value= "",
                                    onChange,
                                    disabled= false
                                }) => (
    <InputModel
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
    >
        {({
              value: valueProp,
              onChange: onChangeProp,
              type: typeProp,
              disabled: disabledProp
          }) =>
            <InputView
                value={valueProp}
                onChange={onChangeProp}
                type={typeProp}
                disabled={disabledProp}
            />}
    </InputModel>
);

export default Input;
