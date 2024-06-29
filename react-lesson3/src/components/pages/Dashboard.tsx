import React from 'react'
import Layout from '../layout/Layout'
import { UserType } from "../../types/user"

type DashboardProps = {
  user: UserType
}

const Dashboard: React.FC<DashboardProps> = ({user}) => {
  return (
    <Layout>
      <div className='container mx-auto max-w-screen-sm'>
        <div className='flex justify-between'>
          <p>{user?.name}さんようこそ！！</p>
          <p>残高 : {user?.wallet}</p>     
        </div> 
      </div>
    </Layout>
  )
}

export default Dashboard