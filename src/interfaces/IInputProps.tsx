export interface IInputProps {
    onChange?(value: {}): void,
    value?: string|number,
    error?: string,
    name: string,
    label?: string,
    type?: string,
}
