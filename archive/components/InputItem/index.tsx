import React from 'react';

const InputItem = ({ renderItem, onChange, value, label }) => (
        <div>
            {renderItem({ onChangeCallback: onChange, value, label })}
        </div>
    );

export default InputItem;
