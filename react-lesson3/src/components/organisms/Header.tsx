import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='h-44 w-screen'>
        <div className='container mx-auto'>
            <h1 className='h-full'><img src='/react.svg' className='h-40 mx-auto'/></h1>
        </div>
    </header>
  )
}

export default Header
