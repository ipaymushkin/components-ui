export interface IInputProps {
    onChange(value: string|number): void,
    value: string|number,
    error?: string,
    name: string,
    label?: string,
    type?: string,
    placeholder: string
}
