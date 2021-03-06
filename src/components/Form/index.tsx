import React, { FC, useState } from 'react';

interface IFormChildren {
    children: any,
    onSubmit: any,
    onChange(data: {}): void,
    values: {},
}

const Form: FC<IFormChildren> = ({ children, onSubmit, onChange, values }) => {

    const [formData, setFormData] = useState({})

    const formChangeHandler = (data: {}) => {
        console.log('data', data)
        setFormData(state => ({ ...state, ...data }))
        onChange(formData)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        onSubmit()
    }

    console.log('form back values', values)

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            form
            {React.Children.map(children, child => React.cloneElement(child, { onChange: formChangeHandler, values }))}
        </form>
    )
};

export default Form;
