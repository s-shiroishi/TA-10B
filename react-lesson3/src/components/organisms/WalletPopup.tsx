import React from 'react'
import Button from '../bases/Button'
import { UserType } from "../../types/user"

type PopupType = {
    user: UserType;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const WalletPopup: React.FC<PopupType> = ({user, onClick}) => {
    return (
        <div className='fixed h-screen w-screen left-0 top-0 bg-black bg-opacity-50'>
        <div className='fixed left-0 right-0 bottom-2 mx-auto h-32 w-52 flex flex-col text-center justify-evenly rounded-lg bg-slate-50'>
            <p>{`${user?.name}さんの残高`}</p>
            <p>{user?.wallet}</p>
            <Button type={'button'} onClick={onClick} cls={'mx-auto mr-2 bg-red-600 border-none text-white text-sm hover:opacity-80'}>close</Button>
        </div>
    </div>
    )
}

export default WalletPopup
