import React from 'react'

type ButtonProps = {
    text: string;
    type: "submit" | "reset" | "button";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    cls?: string;
}

const Button: React.FC<ButtonProps> = ({text, type, onClick, cls}) => {
  return (
    <button type={type} onClick={onClick} className={`border py-1 px-3 rounded-md ${cls}`}>{text}</button>
  )
}

export default Button
