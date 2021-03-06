import React, { useState } from 'react';
import { Input, Textarea } from "./components/Input";
import Form from "./components/Form";
import { useForm } from './hooks/useForm';
import InputView from "./components/Input/view/InputView";

const App = () => {

    const [errors, onChange, onSubmit, values ] = useForm()

    const [localValue, setLocalValue] = useState({ name: '', value: '' })

    const localChange = ({ name, value }) => {
        setLocalValue({
            name, value
        })
    }

    const handleSubmit = (data) => {
        console.log('submit', data)
    }

    const handleChange = ({ name, value }) => {
        onChange({ name, value })
    }

    return (
        <div>
            <Form onChange={handleChange} onSubmit={() => onSubmit(handleSubmit)} values={values}>
                <Input name="name" label="Name" />
                <Input name="age" label="Age" type="number" />
                <Textarea name="comment" label="Comment" />
                <button type="submit">submit</button>
            </Form>

            <InputView name="1" onChange={localChange} value={localValue.value} />
        </div>
    );
};

export default App;
