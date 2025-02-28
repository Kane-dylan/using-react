import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '@/components/Navbar';

const Layout = () => {
  return (
    <div>
      <main className="min-h-screen mx-auto overflow-hidden-clip">                                            
        {/* <Header/> */}
        <Navbar/>
        <Outlet/>
        <Footer/>
      </main>
    </div>
  );
}

export default Layout