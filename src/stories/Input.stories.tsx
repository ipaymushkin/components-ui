import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from "../components/Input";
import { IInputProps } from "../interfaces";

export default {
    title: 'Components/Input',
    component: Input,
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;
//
export const Common = Template.bind({});
Common.args = {
    label: 'Input Common',
    name: "name"
};
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
