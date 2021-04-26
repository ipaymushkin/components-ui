import React from 'react'

const PlainInput = ({ children, name, onChange, value, label }) => (
    <div>
        {children({ onChangeCallback: onChange, value, label })}
    </div>
)

export default PlainInput
