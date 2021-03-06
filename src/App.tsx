import React, { useState } from 'react';
import Input from "./components/Input";
import Form from "./components/Form";
import { useForm } from './hooks/useForm';
import InputView from "./components/Input/InputView";

const App = () => {

    const [errors, onChange, onSubmit, values ] = useForm()

    const [localValue, setLocalValue] = useState({ name: '', value: '' })
    console.log('localValue', localValue)

    const localChange = ({ name, value }) => {
        setLocalValue({
            name, value
        })
    }

    const handleSubmit = ({ name, value }) => {
        console.log('submit')
        return { name, value }
    }

    const handleChange = ({ name, value }) => {
        console.log('onchange', { name, value })
        onChange({ name, value })
    }

    return (
        <div>
            <Form onChange={handleChange} onSubmit={() => onSubmit(handleSubmit)} values={values}>
                <Input name="name" />
                <Input name="age" />
                <button type="submit">submit</button>
            </Form>

            <InputView name="1" onChange={localChange} value={localValue.value} />
        </div>
    );
};

export default App;
