import React from "react";

const FormContent = ({ children }) => {
  return <form className="flex flex-col gap-y-3 ">{children}</form>;
};

export default FormContent;
