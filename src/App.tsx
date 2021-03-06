import React, { useState } from 'react';
import Input from "./components/Input";
import Form from "./components/Form";
import { useForm } from './hooks/useForm';
import InputView from "./components/Input/InputView";
import { IChangeEvent } from './interfaces';

const App = () => {

    const [errors] = useForm({
        name: '',
        age: '',
    })

    const [localValue, setLocalValue] = useState('')
    console.log('localValue', localValue)

    const localChange: IChangeEvent = (value) => {
        setLocalValue(value)
    }

    return (
        <div>
            <Form onSubmit={() => {}}>
                <Input name="name" />
                <Input name="age" />
            </Form>

            <InputView name="1" onChange={localChange} value={localValue} />
        </div>
    );
};

export default App;
