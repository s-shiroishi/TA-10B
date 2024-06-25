import React, { ReactNode } from 'react';
import Header from '../organisms/Header'
import Main from '../organisms/Main';
import Footer from '../organisms/Footer'

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
