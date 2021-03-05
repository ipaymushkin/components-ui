import React, { FC } from 'react';

interface IChildren {
    children(data: {
        [key: string]: string|number|(() => void)
    }): React.ReactElement
}

const InputComponent: FC<IChildren> = ({ children }) => (
        <div>
            {children({ a: 1, b: 'a' })}
        </div>
    );

export default InputComponent;
