import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Topbar from '../Topbar/Topbar';

const Layout = () => {
  return (
    <>
        <header>
            <Topbar/>
            <Navbar/>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default Layout