import React, { ReactNode } from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import {LoginFormType} from '../../types/login';

type FormInputProps = {
    type: string;
    name: 'email' | 'password';
    placeholder?: string;
    register: UseFormRegister<LoginFormType>;
    errors: FieldErrors<LoginFormType>;
    children: ReactNode;
}

const LoginFormInput: React.FC<FormInputProps> = ({type, name, placeholder, register, errors, children}) => {
  const validationRules = {
    email: { required: 'メールアドレスは必須です。' , pattern: { value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/, message: '不適切なメールアドレスです。'} },
    password: { required: 'パスワードは必須です。', minLength: {value: 6, message: '6文字以上入力してください。'} } 
  };

  return (
    <label htmlFor={name} className='w-full text-sm'>
      <div className='flex justify-between'>
        {children}
        <input type={type} placeholder={placeholder} {...register(name, validationRules[name])}  className='w-48 px-2 border border-slate-500 outline-none'/>
      </div>
        {errors[name] && <div className='mt-1 text-right'><span className="text-red-500 text-xs">{errors[name]?.message}</span></div>}
    </label>
  )
}

export default LoginFormInput;
