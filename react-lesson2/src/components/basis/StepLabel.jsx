import React from "react";

const StepLabel = ({ text }) => {
  return (
    <span className="absolute top-0 left-0 px-2 text-xs text-white rounded-sm bg-sky-500">
      {text}
    </span>
  );
};

export default StepLabel;
