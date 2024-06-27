import React, { ReactNode } from 'react'

type MainProps = {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({children}) => {
  return (
    <div className='w-screen'>{children}</div>
  )
}

export default Main