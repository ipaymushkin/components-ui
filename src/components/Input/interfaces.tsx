import React from "react";

export interface IInputProps {
    value: string | number,
    onChange(value: string | number): void,
    type?: "text" | "password" | "number",
    disabled?: boolean,
}

export interface IInputChildren {
    children(data: {
        value: string | number,
        onChange(value: string | number): void,
        type?: "text" | "password" | "number",
        disabled?: boolean,
    }): React.ReactElement,
}
