import { useState } from "react"

export const useForm = (): [errors: {}, onChange: (formData: {}) => void, onSubmit: (fn: (values: {}) => void) => void, values: {}] => {

    const [values, setValues] = useState({})

    console.log('form values', values)

    const errors: [] = []

    const onSubmit = (fn: (values: {}) => void) => {
        console.log('submit values', values)
        setValues({})
        fn(values)
    }

    const onChange = ({ name, value }) => {
        console.log('formData', { name, value })
        setValues(state => ({ ...state, [name]: value }))
    }

    return [errors, onChange, onSubmit, values]
}
