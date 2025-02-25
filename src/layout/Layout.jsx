import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <main className="min-h-screen mx-auto">
        <Header/>
        <Outlet/>
        <Footer/>
      </main>
    </div>
  );
}

export default Layout