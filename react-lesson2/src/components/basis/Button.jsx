import React from "react";

const FormButton = ({ text, onClick }) => {
  return (
    <button
      className="py-2 px-4 text-slate-200 bg-teal-400 rounded-sm"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FormButton;
