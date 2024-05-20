import React from "react";

const RadioGroup = ({ value, onChange, onClick, cond }) => {
  return (
    <>
      {cond.values.map((_value, idx) => (
        <label key={idx} className="px-2">
          <input
            onChange={(e) => onChange(e.target.value)}
            onClick={(e) => onClick(e.target.value + 1)}
            type="radio"
            name={cond.name}
            value={_value}
            checked={value === _value}
          />
          <span>{_value}</span>
        </label>
      ))}
    </>
  );
};

export default RadioGroup;
