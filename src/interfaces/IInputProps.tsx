
export interface IInputProps {
    onChange?(value: {}): void,
    value?: string,
    error?: string,
    name: string,
    label?: string,
    type?: string,
}
