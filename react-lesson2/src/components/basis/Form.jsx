import React from "react";

const Form = ({ header, body, footer }) => {
  return (
    <div className="h-4/6 w-4/6 flex flex-col items-center justify-center ">
      <div className="relative h-auto w-3/4 gap-y-5 border border-teal-500 rounded-sm overflow-auto">
        {header}
        {body}
      </div>
      <div className="h-20 w-3/4 flex items-center justify-center gap-x-10">
        {footer}
      </div>
    </div>
  );
};

export default Form;
