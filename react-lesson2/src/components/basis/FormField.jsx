import React from "react";

const FormField = ({ label, children }) => {
  return (
    <div>
      <p className="mx-7 mt-2 text-cyan-700 ">{label}</p>
      <div className="h-auto my-3 mx-4 flex">{children}</div>
    </div>
  );
};

export default FormField;
