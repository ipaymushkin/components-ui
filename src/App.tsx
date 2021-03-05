import React from 'react';
import Input from "./components/Input";
import Form from "./components/Form";
import { useForm } from './hooks/useForm';

const App = () => {

    const [errors] = useForm({
        name: '',
        age: '',
    })

    return (
        <div>
            <Form onSubmit={() => {}}>
                <Input name="name" />
                <Input name="age" />
            </Form>
        </div>
    );
};

export default App;
