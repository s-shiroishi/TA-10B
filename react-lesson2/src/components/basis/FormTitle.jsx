import React from "react";

const FormTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center border-b rounded-t-sm border-teal-500 bg-teal-200">
      <h2 className="py-1">{title}</h2>
    </div>
  );
};

export default FormTitle;
