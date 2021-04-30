import React from "react";

export interface IInputProps {
    value: string | number,
    onChange(value: string | number): void,
    type?: "text" | "password" | "number",
}

export interface IInputChildren {
    children(data: {
        value: string | number,
        onChange(value: string | number): void,
        type?: "text" | "password" | "number",
    }): React.ReactElement,
}
