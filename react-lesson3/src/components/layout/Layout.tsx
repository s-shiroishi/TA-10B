import React, { ReactNode } from 'react';
import Header from '../bases/Header'
import Main from '../bases/Main';
import Footer from '../bases/Footer'

type LayoutProps = {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
        <Header/>
        <Main>{children}</Main>
        <Footer/>
    </>
  )
}

export default Layout
