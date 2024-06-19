import React, { ReactNode } from 'react'

type ButtonProps = {
  type: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  cls?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({type, onClick, cls, children}) => {
  return (
    <button type={type} onClick={onClick} className={`border py-1 px-3 rounded-md ${cls}`}>{children}</button>
  )
}

export default Button
