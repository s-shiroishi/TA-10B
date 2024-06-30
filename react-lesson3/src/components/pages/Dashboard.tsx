import React from 'react'
import Layout from '../layout/Layout'
import Button from '../bases/Button'
import { signOut } from "firebase/auth";
import {auth} from '../../firebase'
import { UserType } from "../../types/user"

type DashboardProps = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

const Dashboard: React.FC<DashboardProps> = ({user, setUser}) => {

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

  return (
    <Layout>
      <div className='container mx-auto max-w-screen-sm'>
        <div className='text-end'><Button type={'submit'} onClick={() => logout()} cls={'text-red-400 border-red-400 hover:text-white hover:bg-red-500 text-sm'}>ログアウト</Button></div>
        <div className='mt-4 flex justify-between text-xl'>
          <p>{user?.name}さんようこそ！！</p>
          <p>残高 : {user?.wallet}</p>     
        </div>
        <section className='mt-10'>
          <h2 className='text-center font-bold text-3xl'>ユーザ一覧</h2>
          <div className='h-60 pt-5 overflow-y-auto'></div>
        </section> 
      </div>
    </Layout>
  )
}

export default Dashboard