import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../../firebase'
import Layout from '../layout/Layout'
import Button from '../bases/Button'
import WalletPopup from '../organisms/WalletPopup';
import { UserType } from "../../types/user"

type DashboardProps = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  otherUsers: UserType[];
}

const Dashboard: React.FC<DashboardProps> = ({user, setUser, otherUsers}) => {
  const [isWalletOpen, setIsWalletOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserType>(null);

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('user');
        setUser(null);
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  };

  const handleWallet = (user: UserType) => {
    setIsWalletOpen(!isWalletOpen);
    setSelectedUser(user);
  };

  return (
    <>
      <Layout>
        <div className='container mx-auto max-w-screen-sm'>
          <div className='text-end'><Button type={'submit'} onClick={() => logout()} cls={'text-red-400 border-red-400 hover:text-white hover:bg-red-500 text-sm'}>ログアウト</Button></div>
          <div className='mt-4 flex justify-between text-xl'>
            <p>{user?.name}さんようこそ！！</p>
            <p>残高 : {user?.wallet}</p>     
          </div>
          <section className='mt-10'>
            <h2 className='text-center font-bold text-3xl'>ユーザ一覧</h2>
            <div className='h-60 pt-5 overflow-y-auto'>
              <ul>
                {otherUsers.map((otherUser) => (
                  <li key={otherUser?.id} className='mb-2 pb-1 flex justify-between border-b border-slate-300 shadow-md'>
                    <h3 className='text-lg'>{otherUser?.name}</h3>
                    <div>
                      <Button type={'button'} onClick={() => handleWallet(otherUser)} cls={'mr-2 bg-sky-500 text-white text-sm hover:opacity-80'}>walletを見る</Button>
                      <Button type={'button'} cls={'bg-sky-500 text-white text-sm hover:opacity-80'}>送る</Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section> 
        </div>
      </Layout>
      {isWalletOpen && <WalletPopup user={selectedUser} onClick={() => handleWallet(null)}/>}
    </>
  )
}

export default Dashboard