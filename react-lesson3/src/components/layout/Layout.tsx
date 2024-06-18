import React, { ReactNode } from 'react';
import Header from '../bases/Header'
import Footer from '../bases/Footer'

type LayoutProps = {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout
