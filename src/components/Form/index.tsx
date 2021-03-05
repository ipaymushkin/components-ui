import React, { FC } from 'react';

interface IFormChildren {
    children: React.ReactNode,
    onSubmit(): void,
}

const Form: FC<IFormChildren> = ({ children, onSubmit }) => (
        <div>
            form
            {children}
        </div>
    );

export default Form;
