import React, { ReactNode } from 'react'
import Button from '../bases/Button'

type FromType = {
    title: string;
    submitText: string;
    toggleText: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onClick: () => void;
    children: ReactNode;
}

const Form: React.FC<FromType> = ({title, submitText, toggleText, onSubmit, onClick,  children}) => {
  return (
    <section className='container max-w-lg mx-auto py-6 text-center rounded-xl bg-white shadow-md'>
        <h2 className='mb-8 pb-3 font-bold text-xl border-b shadow-sm'>{title}</h2>
        <form onSubmit={onSubmit} className='w-80 mx-auto flex flex-col items-center gap-y-4'>
            {children}
            <div className='w-full flex justify-end'>
            <Button type={'submit'} cls={'text-sky-400 border-sky-400 hover:text-white hover:bg-sky-500 text-sm'}>{submitText}</Button>
            </div>
            <Button type={'button'} onClick={onClick} cls={'text-sky-400 border-none hover:underline text-sm'}>{toggleText}</Button>
        </form>
    </section>
  )
}

export default Form
