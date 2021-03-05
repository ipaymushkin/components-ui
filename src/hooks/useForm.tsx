import { useState } from "react"

export const useForm = (model: {}) => {

    const [values, setValues] = useState(model)

    const errors: [] = []

    const onSubmit = () => {
        console.log('values', values)
    }

    return [errors, onSubmit]
}
