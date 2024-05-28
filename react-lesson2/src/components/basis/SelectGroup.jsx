import React from "react";

const SelectGroup = ({ value, onChange, cond }) => {
  return (
    <>
      {cond.map((select, idx) => (
        <div key={idx} className="mr-4">
          <select
            name={select.name}
            value={select.value}
            onChange={onChange}
            className=" px-2 py-1 mr-2 border border-slate-300 rounded-md"
          >
            {select.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span>{select.label}</span>
        </div>
      ))}
    </>
  );
};

export default SelectGroup;
