import React from "react";
import { useNavigate } from "react-router-dom";

const FormButton = ({ text, to }) => {
  const navigate = useNavigate();

  return (
    <button
      className="py-2 px-4 text-slate-200 bg-teal-400 rounded-sm"
      onClick={() => navigate(to)}
    >
      {text}
    </button>
  );
};

export default FormButton;
