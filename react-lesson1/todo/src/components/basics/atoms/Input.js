import React from "react";

const Input = React.forwardRef(({ type, id, name, value, onChange, checked }, ref) => {
    return (
        <input type={type} id={id} name={name} value={value} onChange={onChange} checked={checked} ref={ref}></input>
    );
});

export default Input;