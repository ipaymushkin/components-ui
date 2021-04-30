import React  from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { IInputProps } from "../components/Input/interfaces";
import { Input as InputComponent } from "../components/Input";

export default {
    title: 'Components/Form',
    component: InputComponent,
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: ['text', 'password', "number"]
            }
        },
        value: {
            control: {
                type: "text"
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        }
    },
} as Meta;

const Template: Story<IInputProps> = (props) => <InputComponent {...props}/>

export const Input = Template.bind({
    type: "text"
});
Input.args = {
    value: "hello",
    type: "text",
    disabled: false,
};
